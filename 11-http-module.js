const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("This is our home page");
  if (req.url === "/about") res.end("This is about page");
  res.end(`<h1>Oops !</h1>
   click here to go back to<a href="/">home page</a>`);
});

server.listen(5001);
