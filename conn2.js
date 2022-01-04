// GET Example

var http = require('http');
var express = require('express')
var request = require('request')
var app = express()
var url = '<<your sap gateway service base url>>';

app.get('/', function (req, res) {
    
    var csrfToken;
    request({
              url:url+'<<your entity set>>?$format=json',
              headers:{
                "Authorization":"Basic <<base64 encoded username:pass>>",
                "Content-Type":"application/json",
                "x-csrf-token":"Fetch"
              }
      
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {   
          csrfToken = response.headers['x-csrf-token'];
          console.log(csrfToken);
          res.json(body);
      }
    });
})

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', function(){
  console.log('App started');
});