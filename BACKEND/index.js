require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

const ExpressError = require("./uilts/ExpressError.js")


app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ['https://zerodha-frontend-71is.onrender.com', "https://zerodha-dashboard-es50.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());


const Holding = require("./models/holdings.js");
const Position = require("./models/positions.js");
const Watchlist = require("./models/watchlist.js");
const Order = require("./models/Order.js");
const User = require("./models/Users.js");

const { createSecretToken } = require("./uilts/SecretToken.js");
const { validateUser, userVerification } = require('./uilts/middleware.js');
const WrapAsync = require('./uilts/WrapAsync.js');


const Mongo_URL = process.env.Mongo_URL;
const PORT = process.env.PORT || 5000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(Mongo_URL);
  console.log("DATABASE CONNECTED")
}

app.get("/holding", async (req, res) => {
  try {
    const data = await Holding.find({})
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

app.get("/position", async (req, res) => {
  try {
    const data = await Position.find({})
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

app.get("/watchlist", async (req, res) => {
  try {
    const data = await Watchlist.find({})
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

app.post("/neworder", async (req, res) => {
  let newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.post("/signup", validateUser, WrapAsync(async (req, res, next) => {
  let { username, email, password, createdAt } = req.body;
  let user = await User.findOne({ email: `${email}` });
  if (user) {
    return res.json({ success: false, message: "User already exists" });
  }
  let newUser = new User({
    username: username,
    email: email,
    password: password,
    createdAt: createdAt
  })

  await newUser.save();

  let token = createSecretToken(newUser._id);
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    path: "/",
    maxAge: 3 * 24 * 60 * 60 * 1000
  });
  res.status(201).json({
    success: true,
    message: "User signed in successfully",
    user: {
      id: newUser._id,
      email: newUser.email,
      username: newUser.username,
    },
  });
}))

app.post("/login", WrapAsync(async (req, res, next) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.json({ message: 'All fields are required' })
  }
  let existingUser = await User.findOne({ email: `${email}` })
  if (!existingUser) {
    return res.json({ message: 'Incorrect password or email' })
  }
  let auth = await bcrypt.compare(req.body.password, existingUser.password)
  if (!auth) {
    return res.json({ message: 'Incorrect password' })
  }
  let token = createSecretToken(existingUser._id);
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    path: "/",
    maxAge: 3 * 24 * 60 * 60 * 1000
  });
  res.status(201).json({ message: "User logged in successfully", success: true, token });
}))

app.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: false,
    sameSite: "Lax",
    secure: false,
    path: "/",
  });
  return res.json({ success: true, message: "Logged out successfully" });
});

app.get("/userDetails", userVerification)

app.all("{*splat}", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"))
})

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  res.status(statusCode).json({ message })
})

app.listen(PORT, (req, res) => {
  console.log("APP STARTED")
})