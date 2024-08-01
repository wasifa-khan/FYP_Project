const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const CareerMentorModel = require('./models/CareerMentor')


const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/CareerMentor");


app.post("/login", (req , res) => {
  const {email, password} = req.body;
  CareerMentorModel.findOne({email: email})
  .then (user => {
    if(user){
      if(user.password === password){
        res.json("Success")
      }else{
        res.json("The password is incorrect")
      }
    } else{
      res.json("No record found")
    }
  })
})

app.post('/signup', (req, res)=>{
    CareerMentorModel.create(req.body)
    .then(UserData => res.json(UserData))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
  console.log("Server is Running");
})