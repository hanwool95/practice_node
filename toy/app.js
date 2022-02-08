const express = require("express")
const app = express()
const dotenv = require("dotenv")
const user_router = require("./routes/user")
dotenv.config()


app.set('port',8000)
console.log(process.env.PORT)

app.set('views', __dirname + '/views')
app.set("view engine", 'ejs')

app.get('/', (req, res) =>{
    res.render('index')
})


app.use("/user", user_router)

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 중....')
})



