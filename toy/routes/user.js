const express = require("express")
const router = express()


router.get('/', (req, res) =>{
    const userList = ["Jinsu", "Soomin", "Seongmin", "Hanwool", "Woojin", "Kyuha"]
    res.render('user/index', { userList: userList, menu: "user" })
})

router.get('/new', (req, res) =>{
    res.render('user/new', { menu: "user" } )
})

router.get('/:name', (req, res) =>{
    let name = req.params.name
    res.render('user/user', { userName: name, menu: "user" } )
})

module.exports = router


