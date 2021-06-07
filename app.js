const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config');



//connect to db
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (!err) {
      console.log('MongoDB Connection Succeeded.');
    } else {
      console.log('Error in DB connection : ' + err);
    }
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// const rafflesRoutes = require('./routes/raffles');
// app.use('/raffles', rafflesRoutes);

// const authRoutes = require('./routes/auth');
// app.use('/auth',authRoutes);

// //Routes
// app.get('/',(req,res)=> {
//     res.send('We are at Home directory')
// })

// app.get('/charities',(req,res)=> {
//     res.send('List of all charities and the related raffles')
// })


console.log('application startup complete')

// How to start listening
app.listen(3000, () => console.log('Restarting node server ...'));
