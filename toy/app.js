const express = require("express")
const app = express()

const user_router = require("./routes/user")
const mongoose = require("mongoose")


// npm install dotenv
const dotenv = require("dotenv")
dotenv.config()
const MONGO_URI = process.env.MONGO_URI
// console.log(MONGO_URI)

// npm install nodemon -> 자동 수정 가능.
//npx nodemon app


// key는 port value는 PORT인 값을 app에 넣은 것.
app.set('port',8000)
// console.log(process.env.PORT)

app.set('views', __dirname + '/views')
app.set("view engine", 'ejs')

// static file 이용. public이라는 파일. 외부에서도 접근 가능.
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) =>{
    res.render('index', {menu: "home"})
})


app.use("/user", user_router)

// 몽고db 연결
mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Successfully connected to mongodb"))
    .catch(e => console.log(e))

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 중....')
})



