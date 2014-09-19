
var express = require('express'),
    app = express();

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/static', express.static(__dirname + '/static'));

julia = require('node-julia');
julia.start();
julia.exec("include","./api/predict.jl",function(r){
  console.log('r2_total loaded', r);
});

var predict = require('./api/predict.js')();

app.get('/views/dashboard', function(req, res) {

  var preductResults = predict.regression(function(err, result) {
    res.render('dashboard', {input: result});
  });

});

app.listen(8000);
