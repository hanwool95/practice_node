const express = require("express")
const app = express()
const dotenv = require("dotenv")
const user_router = require("./routes/user")
dotenv.config()

// npm install nodemon -> 자동 수정 가능.
//npx nodemon app


// key는 port value는 PORT인 값을 app에 넣은 것.
app.set('port',8000)
console.log(process.env.PORT)

app.set('views', __dirname + '/views')
app.set("view engine", 'ejs')

// static file 이용. public이라는 파일. 외부에서도 접근 가능.
app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) =>{
    res.render('index')
})


app.use("/user", user_router)

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 중....')
})



