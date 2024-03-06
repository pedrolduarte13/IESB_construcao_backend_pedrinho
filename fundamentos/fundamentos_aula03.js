// Imprimindo informações no terminal
console.log("TESTE");

// Variaveis
// var, const, let
// var (Comando antigo)
var testandoVar = "TestanoVar"
console.log(testandoVar);

// Const >> Criar uma constante (variavel que não sofre alteração)
const PI = 3

// PI = 9999

console.log(PI);

// Let >> Criar uma variavel que pode sofrer alterações
let nomeCompleto
console.log(nomeCompleto);
nomeCompleto = "Pedro"
console.log(nomeCompleto);
nomeCompleto = "Pedro Lucas"
console.log(nomeCompleto)

/* Tipos de dados
String
    -> 'TESTE' "TESTE" `TESTE` ${COMANDO EM JAVASCRIPT};

Number
    -> 1 1.2 -12
``
Boolean
    -> true ou false

array
    -> (Matriz) lista de informações
    -> [1, 2, 3, 4]
Object
{
    "chave": "valor",
    chave: 1
}

null -> ausencia de valor

undefined -> Ausencia de valor

NaN -> Não é um numero. Exp: 10/"TEXTO";

*/
/*

    Tratamento de Dados
    
*/
// String
let textoCompleto = "Ola mundo";

console.log(textoCompleto.toUpperCase());
console.log(textoCompleto.toLowerCase());
console.log(textoCompleto.replace("tudo", "1234"));

// console.log(textoCompleto.replaceAll("o", "O"));
// Não existe replaceAll no node, tenho que utilizar o replace com regex

let numeroEmString = String(1,56);
console.log(numeroEmString);
console.log(typeof numeroEmString);

// Number

let stringEmNumero = Number("1.56478");
console.log(stringEmNumero);
console.log(typeof stringEmNumero);

console.log(Number,parseInt ("1.58"));
console.log(Number.parseFloat(20));

let testandoParseFloat = Number.parseFloat(20);
console.log(testandoParseFloat.toFixed (4));

// Array
let listaDeCarros = ["Gol", "Uno", "Corola", "Civic"];
console.log(listaDeCarros);

listaDeCarros.push("Lancer");
console.log(listaDeCarros);

listaDeCarros.pop()
console.log(listaDeCarros);

// Object
let pessoa = {
    nome: "Pedro Lucas",
    idade: 20,
    curso: "ADS",
    matricula: "23114290120",
    instituicao: "Iesb",
    endereco: {
        cep: 7070707070,
        cidade: "Ceilandia",
        numero: 20,
    }
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.endereco);

pessoa.nome = "Lucas";
console.log(pessoa);
console.log(pessoa.nome.toUpperCase());

/*
    Operadores Aritmeticos
    + - * / % **

    precendência
    ()
    **
    * / %
    + - 

    Biblioteca "Math"

*/


