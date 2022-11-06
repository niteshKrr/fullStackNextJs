const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  Roll: Number,
  passed: Boolean,
});

const teacherSchema = mongoose.Schema({
  name: String,
  subject: String,
  experience: Number,
});

const Student = mongoose.model("Student", studentSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = { Student, Teacher };
