const mongoose = require("mongoose");
const skillSchema = require("./Skill");

const { Schema } = mongoose;

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
  projectDescription: {
    type: String,
    required: true,
    trim: true,
  },
  projectUrl: {
    type: String,
    unique: true,
  },
  projectRepo: {
    type: String,
    required: true,
    minlength: 5,
  },
  projectScreenshot: {
    type: String,
  },
  projectSkills: [skillSchema],
});

module.exports = projectSchema;
