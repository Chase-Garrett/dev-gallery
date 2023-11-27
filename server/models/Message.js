const { Schema } = require("mongoose");
const userSchema = require("./User");

const messageSchema = new Schema({
  messageText: [
    {
      type: String,
    },
  ],
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = messageSchema;
