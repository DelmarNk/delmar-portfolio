const express = require('express')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const projects = require('./projects.json')
const about = require('./about.json')

app.use(cors())

app.get('/', (req,res)=>{
    res.send('<h1>This is my portfolio API</h1> <p><strong>/projects</strong> for all projects</p> <p><strong>/about</strong> for about info </p>')
})
app.get('/projects', (req,res)=>{
    res.json(projects)
})
app.get('/about', (req,res)=>{
    res.json(about)
})
app.get('/*', (req,res)=>{
    res.send('<h1>404 page not found</h1>')
})

app.listen(PORT, ()=>{
    console.log(`You're now on PORT ${PORT}`)
})