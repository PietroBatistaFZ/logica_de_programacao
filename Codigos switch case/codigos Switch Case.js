LOGPRO - Swich Case


// DESAFIO 1
console.log("Escolha um idioma:");
console.log("1 - Português");
console.log("2 - Inglês");
console.log("3 - Espanhol");
console.log("4 - Russo");
let escolha = prompt("Digite o número do idioma:");
switch (escolha) {
    case "1":
        console.log("Olá! Tudo bem?");
        break;
    case "2":
        console.log("Hello! How are you?");
        break;
    case "3":
        console.log("¡Hola! ¿Cómo estás?");
        break;
    case "4":
        console.log("Привет! Как дела?");
        break;
    default:
        console.log("Idioma não reconhecido.");
}

// DESAFIO 2
let escolha2 = Number(prompt("Escolha um dia da semana (1 a 7):"));
switch (escolha2) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Data não reconhecida.");
}

// DESAFIO 3
console.log("1 - Triciclo");
console.log("2 - Jetski");
console.log("3 - Lancha");
console.log("4 - Sonata");
let transporte = Number(prompt("Qual seu meio de transporte favorito:"));
switch (transporte) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Esse é um ótimo meio de transporte!");
        break;
    default:
        console.log("Esse meio não é uma opção.");
}

// DESAFIO 4
let nivelUrgencia = Number(prompt("Escolha o nível de urgência da sua saudade (1 a 3):"));
switch (nivelUrgencia) {
    case 1:
        console.log("Nível baixo");
        break;
    case 2:
        console.log("Nível médio");
        break;
    case 3:
        console.log("Nível urgente");
        break;
    default:
        console.log("Nível não compatível");
}

// DESAFIO 5
console.log("1 - Tracker \n2 - Ferrari \n3 - Uno");
let transporte2 = Number(prompt("Qual seu meio de transporte favorito:"));
switch (transporte2) {
    case 1:
        console.log("Esse meio de transporte é um SUV!");
        break;
    case 2:
        console.log("Esse meio de transporte é um esportivo!");
        break;
    case 3:
        console.log("Esse meio de transporte é compacto!");
        break;
    default:
        console.log("Esse meio não é uma opção.");
}

// DESAFIO 6
console.log("1 - 1 hora \n2 - 2 horas \n3 - 3 horas ou mais");
let estacionamento = Number(prompt("Há quanto tempo você estacionou?"));
switch (estacionamento) {
    case 1:
        console.log("O valor a ser pago é 5 reais");
        break;
    case 2:
        console.log("O valor a ser pago é 10 reais");
        break;
    case 3:
        console.log("O valor a ser pago é 20 reais");
        break;
    default:
        console.log("Isso não é uma opção.");
}

// DESAFIO 7
let nivel = Number(prompt("Escolha o nível que você deseja jogar (1 a 3):"));
switch (nivel) {
    case 1:
        console.log("Fácil");
        break;
    case 2:
        console.log("Médio");
        break;
    case 3:
        console.log("Difícil");
        break;
    default:
        console.log("Nível não compatível");
}

// DESAFIO 8
let academia = Number(prompt("1 - Musculação \n2 - Yoga \n3 - Muay Thai \nEscolha um tipo de serviço:"));
switch (academia) {
    case 1:
    case 2:
    case 3:
        console.log("Temos equipamentos e profissionais nessa área");
        break;
    default:
        console.log("Não temos essa área em nossa academia");
}

// DESAFIO 9
console.log("1 - Inteira \n2 - Meia \n3 - Não pagante");
let ingressos = Number(prompt("Escolha a categoria que você mais se encaixa:"));
switch (ingressos) {
    case 1:
        console.log("Seu ingresso custa 60 reais");
        break;
    case 2:
        console.log("Seu ingresso custa 30 reais");
        break;
    case 3:
        console.log("Seu ingresso custa 0 reais");
        break;
    default:
        console.log("Não temos essa opção");
}

// DESAFIO 10
let classeAcademia = Number(prompt("1 - Adolescente \n2 - Adulto \n3 - Idoso \nEscolha a classe que você se encontra:"));
switch (classeAcademia) {
    case 1:
        console.log("Treino moderado, respeitando tempo de descanso e com ajuda de um profissional");
        break;
    case 2:
        console.log("Treino frequente e de forma saudável");
        break;
    case 3:
        console.log("Treino leve com ajuda de um profissional");
        break;
    default:
        console.log("Idade não adequada para treinos");
}

// DESAFIO 11
console.log("1 - Guitarra \n2 - Violão \n3 - Saxofone");
let instrumento = Number(prompt("Escolha um instrumento:"));
switch (instrumento) {
    case 1:
        console.log("Seu instrumento é do rock");
        break;
    case 2:
        console.log("Seu instrumento é do forró");
        break;
    case 3:
        console.log("Seu instrumento é do jazz");
        break;
    default:
        console.log("Não temos essa opção");
}

// DESAFIO 12
let cursos = prompt("Qual sua área? (front-end, back-end, mobile)");
switch (cursos.toLowerCase()) {
    case "front-end":
        console.log("HTML e CSS do Zero ao Avançado\nEstrutura e estilização de páginas web, boas práticas e responsividade\nJavaScript Moderno (ES6+)\nManipulação do DOM, lógica de programação, interações dinâmicas\nReact.js para Iniciantes e Avançados\nComponentes, estados, hooks, roteamento e integração com APIs");
        break;
    case "back-end":
        console.log("Banco de Dados SQL e NoSQL (MySQL / MongoDB) - Modelagem, consultas, relacionamentos e performance\nAutenticação e Autorização com JWT e OAuth - Segurança de rotas e controle de acesso\nAPIs REST e GraphQL - Criação, consumo e documentação de APIs modernas");
        break;
    case "mobile":
        console.log("Introdução ao Desenvolvimento Mobile com React Native - Aplicativos híbridos com JavaScript\nFlutter do Zero ao Avançado - Interface declarativa, navegação e integração com APIs\nDesenvolvimento Nativo com Kotlin (Android) - Estrutura de apps, componentes e ciclo de vida");
        break;
    default:
        console.log("Não temos esse tipo de curso");
}

// DESAFIO 13
let idadeAtleta = parseInt(prompt("Digite a idade do atleta:"));
let categoria;

switch (true) {
    case (idadeAtleta >= 0 && idadeAtleta <= 5):
        categoria = "Baby - Estímulo Lúdico";
        break;
    case (idadeAtleta >= 6 && idadeAtleta <= 9):
        categoria = "Iniciação Esportiva";
        break;
    case (idadeAtleta >= 10 && idadeAtleta <= 13):
        categoria = "Fundamentos Técnicos";
        break;
    case (idadeAtleta >= 14 && idadeAtleta <= 17):
        categoria = "Desenvolvimento Competitivo";
        break;
    case (idadeAtleta >= 18 && idadeAtleta <= 25):
        categoria = "Alto Rendimento";
        break;
    case (idadeAtleta >= 26 && idadeAtleta <= 35):
        categoria = "Performance Avançada";
        break;
    case (idadeAtleta >= 36 && idadeAtleta <= 49):
        categoria = "Adulto Recreativo / Master";
        break;
    case (idadeAtleta >= 50 && idadeAtleta <= 64):
        categoria = "Sênior - Condicionamento e Lazer";
        break;
    case (idadeAtleta >= 65):
        categoria = "Veterano - Manutenção da Saúde";
        break;
    default:
        categoria = "Idade inválida";
}
console.log("Nível de habilidade recomendado: " + categoria);

// DESAFIO 14
let categoria2 = prompt("Digite a categoria do desafio (básico, intermediário, avançado):").toLowerCase();
let descricao;
switch (categoria2) {
    case "básico":
        descricao = "Operações simples: soma, subtração, multiplicação e divisão com números pequenos.";
        break;
    case "intermediário":
        descricao = "Problemas com frações, porcentagens, expressões e lógica matemática.";
        break;
    case "avançado":
        descricao = "Equações do 1º e 2º grau, sistemas lineares, funções e raciocínio lógico avançado.";
        break;
    default:
        descricao = "Categoria inválida. Escolha entre: básico, intermediário ou avançado.";
}
console.log("Descrição do desafio: " + descricao);



// Variáveis globais para contagem
let respostaCorreta = 0;
let respostaIncorreta = 0;
//
console.log("Com qual idade Jesus morreu?");
console.log("A - 30 ");
console.log("B - 23 ");
console.log("C - 33 ");
console.log("D - 35 ");
let pergunta1 = prompt("Digite a alternativa correta:");
switch (pergunta1.toUpperCase()) {
    case "C":
    case "33":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log("Quem ganhou a copa de 2018?");
console.log("A - Brasil");
console.log("B - França");
console.log("C - Alemanha");
console.log("D - Argentina");
let pergunta2 = prompt("Digite a alternativa correta:");
switch (pergunta2.toUpperCase()) {
    case "B":
    case "FRANÇA":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log("Qual alimento tem mais proteína?");
console.log("A - Peixe");
console.log("B - Ovo");
console.log("C - Frango");
console.log("D - Carne vermelha");
let pergunta3 = prompt("Digite a alternativa correta:");
switch (pergunta3.toUpperCase()) {
    case "D":
    case "CARNE VERMELHA":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log("Qual metal é mais usado em fios elétricos?");
console.log("A - Ferro");
console.log("B - Zinco");
console.log("C - Ouro");
console.log("D - Cobre");
let pergunta4 = prompt("Digite a alternativa correta:");
switch (pergunta4.toUpperCase()) {
    case "D":
    case "COBRE":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log("Qual número é primo?");
console.log("A - 4 ");
console.log("B - 9 ");
console.log("C - 6 ");
console.log("D - 20 ");
let pergunta5 = prompt("Digite a alternativa correta:");
switch (pergunta5.toUpperCase()) {
    case "B":
    case "9":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log("Qual dessas palavras é uma cor?");
console.log("A - Bola ");
console.log("B - Rua ");
console.log("C - Azul");
console.log("D - Sol ");
let pergunta6 = prompt("Digite a alternativa correta:");
switch (pergunta6.toUpperCase()) {
    case "C":
    case "AZUL":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log("Qual dessas palavras é um lugar?");
console.log("A - Brasil ");
console.log("B - Galinha ");
console.log("C - Amarelo");
console.log("D - Cerveja");
let pergunta7 = prompt("Digite a alternativa correta:");
switch (pergunta7.toUpperCase()) {
    case "A":
    case "BRASIL":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log("Qual dessas palavras combina com fogo?");
console.log("A - Bombeiro ");
console.log("B - Partir");
console.log("C - Futebol");
console.log("D - Kadu");
let pergunta8 = prompt("Digite a alternativa correta:");
switch (pergunta8.toUpperCase()) {
    case "A":
    case "BOMBEIRO":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log("Qual dessas palavras combina com fogo?");
console.log("A - Bombeiro ");
console.log("B - Partir");
console.log("C - Futebol");
console.log("D - Kadu");
let pergunta9 = prompt("Digite a alternativa correta:");
switch (pergunta9.toUpperCase()) {
    case "A":
    case "BOMBEIRO":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log("Imagine um dia quente. O que combina com isso?");
console.log("A - Neve ");
console.log("B - Sorvete");
console.log("C - Cobertor");
console.log("D - Tremer");
let pergunta10 = prompt("Digite a alternativa correta:");
switch (pergunta10.toUpperCase()) {
    case "B":
    case "SORVETE":
        console.log("Resposta Correta");
        respostaCorreta++;
        break;
    default:
        console.log("Resposta Incorreta");
        respostaIncorreta++;
        break;
}
//
console.log(`Você acertou ${respostaCorreta} perguntas.`);
console.log(`Você errou ${respostaIncorreta} perguntas.`);


// Pergunta sobre terminal preferido
console.log("Qual terminal você prefere? \n1-CMD \n2-Terminal linux");
let terminal = Number(prompt("Digite sua resposta:"));

// CMD - Prompt de comando do Windows
if (terminal == 1) {
    console.log("Você escolheu CMD");
    console.log("1. mkdir\n2. dir\n3. cd\n4. cd..\n5. del\n6. cls\n7. echo\n8. copy\n9. move\n10. rmdir\n11. exit");
    let escolha = Number(prompt("Qual comando você deseja se aprofundar?:"));

    // Explicações dos comandos CMD
    switch (escolha) {
        case 1:
            console.log("mkdir - Cria um novo diretório. Ex: mkdir Projetos");
            break;
        case 2:
            console.log("dir - Lista arquivos e pastas no diretório atual. Ex: dir");
            break;
        case 3:
            console.log("cd - Muda o diretório atual. Ex: cd Documentos");
            break;
        case 4:
            console.log("cd.. - Volta um diretório. Ex: cd..");
            break;
        case 5:
            console.log("del - Apaga um arquivo. Ex: del arquivo.txt");
            break;
        case 6:
            console.log("cls - Limpa a tela do terminal. Ex: cls");
            break;
        case 7:
            console.log("echo - Exibe mensagem ou salva em arquivo. Ex: echo Olá > mensagem.txt");
            break;
        case 8:
            console.log("copy - Copia arquivos. Ex: copy a.txt C:\\Backup\\");
            break;
        case 9:
            console.log("move - Move ou renomeia arquivos. Ex: move a.txt b.txt");
            break;
        case 10:
            console.log("rmdir - Remove pastas vazias. Ex: rmdir pasta");
            break;
        case 11:
            console.log("exit - Encerra o terminal. Ex: exit");
            break;
        default:
            console.log("Comando inválido");
            break;
    }

// Linux Terminal
} else if (terminal == 2) {
    console.log("Você escolheu Terminal Linux");
    console.log("1. mkdir\n2. ls\n3. cd\n4. cd..\n5. rm\n6. clear\n7. cp\n8. mv\n9. cat\n10. echo");
    let escolha = Number(prompt("Qual comando você deseja se aprofundar?:"));

    // Explicações dos comandos Linux
    switch (escolha) {
        case 1:
            console.log("mkdir - Cria um novo diretório. Ex: mkdir Projetos");
            break;
        case 2:
            console.log("ls - Lista arquivos e pastas. Ex: ls ou ls -a");
            break;
        case 3:
            console.log("cd - Entra em um diretório. Ex: cd Documentos");
            break;
        case 4:
            console.log("cd.. - Volta um diretório. Ex: cd..");
            break;
        case 5:
            console.log("rm - Remove arquivos. Ex: rm arquivo.txt / rm -r pasta");
            break;
        case 6:
            console.log("clear - Limpa a tela do terminal. Ex: clear");
            break;
        case 7:
            console.log("cp - Copia arquivos ou pastas. Ex: cp arquivo.txt pasta/");
            break;
        case 8:
            console.log("mv - Move ou renomeia arquivos. Ex: mv a.txt b.txt");
            break;
        case 9:
            console.log("cat - Exibe conteúdo de arquivos. Ex: cat arquivo.txt");
            break;
        case 10:
            console.log("echo - Mostra texto ou grava em arquivo. Ex: echo Olá > texto.txt");
            break;
        default:
            console.log("Comando inválido");
            break;
    }

// Entrada inválida
} else {
    console.log("Opção inválida. Digite 1 para CMD ou 2 para Linux.");
}





