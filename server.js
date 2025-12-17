const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const StudentRoutes=require("./routes/studentRoutes");

dotenv.config();
connectDB();

const app=express();
app.use(express.json());
app.use("/api/students",StudentRoutes);
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))