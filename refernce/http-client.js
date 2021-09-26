const http = require("http");

const proxy = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Ahmed ben abdallah");
  })
  .listen(8081);

http.get("http://localhost:8081/", (res) => {
  res.setEncoding("utf8");
  res.on("data", function (body) {
    console.log(body);
  });
});
