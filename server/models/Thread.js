const { Schema } = require("mongoose");
const userSchema = require("./User");
const messageSchema = require("./Message");

const threadSchema = new Schema({
  participants: [userSchema],
  messages: [messageSchema],
});

module.exports = threadSchema;
