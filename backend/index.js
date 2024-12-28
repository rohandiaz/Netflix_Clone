import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import connectDb from "./utils/db.js";

connectDb();

dotenv.config({
    path: "./.env"
})

const app = express();
//middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: 'https://netflix-clone-1-b9iq.onrender.com',
    credentials: true
}
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`⚙️ Server is running at ${process.env.PORT}`);
});