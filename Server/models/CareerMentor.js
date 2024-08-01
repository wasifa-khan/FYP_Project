const mongoose = require('mongoose')

const CareerMentorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

const CareerMentorModel = mongoose.model("UserData", CareerMentorSchema)
module.exports = CareerMentorModel