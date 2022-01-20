// váriaveis, são um espaço na memória para guardar algum valor
let pesoPeca = 100

if(pesoPeca > 100) {
    console.log("peso maior que 100g, logo, podemos cadastrar a peça!!!")
} else {
    console.log("peso insuficiente, não e possivel cadastrar.")
}

let numeroPecas = 10

if(numeroPecas < 10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
} else {
    console.log("Não há espaço disponivel na caixa")
}

let nomePeca = "Disco"

console.log("O comprimento do nome da peça é:" , nomePeca.length)

if(nomePeca.length < 3) {
    console.warn("nome de peça muito curto não e possivle cadastrar")
} else {
    console.log("nome de peça adequado podemos cadastrar")
}

