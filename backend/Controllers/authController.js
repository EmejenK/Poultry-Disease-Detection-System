import Vetenary from "../models/VetenarySchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
    return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });
}

export const register = async (req, res) => {

    const { email, password, name, role, photo, gender } = req.body;

    try {
        // Check if user exists
        const existingUser = await Vetenary.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new Vetenary({
            name,
            email,
            password: hashedPassword,
            role,
            photo,
            gender
        });

        await newUser.save();

        res.status(200).json({ success: true, message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error, Try again later!" });
    }
};

export const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await Vetenary.findOne({ email });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found!" });
        }

        // Check if password matches
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ success: false, message: "Invalid Credentials!" });
        }

        // Generate token
        const token = generateToken(user);

        // Exclude sensitive data from user object
        const { password: userPassword, ...userData } = user.toObject();
        
        res.status(200).json({ success: true, message: "Login successfully!", token, data: userData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to Login, Try again later!" });
    }
};
