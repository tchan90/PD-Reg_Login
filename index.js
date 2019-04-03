const express=require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser= require('body-parser');
const passport = require('passport');

//import route
const users=require('./routes/api/users');

//connect to mongodb
const db=require('./config/keys').mongoURI
mongoose.connect(db, {useNewUrlParser:true}).then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err));

//bodyparser middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//Passport middleware
app.use(passport.initialize());
//Passport config
require('./config/passport')(passport);

//use route
app.use('/api/users', users);

 
const port=process.env.PORT||7000;
app.listen(port, ()=> console.log(`Server running on port ${port}`));