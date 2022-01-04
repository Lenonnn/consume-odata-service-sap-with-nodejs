# Using Node.js to connect a SAP OData Service


<p> This Small Aplication is an example to be followed if you need to connect an node.js application with an Odata Service provided by a SAP System.</p>
<p> Will be possible to you see how to use it in some different way.</p>

> 1 Example - HTTP GET

<i>Font: [CData](https://www.cdata.com/kb/tech/sap-odata-nodejs.rst) </i>

### File <i>connect1.js</i>

Needded run: 

```node conn1.js```

> 2 Example - HTTP GET

<i>Font: [ACOREL](https://www.acorel.nl/2016/12/consuming-sap-odata-services-from-angularjs-and-or-node-js/) </i>

Consuming SAP OData services from Node.js
Node.js can consume HTTP services without any additional modules, but it’s easier to use one that makes your life easier. I like the request module. Using request, calling services is really straightforward.

Needded run: 

```node conn2.js```


> 3 Example - HTTP POST

<i>Font: [ACOREL](https://www.acorel.nl/2016/12/consuming-sap-odata-services-from-angularjs-and-or-node-js/) </i>

Just like in AngularJS, when we do a POST from Node.js we have to fetch / provide the X-CSRF-Token. The example below does a get request first and does the POST request after that. Of course it is better to store the token somewhere globally (like in Angular) for a user (e.g. as a session variable), instead of doing a get every time before the insert / update operation. The example below is just a simple example to show you how you can Fetch the token en send the token in Node.js using the request module..

Needded run: 

```node conn3.js```

<p><b><i>Conclusion</i></b><p>
<p>The examples 2 and 3 show how easy it is to consume SAP Netweaver Gateway services in and Node.js and how to handle the x-csrf-token manually from other frameworks besides SAPUI5.</p>
<p>Using the same approach it is possible to consume SAP Netweaver Gateway services in any other programming language.</p>
