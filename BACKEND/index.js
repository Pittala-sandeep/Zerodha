require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Holding = require("./models/holdings.js");
const Position = require("./models/positions.js");
const Watchlist = require("./models/watchlist.js");
const Order = require("./models/Order.js");


const Mongo_URL = process.env.Mongo_URL;
const PORT = process.env.PORT || 5000;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(Mongo_URL);
  console.log("DATABASE CONNECTED")
}

app.get("/holding", async (req, res) => {
  try {
    const data =await Holding.find({})
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

app.get("/position", async (req, res) => {
  try {
    const data =await Position.find({})
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

app.get("/watchlist", async (req, res) => {
  try {
    const data =await Watchlist.find({})
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

app.listen(PORT, (req, res) => {
    console.log("APP STARTED")
})