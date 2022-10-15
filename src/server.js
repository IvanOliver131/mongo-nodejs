const http = require("http");
const port = 3000;

const rotas = {
  "/": "Curso de Node",
  "/livros": "Entrei na página de livros",
  "/autores": "Listagem de autores",
  "/editor": "Página de editora",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Server listening in http://localhos:${port} 🔥`);
});
