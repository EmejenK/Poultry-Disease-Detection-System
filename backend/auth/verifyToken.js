import jwt from "jsonwebtoken";
import Vetenary from "../models/VetenarySchema.js";

export const authenticate = async (req, res, next) => {

    //get token from headers
    const authToken = req.headers.authorization;

    //check if token exists
    if (!authToken || !authToken.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "No token, Access Denied!" });
    }

    try {
        
        const token = authToken.split(" ")[1];

        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.id;
        req.role = decoded.role;

        next(); //must be call , the next function
    } catch (err) {
        
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token is expired" });
        }

        return res.status(401).json({ success: false, message: "Invalid token" });

    }
};

export const restrict = roles => async (req, res, next) => {

    const userId = req.userId;

    let user;

    const farmer = await Farmer.findById(userId);
    const vetenary = await Vetenary.findById(userId);

    if (farmer) {
        user = farmer;
    }
    if (vetenary) {
        user = vetenary;
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({ success: false, message: "You are not Authorized!" });
    }

    next();

};

