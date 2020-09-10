const http = require("http");

const handler = function (req, res) {
  console.log(req.url);
  if (req.url.startsWith("/login/oauth/authorize")) {
    res.writeHead(200);
    res.end();
  } else if (req.url.startsWith("/login/oauth/access_token")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        access_token: "asdsadasdas",
        scope: "banana",
        token_type: "banana",
      })
    );
    res.end();
  } else if (req.url.startsWith("/user/emails")) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify([{ email: "example@gmail.com", primary: true }]));
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }
};

const server = http.createServer(handler);
server.listen(8081);
