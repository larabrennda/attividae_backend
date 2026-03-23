import { createServer } from 'node:http';

import { listarCliente, incluirCliente, atualizarCliente, removerCliente } from './clienteService.js';

const server = createServer((req, res) => {
  const url = req.url;

  if (url === "/listar") {
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.write(listarCliente());
  } 
  else if (url === "/incluir") {
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.write(incluirCliente());
  } 
  else if (url === "/atualizar") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.write(atualizarCliente());
  } 
  else if (url === "/remover") {
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.write(removerCliente());
  } 
  else {
    res.writeHead(404, {"Content-Type": "text/plain; charset=utf-8"});
    res.write("Rota não encontrada.");
  }

  res.end();
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor rodando em http://127.0.0.1:3000');
});