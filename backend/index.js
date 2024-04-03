import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/auth.js";
import vetenaryRoute from "./Routes/vetenary.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
    origin: ["http://localhost:5000", "http://localhost:5173"],
    credentials: true,
    optionsSuccessStatus: 200,
};

app.get("/", (req, res) => {
    res.send("Api is running...");
});

//connect to mongodb
mongoose.set("strictQuery", false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
        });

        console.log("MongoDB connected successfully!");

    } catch (err) {
        console.error("MongoDB connection failed", err);
    }
}

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/v1/auth", authRoute); //domain/api/v1/auth/register
app.use("/api/v1/vetenaries", vetenaryRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});