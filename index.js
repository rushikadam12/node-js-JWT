require('dotenv').config()
const express=require('express')
const jwt=require('jsonwebtoken')

const app=express();
const port=3000;
const users=[
    {
        username:"john",
        password:"rushi@123"

    },
    {
        username:"jack",
        password:"jack@123",
    }
]
app.use(express.json())

app.get('/Users',(req,res)=>{
    res.send(users)
})
app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    const user={name:username}
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN)
    res.json({Token:accessToken})
})





app.listen(port,()=>{
    console.log('Server is online');
})