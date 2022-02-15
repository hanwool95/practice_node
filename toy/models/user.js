const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  age: { type: String, required: true},
  status: { type: String, required: true},
})

// User라는 Key에 스키마를 저장한 느낌.
module.exports = mongoose.model('User', userSchema)