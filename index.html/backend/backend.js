const express=require('express');
const app=express();
app.use(express.json());

app.post('/validate-payment',(req,res)=>res.json({status:'ok'}));
app.post('/unlock-lead',(req,res)=>res.json({unlocked:true}));

app.listen(3000,()=>console.log('Backend running'));
