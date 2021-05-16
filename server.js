'use strickt';

const express=require('express');
const error404=require('./errorHandlers/404.js');
const error500=require('./errorHandlers/500.js');

const app = express();

app.get('/',(req,res)=>{
    res.send('welcome to server.js')
});

app.get('/500',(req,res)=>{
    throw new Error('SOMETHING IS ERROR');
});

app.use('*',error404);
app.use(error500);

function start(){
    app.listen(PORT,()=>{
        console.log(`listen on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start
};