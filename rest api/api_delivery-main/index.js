const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const orderRoute = require("./routes/order");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(
    "mongodb+srv://Admin:Admin123+@mindfulness.tglek.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });

var corsOptions = {
  origin: [
    "https://63255e563cd2e07f436de993--resonant-licorice-b9748e.netlify.app",
    "http://localhost:3000",
    "https://fluffy-sopapillas-e80ba6.netlify.app",
  ],
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json());

app.use("/api/v1/orders", orderRoute);

app.listen(process.env.PORT || 5002, () => {
  console.log("Backend delivery server is running!");
});

// app.listen(5002, () => {
//   console.log("Backend delivery server is running!");
// });
