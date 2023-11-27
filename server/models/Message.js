const { Schema } = require("mongoose");
const userSchema = require("./User");

const messageSchema = new Schema({
  messageText: [
    {
      type: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = messageSchema;
