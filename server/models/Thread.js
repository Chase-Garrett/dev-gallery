const { Schema } = require("mongoose");
const userSchema = require("./User");
const messageSchema = require("./Message");

const threadSchema = new Schema({
  users: [userSchema],
  messages: [messageSchema],
});

module.exports = threadSchema;
