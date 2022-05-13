const express = require('express');
const cors = require('cors');
const app = express();
const tailor = require('./Routes/tailor');
const user = require('./Routes/user');
const admin = require('./Routes/admin');
const product = require('./Routes/products');
const teacher = require('./Routes/teacher');
const card = require('./Routes/card');
const student = require('./Routes/student');
const classes = require('./Routes/class');
const schoolStudents = require('./Routes/schoolStudent');
const jwt = require("jsonwebtoken");

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200 // For legacy browser support
}
app.set('view engine', 'ejs');
// app.use('/uploads', express.static('/uploads'));
// app.use(express.static(__dirname));
app.use(cors(corsOptions));
app.use(express.json());
// var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/uploads'));

app.use('/api/tailor', tailor);
app.use('/api/user', user);
app.use('/api/card',card)
app.use('/api/admin', admin);
app.use('/api/products', product);
app.use('/api/teacher',teacher);
app.use('/api/student',student);
app.use('/api/classes',classes);
app.use('/api/schoolStudents',schoolStudents)
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://maham:maham2000@cluster0.5vxx9.mongodb.net/tinder-clone?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    { useUnifiedTopology: true })
    .then(() => console.log("Connected to Gulaan...."))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send("Welcome to Gulaan.....s")
    console.log("ok")
    // res.render('index');
})

app.get("/help",(req,res) => {
    res.send("Help from Allah . Allah U Akbar")
})



app.listen(process.env.PORT || 8080, () => {
    console.log("listening on port no 8080");
})
