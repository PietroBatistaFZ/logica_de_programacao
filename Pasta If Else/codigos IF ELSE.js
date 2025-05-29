LOGPRO - If Else

// Exercício 1
let idade = 18
if (idade >= 18){
  console.log("Maior idade")
} else {
  console.log("Menor idade")
}

// Exercício 2
let horas = 6
if (horas >= 6 && horas < 12){
  console.log("bom dia")
} else if (horas >= 13 && horas < 18){
  console.log("boa tarde")
} else {
  console.log("boa noite")
}

// Exercício 3
let idade2 = 18
if (idade2 >= 16){
  console.log("acesso permitido")
} else {
  console.log("acesso negado")
}

// Exercício 4
let valor1 = prompt("Escolha seu primeiro valor: ")
let valor2 = prompt("Escolha seu segundo valor: ")
if (valor1 > valor2){
  console.log("O primeiro valor é superior ao segundo")
}
if (valor1 < valor2){
  console.log("O segundo valor é superior ao primeiro")
}

// Exercício 5
let temperatura = 23
if (temperatura <= 20){
  console.log("frio")
} else if (temperatura >= 25){
  console.log("calor")
} else if(temperatura >= 21 && temperatura < 24){
  console.log("ameno")
}

// Exercício 6
let palavra = prompt("Digite uma palavra:")
if (palavra === "felicidade") {
  console.log("palavra correta")
} else {
  console.log("palavra incorreta")
}

// Exercício 7
let moedas = 17
if (moedas <= 10){
  console.log("Poucas moedas")
} else if (moedas >= 20){
  console.log("Muitas moedas")
} else if(moedas >= 10 && moedas < 20){
  console.log("Quantidade media")
}

// Exercício 8
let temperatura2 = 90
if (temperatura2 <= 20){
  console.log("Frio")
} else if (temperatura2 >= 30){
  console.log("Muito quente")
} else if(temperatura2 >= 20 && temperatura2 < 30){
  console.log("Calor")
}

// Exercício 9
let numero = -5
if(numero < 0){
  console.log("Negativo")
} else if(numero >= 0){
  console.log("Positivo")
}

// Exercício 10
let nota = 8
if (nota >= 7) {
  console.log("Aprovado")
} else {
  console.log("Reprovado")
}

// Exercício 11
let animal = "Gato"
if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") {
  console.log("Animal listado")
} else {
  console.log("Animal não listado")
}

// Exercício 12
let diaSemana = "Segunda-feira"
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
  console.log("Fim de semana")
} else {
  console.log("Dia útil")
}

// Exercício 13
let experiencia = 3
if (experiencia > 2) {
  console.log("Experiente")
} else {
  console.log("Iniciante")
}

// Exercício 14
let numero2 = 15
if (numero2 >= 10 && numero2 <= 20) {
  console.log("Dentro do intervalo")
} else {
  console.log("Fora do intervalo")
}

// Exercício 15
let idadeCNH = 18
if (idadeCNH >= 18) {
  console.log("Pode tirar carteira de motorista")
} else {
  console.log("Não pode tirar carteira de motorista")
}

// Exercício 16
let valor = 0
if (valor > 0) {
  console.log("Positivo")
} else if (valor < 0) {
  console.log("Negativo")
} else {
  console.log("Zero")
}



let respostaCorreta = 0
let respostaIncorreta = 0

//Pergunta1
console.log("Em que ano estamos?")
console.log("A - 2025")
console.log("B - 2050")
console.log("C - 2060")
console.log("D - 2070")
let pergunta1 = prompt("Digite a resposta: ")
if (pergunta1 == "A" || pergunta1 == "2025") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta2
console.log("\nQual é o maior oceano do mundo?")
console.log("A - Oceano Ártico")
console.log("B - Oceano Pacífico")
console.log("C - Oceano Índico")
console.log("D - Oceano Atlântico")
let pergunta2 = prompt("Digite a resposta: ")
if (pergunta2 == "B" || pergunta2 == "Oceano Pacífico") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta3
console.log("\nQual desses é um tipo de fruta cítrica?")
console.log("A - Maçã")
console.log("B - Banana")
console.log("C - Laranja")
console.log("D - Uva")
let pergunta3 = prompt("Digite a resposta: ")
if (pergunta3 == "C" || pergunta3 == "Laranja") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta4
console.log("\nQuantos dias tem um ano bissexto?")
console.log("A - 367")
console.log("B - 365")
console.log("C - 364")
console.log("D - 366")
let pergunta4 = prompt("Digite a resposta: ")
if (pergunta4 == "D" || pergunta4 == "366") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta5
console.log("\nQual é o nome do protagonista de Harry Potter?")
console.log("A - Ron Weasley")
console.log("B - Hermione Granger")
console.log("C - Harry Potter")
console.log("D - Draco Malfoy")
let pergunta5 = prompt("Digite a resposta: ")
if (pergunta5 == "C" || pergunta5 == "Harry Potter") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta6
console.log("\nQual instrumento musical tem cordas e é tocado com as mãos?")
console.log("A - Guitarra")
console.log("B - Bateria")
console.log("C - Violino")
console.log("D - Trompete")
let pergunta6 = prompt("Digite a resposta: ")
if (pergunta6 == "A" || pergunta6 == "Guitarra") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta7
console.log("\nQual é a cor do céu em um dia sem nuvens?")
console.log("A - Verde")
console.log("B - Azul")
console.log("C - Vermelho")
console.log("D - Preto")
let pergunta7 = prompt("Digite a resposta: ")
if (pergunta7 == "B" || pergunta7 == "Azul") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta8
console.log("\nEm que ano o homem pisou na lua pela primeira vez?")
console.log("A - 1995")
console.log("B - 1969")
console.log("C - 1979")
console.log("D - 1980")
let pergunta8 = prompt("Digite a resposta: ")
if (pergunta8 == "B" || pergunta8 == "1969") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta9
console.log("\nQual país é famoso pela Torre Eiffel?")
console.log("A - França")
console.log("B - Itália")
console.log("C - Espanha")
console.log("D - Alemanha")
let pergunta9 = prompt("Digite a resposta: ")
if (pergunta9 == "A" || pergunta9 == "França") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta10
console.log("\nQuem escreveu Romeu e Julieta?")
console.log("A - José de Alencar")
console.log("B - Fernando Pessoa")
console.log("C - William Shakespeare")
console.log("D - Machado de Assis")
let pergunta10 = prompt("Digite a resposta: ")
if (pergunta10 == "C" || pergunta10 == "William Shakespeare") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

//Pergunta11
console.log("\nQuem descobriu o Brasil?")
console.log("A - Vasco da Gama")
console.log("B - Fernão de Magalhães")
console.log("C - Pedro Álvares Cabral")
console.log("D - Cristóvão Colombo")
let pergunta11 = prompt("Digite a resposta: ")
if (pergunta11 == "C" || pergunta11 == "Pedro Álvares Cabral") {
  console.log("Alternativa correta")
  respostaCorreta++
} else {
  console.log("Resposta errada")
  respostaIncorreta++
}

// Exibir o resultado
console.log("\nResumo final")
console.log("Respostas Corretas: " + respostaCorreta)
console.log("Respostas Incorretas: " + respostaIncorreta)



let idade = 10; // A variável "idade" recebe o valor 10

let categoria;  // A variável "categoria" é declarada, mas ainda está indefinida

// Verifica a categoria com base na idade
if (idade < 12) {
  categoria = "criança"; // Se a idade for menor que 12, categoria será "criança"
} else if (idade >= 12 && idade <= 18) {
  categoria = "adolescente"; // Se a idade estiver entre 12 e 18 (inclusive), será "adolescente"
} else if (idade >= 60) {
  categoria = "idosa"; // Se a idade for 60 anos ou mais, será "idosa"
} else {
  categoria = "adulta"; // Caso contrário (entre 19 e 59), será "adulta"
}

// Exibe os resultados
console.log("Idade final: " + idade); // Mostra a idade final
console.log("Categoria: " + categoria); // Mostra a categoria correspondente



// Define a idade da pessoa
let idade = 25;

// Verifica se a idade é menor que 16
if (idade < 16) {
  console.log("Não vota."); // Não tem direito a votar

// Verifica se a idade está entre 16 e 17 ou é 70 ou mais
} else if ((idade >= 16 && idade < 18) || idade >= 70) {
  console.log("Voto facultativo."); // O voto é opcional

// Se for entre 18 e 69 anos
} else {
  console.log("Voto obrigatório."); // O voto é obrigatório
}



// Define o tipo de combustível como "Álcool"
let combustivel = "Álcool";

// Verifica se é Gasolina
if (combustivel === "Gasolina") {
  console.log("Você escolheu Gasolina");

// Verifica se é Álcool
} else if (combustivel === "Álcool") {
  console.log("Você escolheu Álcool");

// Verifica se é Diesel
} else if (combustivel === "Diesel") {
  console.log("Você escolheu Diesel");

// Se não for nenhum dos acima
} else {
  console.log("Opção inválida");
}



// Define a velocidade do veículo
let velocidade = 77;

// Se a velocidade for até 60
if (velocidade <= 60) {
  console.log("Dentro do limite"); // Está ok

// Se for exatamente 75
} else if (velocidade === 75) {
  console.log("Atenção"); // Alerta de atenção

// Se for 80 ou mais
} else if (velocidade >= 80) {
  console.log("Acima do limite"); // Velocidade alta demais

// Caso esteja entre 61 e 79 (exceto 75 e menos de 80)
} else {
  console.log("Velocidade moderada"); // Velocidade média
}



