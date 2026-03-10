const http = require('http');

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  
  if (req.url === "/") {
    res.write("Página Principal");

  } else if (req.url === "/cadastrar") {
    res.write("Página Cadastrar");

  } else if (req.url === "/atualizar") {
    res.write("Página de atualizar");

  } else if (req.url === "/listar") {
    res.write("Página de listar");

  } else {
    res.statusCode = 404;
    res.write("Página não encontrada");
  }

  res.end();
});

server.listen(3000, () => {console.log("Servidor rodando em http://localhost:3000");});
