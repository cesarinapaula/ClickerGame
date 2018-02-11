// let db  = require('../database/queries')
// const express = require('express');
// const router = express.Router();


// router.get('/', db.getAllUsers);
// router.get('/logIn', db.singleUser);
// // rouer.get('/profile',( req , res )=>{
// //  res.send('Hello Angel')
// // })



// module.exports = router;


const app = require('express')();
const port = 8000;

app.get('/', (req, res)=>{
    res.send('I AM COMMITING TO EXPRESS !!')
})

// app.get('/new', (req, res)=>{
//  let num = req.params.num
//  let obj = {
//     num:Math.floor(Math.random()*100)
//  }
//  res.send(obj)
// })

app.get('/login', (req, res)=>{
    let username= req.params.username
    let obj ={
        username: 'Eltartaro102009',
        password: 'Cq4-2018'
    }
    res.send(obj)
})

app.listen(port, ()=>{
console.log('IT IS WORKING')
});

