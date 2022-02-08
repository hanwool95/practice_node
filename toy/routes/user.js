const express = require("express")
const router = express()


router.get('/', (req, res) =>{
    const userList = ["Jinsu", "Soomin", "Seongmin", "Hanwool", "Woojin", "Kyuha"]
    res.render('user/index', { userList: userList })
})

router.get('/:name', (req, res) =>{
    let name = req.params.name
    res.render('user/user', { userName: name } )
})

module.exports = router


