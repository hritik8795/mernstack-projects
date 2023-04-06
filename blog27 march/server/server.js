const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/DB");
//env config
//password - SI2wO1GzmIWXoGJ3
dotenv.config();

//router import
const userRoutes = require("./routes/userRouter");
const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
connectDB();

//test object
const port = process.env.PORT || 4000;
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

//listen
app.listen(port, () => {
  console.log(`server is ${process.env.DEV_MODE} running on the ${port}`);
});
