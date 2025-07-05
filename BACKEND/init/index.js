require("dotenv").config({path:"../.env"})

const mongoose = require("mongoose");
const Mongo_URL = process.env.Mongo_URL;
const Holding = require("../models/holdings.js")
const Position = require("../models/positions.js")
const Watchlist = require("../models/watchlist.js")
const holdings = require("./holdings.js")
const positions = require("./positions.js")
const watchlist = require("./watchlist.js")

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(Mongo_URL);
  console.log("DATABASE CONNECTED")
}

const holdingsData = async () => {
    await Holding.deleteMany({});
    await Holding.insertMany(holdings.Data);
    console.log("Holding Data initialized")
}

holdingsData();

const positionsData = async () => {
    await Position.deleteMany({});
    await Position.insertMany(positions.Data);
    console.log("Position Data initialized")
}

positionsData();

const watchlistData = async () => {
    await Watchlist.deleteMany({});
    await Watchlist.insertMany(watchlist.Data);
    console.log("Watchlist Data initialized")
}

watchlistData();