LOGPRO - Function

// Funções de operações matemáticas
function adicao(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro: divisão por zero não é permitida";
    }
    return num1 / num2;
}

// Entrada dos números
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

// Entrada da operação desejada - usando caixa baixa para evitar erro de digitação
let opcao = prompt("\nSoma\nSubtração\nMultiplicação\nDivisão\nDigite a opção:").toLowerCase();

let resultado;

// Verificação da operação escolhida
if(opcao === "soma"){
    resultado = adicao(numero1, numero2);
} else if(opcao === "subtração" || opcao === "subtracao"){  // tratar com e sem acento
    resultado = subtracao(numero1, numero2);
} else if(opcao === "multiplicação" || opcao === "multiplicacao"){ // com e sem acento
    resultado = multiplicar(numero1, numero2);
} else if (opcao === "divisão" || opcao === "divisao"){ // com e sem acento
    resultado = divisao(numero1, numero2);
} else {
    resultado = "Opção inválida!";
}

// Mostrar resultado no console
console.log("Resultado:", resultado);



// Cadastro dos usuários e senhas em um objeto
const usuarios = {
  "pietrinhogaviaodafiel": "19101969",
  "samuel": "12345",
  "guizin": "67890",
  "ANTONELA_BRAGA": "nuigget",
  "GUEGUEL": "verde",
  "AMOR": "PAIXAO",
  "EDU_BECKS": "lizmacedo",
  "kaka": "vipI",
  "LAURA": "KRUZ",
  "neymar": "1234567890"
};

// Função de login que verifica se o usuário e senha existem e correspondem
function login(usuarioDigitado, senhaDigitada) {
  // Verifica se o usuário existe no objeto
  if (usuarios.hasOwnProperty(usuarioDigitado)) {
    // Confere se a senha digitada corresponde à senha armazenada
    if (usuarios[usuarioDigitado] === senhaDigitada) {
      console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado + "!");
    } else {
      console.log("Senha incorreta.");
    }
  } else {
    console.log("Usuário não encontrado.");
  }
}

// Entrada dos dados para login
let usuarioTentandoLogar = prompt("Digite o nome de usuário:");
let senhaTentandoLogar = prompt("Digite a senha:");

// Chamada da função login com os dados do usuário
login(usuarioTentandoLogar, senhaTentandoLogar);




