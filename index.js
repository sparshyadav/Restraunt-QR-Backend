import express from 'express';

const app=express();

const PORT=process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server Started at PORT: ${PORT}`);
})