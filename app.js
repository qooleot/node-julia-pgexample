
var express = require('express'),
    app = express();

julia = require('node-julia');
julia.start();
julia.exec("include","./api/predict.jl",function(r){
  console.log('r2_total loaded', r);
});

var predict = require('./api/predict.js')();

app.get('/views/dashboard', function(req, res) {
 
  var preductResults = predict.regression(function(err, result) {
    res.json(result);
  });

});

app.listen(8000);
