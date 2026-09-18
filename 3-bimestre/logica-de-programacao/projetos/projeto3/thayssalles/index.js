const nome = "Thayssa Alves"
const idade = 13
const categoria = "comum"
const possuiIngresso = true
const impedido = false
const valorIngresso = 55
const valorPago = 55

let idadeStatus

if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

let nivelAcesso

if (categoria === "operador" || categoria === "coordenador") {
    nivelAcesso = "Acesso administrativo liberado"
} else {
    nivelAcesso = "Acesso comum"
}

let acessoStatus

if (idade >= 18 && possuiIngresso && !impedido) {
    acessoStatus = "Entrada liberada"
} else {
    acessoStatus = "Entrada negada"
}

let pagamentoStatus
let troco

if (valorPago >= valorIngresso) {
    pagamentoStatus = "Pagamento aprovado"
    troco = valorPago - valorIngresso
} else {
    pagamentoStatus = "Pagamento insuficiente"
    troco = 0
}

let statusParque

if (acessoStatus === "Entrada liberada" && pagamentoStatus === "Pagamento aprovado") {
    statusParque = "Check-in do parque confirmado"
} else {
    statusParque = "Check-in do parque não confirmado"
}

const resumo = `
Nome: ${nome}
Categoria: ${categoria}
Nível de acesso: ${nivelAcesso}
Valor do ingresso: R$ ${valorIngresso}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusParque}
`

console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    possuiIngresso,
    impedido,
    valorIngresso,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusParque,
    resumo
}
