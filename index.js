var app = require('express')();
var soap = require("./node_modules/thailand-post/api.js");
var port = process.env.PORT || 7777;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/getItem', function(req, res) {
    soap.get(req.body.id, function(data) {
        res.json(data.Items);
    });

});


app.post('/getItems', function(req, res) {
    console.log(req.query.id)
    soap.gets(req.query.id, function(data) {
        res.json(data.Items);
    });

});
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});