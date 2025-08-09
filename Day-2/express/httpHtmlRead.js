const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((request, response) => {
  if (request.url === "/home") {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        alert("the page has not been found");
      } else {
        response.end(data.toString());
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`server is running at the port ${PORT}`);
});
