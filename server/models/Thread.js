const { Schema, SchemaTypes } = require("mongoose");
const messageSchema = require('./Message');

const threadSchema = new Schema({
  participants: [{type: Schema.Types.ObjectId, ref: "User"}],
  messages: [messageSchema],
});

module.exports = threadSchema;
