const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

// npm install nodemon -> 자동 수정 가능.
//npx nodemon app


// key는 port value는 PORT인 값을 app에 넣은 것.
app.set('port',8000)
console.log(process.env.PORT)

app.get('/', (req, res) =>{
    res.send('Hellow World!')
})

app.get('/user/', (req, res) =>{
    res.send('Hellow User!')
})

app.get('/user/:name', (req, res) =>{
    let name = req.params.name
    res.send(`Hellow ${name}!`)
})


app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 서버 연결 중....')
})



