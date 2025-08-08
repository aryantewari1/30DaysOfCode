const http = require("http");

const PORT = 3000;

const server = http.createServer((request, response) => {
  if (request.url === "/home") {
    response.end("hey this is a server response");
  }
});

server.listen(PORT, () => {
  console.log(`server is running at the port ${PORT}`);
});
