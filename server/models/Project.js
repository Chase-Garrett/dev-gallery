const { Schema } = require("mongoose");
const skillSchema = require("./Skill");

const projectSchema = new Schema({
  projectName: {
    type: String,
    trim: true,
  },
  projectDescription: {
    type: String,
    trim: true,
  },
  projectUrl: {
    type: String,
  },
  projectRepo: {
    type: String,
    minlength: 5,
  },
  projectScreenshot: {
    type: String,
  },
  projectSkills: [skillSchema],
});

module.exports = projectSchema;
