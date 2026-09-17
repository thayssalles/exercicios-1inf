const motorista = "Fábio Nascimento"
const placa = "ABC1D23"
const valorBase = 20
const diasPermitidos = 2
const diasUtilizados = 1
const valorMultaPorDia = 10
const valorPago = 20




let prazoStatus




if (diasUtilizados <= diasPermitidos) {
prazoStatus = "Dentro da tolerância"
} else {
prazoStatus = "Excedeu a tolerância"
}




let diasAtraso




if (diasUtilizados > diasPermitidos) {
diasAtraso = diasUtilizados - diasPermitidos
} else {
diasAtraso = 0
}




const multa = diasAtraso * valorMultaPorDia




const valorFinal = valorBase + multa




let pagamentoStatus




if (valorPago >= valorFinal) {
pagamentoStatus = "Pagamento aprovado"
} else {
pagamentoStatus = "Pagamento insuficiente"
}




let troco




if (pagamentoStatus === "Pagamento aprovado") {
troco = valorPago - valorFinal
} else {
troco = 0
}




let statusSaida




if (diasUtilizados <= diasPermitidos) {
statusSaida = "Saída liberada"
} else if (pagamentoStatus === "Pagamento aprovado") {
statusSaida = "Saída liberada com multa paga"
} else {
statusSaida = "Saída bloqueada: pagamento não cobre a multa"
}




const resumo = `
Motorista: ${motorista}
Placa: ${placa}
Valor base: R$ ${valorBase}
Dias permitidos: ${diasPermitidos}
Dias utilizados: ${diasUtilizados}
Valor da multa por dia: R$ ${valorMultaPorDia}
Dias de atraso: ${diasAtraso}
Multa: R$ ${multa}
Valor final: R$ ${valorFinal}
Valor pago: R$ ${valorPago}
Pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
Saída: ${statusSaida}
`




console.log(resumo)




module.exports = {
motorista,
placa,
valorBase,
diasPermitidos,
diasUtilizados,
valorMultaPorDia,
valorPago,
prazoStatus,
diasAtraso,
multa,
valorFinal,
pagamentoStatus,
troco,
statusSaida,
resumo
}
