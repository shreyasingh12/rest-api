const express = require('express');

const app = express();

const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const postsRoute = require('./routes/posts');

app.use(bodyparser.json());

app.use('/posts', postsRoute);


app.get('/',(req,res)=>{
    res.send("shddke");
});


mongoose.connect(
    'mongodb+srv://password@cluster0-6nkeq.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {useNewUrlParser:true,
    useUnifiedTopology: true },
    () => console.log("connected to the database")
);
app.listen(3000);
