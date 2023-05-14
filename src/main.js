// //Atividade Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.

let valorDoNumero = parseFloat(prompt("Valor do Número"));
const resulFinal = valorDoNumero *2
let questao01 = document.querySelector ("#questao01")
questao01.innerHTML = `Olá, resultado da sua pergunta é ${resulFinal}.`


//  //Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom. 

let valordoJantar = parseFloat(prompt("Valor do Jantar"));
let taxadoGarcom = parseFloat(prompt("Taxa do Garçom"));
const valortotal = valordoJantar + taxadoGarcom;
let questao02 = document.querySelector("#questao02")
questao02.innerHTML = `Olá, seja bem-vindo ao restaurante Chaves. Valor do jantar é: R$ ${valordoJantar}, valor da taxa do Garçom é: R$ ${taxadoGarcom}, valor total da conta é R$ ${valortotal}.`



//  
// Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.


let valorConta = parseFloat(prompt("Valor da Conta?"));
let qtdClientes = prompt("Quantos clientes vão pagar a conta?");
const resultado = valorConta / qtdClientes;
let questao03 = document.querySelector("#questao03")
questao03.innerHTML = `Olá, seja bem-vindo Pizzaria Mais Sabor. Valor da conta é: R$ ${valorConta}, conta dividida entre ${qtdClientes} clientes, cada cliente vai pagar R$ ${resultado}.`


