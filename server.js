const express=require('express')
const app=express()


app.get('/',(req,resp)=>{
    resp.send('hi welcome to the api ')
})

app.listen(5000,()=>{
    console.log('server started at 5000')
})