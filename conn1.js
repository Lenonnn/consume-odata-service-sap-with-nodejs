var http = require("http");

http
    .get({
            protocol: "http:",
            hostname: "MyServer.com",
            port: MyPort,
            path: "/api.rsc/MARA?$filter=" + encodeURIComponent("ERNAM eq 'BEHRMANN'"),
            auth: "MyUser:MyAuthtoken",
        },
        function (res) {
            var body = "";
            res.on("data", function (chunk) {
                body += chunk;
            });
            res.on("end", function () {
                console.log(body);
                var jsonData = JSON.parse(body);
            });
        }
    )
    .on("error", function (e) {
        console.log("Error: ", e);
    });