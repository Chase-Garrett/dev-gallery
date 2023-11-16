const { Schema } = require("mongoose");

const skillSchema = new Schema({
  skillName: [
    {
      type: String,
    },
  ],
});

module.exports = skillSchema;
