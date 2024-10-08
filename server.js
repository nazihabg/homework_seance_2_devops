const express=require('express');

const app=express()

app.get('/',(req,res)=>{
    res.send('Hello from the new feature ^_^ ');
});


app.get('/about',(req,res)=>{
    res.send('This is the about page ');
});


app.get('/contact',(req,res)=>{
    res.send('This is the contact page ');
});

app.listen(3000,()=>{
    console.log('server is running on http://localhost:',3000);
})