require("dotenv").config();

require("../config/connection");
const { User } = require("../models");
const data = require("./data.json");

async function seed() {
  try {
    await User.create(data.user);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
  process.exit(0);
}

seed();
