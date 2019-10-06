const express=require('express')
const mongoose=require('mongoose')
const app=express()
const cors=require('cors')
app.use(cors())
const router=require('./router')

const server=require('http').Server(app)
const io=require('socket.io')(server)

const port=3001

mongoose.connect('mongodb://goweek:everton123@ds125588.mlab.com:25588/goweek-everton',

{
    useNewUrlParser:true
})
app.use((req,res,next)=>
{
    req.io=io
    return next()
})
app.use(express.json())
app.use('/',router)
server.listen(port)