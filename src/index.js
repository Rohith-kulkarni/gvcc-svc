import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";
import enquiryRoutes from "./routes/enquiries.routes.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
