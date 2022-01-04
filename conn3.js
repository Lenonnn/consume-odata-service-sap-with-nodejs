// POST Example

var http = require('http');
var express = require('express')
var request = require('request')
var app = express()
var url = '<<your gateway service base url>>';

app.get('/', function (req, res) {
    var csrfToken; 
    request({
              url:url+'<<your entity set>>?$format=json', // or xml
              headers:{
                "Authorization":"Basic <<base64 encoded username:pass>>",
                "Content-Type":"application/json",
                "x-csrf-token":"Fetch" // get CSRF Token for post or update
              }
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {         
          // Get token
          csrfToken = response.headers['x-csrf-token'];         
          // New entity
          var entity = {};         
          // Fill entity
          entity.attribute1 = 'Hello';
          entity.attribute2 = 'World';         
          // Do post
          request({
                  url:url+'<<your entity set>>',
                  method: 'POST',
                  headers:{
                    "Authorization":"Basic <<base64 encoded username:pass>>",
                    "Content-Type":"application/json",
                    "x-csrf-token":csrfToken // set CSRF Token for post or update
                  },
                  json: entity
          }, function(error, response, body){
              
              // handle response     
                      
          });
      }
    });
    
})

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', function(){
  console.log('App started');
});