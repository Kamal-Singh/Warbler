const result = require('dotenv').config();
var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    messageRoutes = require('./routes/messages'),
    authRoutes = require('./routes/auth'),
    db = require('./models');


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.json({message: "Send a POST require to /api/auth/signin"});
});

app.use('/api/message/', messageRoutes);

app.use('/api/auth', authRoutes);


app.listen(result.parsed.PORT, function() {
    console.log(`The server is listening on http://localhost:${result.parsed.PORT}`);
});