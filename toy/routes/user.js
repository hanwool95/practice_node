const express = require("express")
const router = express()

//모델 불러온느 곳
const User = require("../models/user")


router.get('/', (req, res) =>{
    // 모델 접근
    User.find((err, userList) => {
        if(err){
            return res.status(500).send({error: 'database failure'});
        }
        console.log("user", userList)
        res.render('user/index', { userList: userList, menu: "user" })
    })
    // user.find({status: "박사 과정"}) 이런식으로 필터할 수 있음

})

router.get('/new', (req, res) =>{
    res.render('user/new', { menu: "user" } )
})

// create operation
router.post('/create', (req, res)=>{
    let user = new User();
    // form으로 받은 것은 req.body안에 있음
    user.name = req.body.userName
    user.age = req.body.userAge
    user.status = req.body.status

    user.save((err) =>{
        if (err) {
            return res.status(500).send({error: 'database failure'});
        }
        res.redirect('/user')
    })
})

router.get('/:name', (req, res) =>{
    let name = req.params.name
    //하나 find
    User.findOne({name:name}, (err, user) => {
        if(err){
            return res.status(500).send({error: 'datavase failure'});
        }
        res.render(`user/user`, { user: user, menu: "user" })
    })
})

module.exports = router


