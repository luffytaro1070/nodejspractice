require('dotenv').config()
const express = require('express')
// import express from 'express'
// const port=4000
const app=express()
app.get('/',(req,res)=>{
    res.send("normal home page")
})
app.get('/twitter',(req,res)=>{
    res.send("this is twitter")
})
app.get('/login',(req,res)=>{
    res.send('<h1>this is a login page</h1>')
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port `)
})