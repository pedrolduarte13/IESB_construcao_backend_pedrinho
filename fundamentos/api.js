// Importando modulo for http
const http = require('http')
let contador = 0

// Criando um servidor(backend - api) atraves do modulo http
http.createServer((req, res) => {

    // Construindo a logica da api

    contador++
    console.log("Contador de requisições:  " + contador)
    res.write(`Você é o visitando numero:  ${contador}`)
    res.end()

// startando servidor(backend - api) para escutar comunicações
// na porta 3000
}).listen(3000)


