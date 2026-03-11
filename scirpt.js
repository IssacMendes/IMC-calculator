function calcularIMC() {

let peso = document.getElementById("peso").value
let altura = document.getElementById("altura").value

let imc = peso / (altura * altura)

document.getElementById("valor-imc").innerText = imc.toFixed(2)

let mensagem = ""

if (imc < 18.5) {
    mensagem = "Abaixo do peso"

} else if (imc >= 18.5 && imc < 24.9) {
    mensagem = "Peso normal"

} else if (imc >= 25 && imc < 29.9) {
    mensagem = "Sobrepeso"

} else if (imc >= 30 && imc < 34.9) {
    mensagem = "Obesidade grau 1"

} else if (imc >= 35 && imc < 39.9) {
    mensagem = "Obesidade grau 2"

} else {
    mensagem = "Obesidade grau 3"
}

document.getElementById("mensagem-imc").innerText = mensagem

}