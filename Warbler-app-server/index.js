const result = require('dotenv').config();
var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    cors = require('cors')


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

console.log(result);
app.get("/", function(req, res){
    res.json({message: "Send a POST require to /api/auth/login"});
});
app.listen(result.parsed.PORT, function() {
    console.log(`The server is listening on http://localhost:${result.parsed.PORT}`);
});