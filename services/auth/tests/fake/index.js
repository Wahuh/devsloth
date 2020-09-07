const http = require("http");

const handler = function (req, res) {
  console.log(req.url);
  if (req.url.startsWith("/login/oauth/authorize")) {
    res.writeHead(200);
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
};

const server = http.createServer(handler);
server.listen(8081);
