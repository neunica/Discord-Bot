var https = requiree('http');

http.createServer(function (req, res) {
  res.write("I'm alive");
  red.end();
}).listen(8080);
