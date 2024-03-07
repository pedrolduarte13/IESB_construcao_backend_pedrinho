// Imprimindo informações no terminal
console.log("TESTE");

// Variaveis
// var, const, let
// var (Comando antigo)
var testandoVar = "TestanoVar"
console.log(testandoVar);

// Const >> Criar uma constante (variavel que não sofre alteração)
const PI = 3.14; 

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

/*

Operadores relacionais

>: (Maior) <: (Menor) >=: (Maior ou igual) <= (Menor ou igual)

==: (Igual) !=: (diferença)

Compara valor e tipo

===: (Igualdade restrita) !==: (Diferença restrita)

Operadores logicos

! Negação
&& E
|| Ou

*/

/* IF ELSE

let idade = 25;
if(condicao) {
    acao
}

*/
let idade = 23

if(idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

let curso = "ads";
idade = 20;

if(curso == "ads" && idade >= 18) {
    console.log("Confirmado")
} else {
    console.log("Negado");
}

if(curso != "ads") {
    console.log("O curso não é ads é ads");
}

if(curso == "ads"); {
    console.log("O curso é ads");
} if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Nenhuma condição atendida");
}

/* Repetição

for (iniciazacao; condicao; incremento) {
    acao
}

*/

for (let i = 0; i < 10; i++) {
    console.log("contador? ", i)
    console.log("loop")
} 

// funcao
function executa() {
    console.log("Chamando funcao executa");
}

executa()
executa()
executa()
executa()
executa()
executa()

//funcao com parametro e sem retorno

function executa(nome = "nome padrao") {
    console.log("Chamando funcao executa com parametro")
    console.log(nome)
}

executa()
executa("Pedro")

// Funcao com retorno

function soma(numA, numB) {
    return numA + numB
}

let resultado = soma(2, 4)
console.log(resultado);

const multiplicar = function (numA, numB) {
    return numA + numB
}

console.log("Chamando multiplicar antes", multiplicar(2,2));

// Para uma linha apenas
const teste = () => console.log("TESTE");

// para varias linhas
const teste = function() {
    console.log("TESTE");
    console.log("TESTE");
    console.log("TESTE");
}

teste()

const somaArrow = (numA, numB) => numA + numB

console.log("Chamando somaArrow", somaArrow(2,5));

