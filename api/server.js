const express=require('express')
const app=express()


app.get('/',(req,resp)=>{
    resp.json({
      imgSrc:"https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"  
    })
})

app.listen(5000,()=>{
    console.log('server started at 5000')
})