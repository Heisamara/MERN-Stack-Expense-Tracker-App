const express = require("express");
const app = express();
const PORT = process.env.PROT || 8000;
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");

//connect to Mongodb
mongoose
  .connect("mongodb://localhost:27017/mern-expenses")
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));

//middleware
app.use(express.json()); //?Pass incoming json data

// Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);
//*Error
app.use("/", errorHandler);

//! start the server
app.listen(PORT, console.log(`server is running on ${PORT} `));
