//Declaração de Variáveis
opcao = -1;
A = 10;
B = 20;
aux = 0;
nota1 = 0;

//Função 1º exercicio
function exerci1(){
    console.log(`O valor inicial de A é: ${A}`);
    console.log(`O valor inicial de B é: ${B}`);
    aux = A;
    A = B;
    B = aux;
    console.log(`Depois da troca o valor de A é: ${A}`);
    console.log(`Depois da troca o valor de B é: ${B}`);
}//Fim da função do 1º Exercicio

//Função 2º exercicio
function exerci2(){
    num1 = prompt("Digite um número: ");
    resultado = num1 - 1;
    console.log(`O antecessor do número: ${num1} é: ${resultado}`);
    //typeof num1 === 'number'? console.log(`O antecessor do número: ${num1} é: ${resultado}`): alert(`Parece que você digitou ${num1}, por favor digite um número válido`);
    
}//Fim da função do 2º Exercicio

//Função 3º exercicio
function exerci3(){
    base = prompt("Informe o valor para a base do retângulo: ")
    console.log(`A base do retângulo é: ${base}`);
    //typeof base === 'string' ? alert(`Achou que você digitou as letras ${base}, por favor informe um número válido`): console.log(`A base do retângulo é: ${base}`);
    altura = prompt("Informe o valor para altura do retângulo: ");
    console.log(`A altura do retângulo é: ${altura}`);
    area = base * altura;
    //typeof altura === 'string' ? alert(`Achou que você digitou as letras ${altura}, por favor informe um número válido`): console.log(`A altura do retângulo é: ${altura}`);
    console.log(`${base} * ${altura} = Área de retângulo é : ${area}`);
    /*if(base < 0 && altura < 0){
        console.log("Por favor informe un valor positivo! ");
    }else{
        area = base * altura;
    }*/
    
}//Fim da função do 3º Exercicio

//Função 4º exercicio
function exerci4(){
    mes = prompt("Informe o mes do seu aniversário: ");
    dia = prompt("Informe o dia do seu aniversário: ");
    idade = prompt("Informa sua Idade em anos: ");
    mes === 2 ? resultado = (mes * 28) : resultado = (mes * 30);
    resulAno = idade * 365;
    console.log(`Sua idade: ${idade} expressa em dias é: ${resulAno}`);
    console.log(`O mês: ${mes} expresso em dias é: ${resultado}`);
    console.log(`A soma todos os dias fazem um total de:  ${resultado + resulAno + dia}`);
}//Fim da função do 4º Exercicio

//Função 5º exercicio
function exerci5(){
    muni = prompt("Informe o Município: ");
    elei = prompt("Digite o número total de eleitores: ");
    votoB = prompt("Informe o número de votos brancos: ");
    votoN = prompt("Informe o número de votos nulos: ");
    votoV = prompt("Informe o número de votos válidos: ");
    totalV = (parseFloat(votoB) + parseFloat(votoN) + parseFloat(votoV));
    porBran = 100 * (parseFloat(votoB) / parseFloat(totalV));
    porNulo = 100 * (parseFloat(votoN) / parseFloat(totalV));
    porVal = 100 * (parseFloat(votoV) / parseFloat(totalV));
    console.log("O numero de Eleitores é: " + elei 
    + " No municiío de: " + muni + "\nForam registrados: " + votoB + " votos em branco"
    + "\n" + votoN + " votos nulos e " + votoV + " votos válidos"
    + "\nA % de votos em branco foi de: " + Math.round(porBran) + "%" +
    "\nA % de votos nulos foi de: " + Math.round(porNulo) + "%" +
    "\nA % de votos válidos foi de: " + Math.round(porVal) + "%" +
    "\nO total de votos registrados foi de: " + parseFloat(totalV));
}//Fim da função do 5º Exercicio

//Função 6º exercicio
function exerci6(){
    salar = prompt("Informe o salário mensal: ");
    reaju = (parseFloat(salar) * 10.2)/100
    console.log(`O reajuste de 2022 foi do 10,2% \n Seu salário é de: ${salar}
    \nJunto con o reajuste fico um total de: R$` + (parseFloat(salar) + parseFloat(reaju)));
}//Fim da função do 6º Exercicio

//Função 7º exercicio
function exerci7(){
    //carroNovo = (custoFabri + impostos=45%) + %distribuidor = 28%
    cusF = prompt("Informe o Custo de fábrica");
    porF = parseFloat(cusF) + (parseFloat(cusF) * 0.28) + (parseFloat(cusF) * 0.45);904
    total = porF;
    console.log(`O valor registrado foi de: R$ ${cusF}\nJunto com o porcentual do distribuidor e os impostos fico um total de: R$${total}`);

}

//Função 8º exercicio
function exerci8(){
    nome = prompt("Informe seu Nome: ") || "Desconhecido";
    console.log(`"Bem-Vindo! ${nome}, ao portal de Notas!"`);
    nota1 = prompt("Informe a primeira nota: ");
    console.log(`1ra Nota registrada é de: ${nota1}`);
    nota2 = prompt("Informe a segunda  nota: ");
    console.log(`2da Nota registrada é de: ${nota2}`);
    nota3 = prompt("Informe a terceira nota: ");
    console.log(`3ra Nota registrada é de: ${nota3}`);
    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3
    nome === "Desconhecido" ? console.log(`${nome} por favor da proxima vez informe seu nome` + "\nA média final é de:"+ Math.trunc(media)): console.log( `${nome} A média final é de:`+ Math.trunc(media));
}//Fim da função do 8º Exercicio

//Função 9º exercicio
function exerci9(){
    maca = prompt("Bem-Vindo!\nQuantas maças voçê vai comprar hoje?: ");
    maca < 12 ? total = parseFloat(maca) * 1.3 : total = parseFloat(maca);
    /*if(maca < 12){
        total = parseFloat(maca) * 1.3
    }else{
        total = parseFloat(maca)
    }*/
    console.log(`Obrigada pela compra!\nSua compra foi um Total de: R$${total}`);
}//Fim da função do 9º Exercicio

//Função 10º exercicio
function exerci10(){
    //Temos que percorrer um vetor, e percorrer ele e verificar cada indice e compara ele com um valor dentro do vetor
    const vetor = [10];
    vetor[0] = prompt("Digite um Valor");
    vetor[1] = prompt("Digite outro Valor");
    vetor[2] = prompt("Mais um Valor");
    vetor[3] = prompt("Porfavor digite um Valor");
    vetor[4] = prompt("Digite um Valor");
    vetor[5] = prompt("Digite um Valor");
    vetor[6] = prompt("Digite um Valor");
    vetor[7] = prompt("Digite um Valor");
    vetor[8] = prompt("Digite um Valor");
    vetor[9] = prompt("Digite um Valor");
    ordem = vetor.sort(function(a, b){return a - b});
    texto = `Você digito os seguintes valores: ${vetor} , Em ordem crescente seria: ${ordem}`;
    //E se fizessemos o for para os indices do vetor???? um For loop para preencher o prompt??
    document.getElementById("dez").innerHTML = texto;
    console.log(ordem);
}

//Função 11º exercicio
function exerci11(){
    nome = prompt("Informe seu Nome: ") || "Desconhecido";
    console.log(`Bem-Vindo! ${nome} , ao portal do SenaBank`);
    conta = prompt("Por favor informe o número de sua conta: ")|| "Não Informada";
    console.log(`CC: ${conta}`);
    saldo = prompt("Agora informe seu saldo: ");
    console.log( `${nome} o saldo atual é de: ` + parseFloat(saldo) + "R$");
    debit = prompt("Os Débitos: ");
    credi = prompt("Ultimo! .... Créditos: ");
    salnow = (parseFloat(saldo) - parseFloat(debit) - parseFloat(credi)); /*só pode ser subtração...quando pago no débito o saldo é descontado na hora!
    mas no crédito é igual a unica diferença é que vc vai pagar depois... só pode subtrair
    Banco suspeito...
    */

    salnow <= 0 ? console.log(`":(  Saldo Negativo!  x.X \n\n R$${salnow} `): console.log(`":)  Saldo Possitivo!  x.X \n\n" R$${salnow} `);

    /*if(salnow <= 0){
       console.log(`":(  Saldo Negativo!  x.X \n\n R$${salnow} `);
       //Quero colocar uma tag de tabela aqui.
    }else{
        console.log(`":)  Saldo Possitivo!  x.X \n\n" R$${salnow} `);
    }*/
}//Fim da função do 11º Exercicio

//Função 12º exercicio
function exerci12(){
    num1 = prompt("Digite um valor")
    if(num1 > 10){
        alert("Por favor digite um valor entre 1 e 10")
        num1 = prompt("Digite um valor")
    } else if (num1 == 0){
        alert("Por favor digite um valor entre 1 e 10")
        num1 = prompt("Digite um valor")
    }

    for(let i = 1; i>10; i++){
        console.log(parseFloat(num1) + "X" + i + "=" + (parseFloat(num1)*i));
    }
}//Fim da função do 12º Exercicio


document.getElementById("btn1").addEventListener("click", exerci1);
function texto1(e){
    msg = "Escreva um algoritmo que armasene o valor 10 em uma variável A e o valor 20 em uma variável B. A seguir troque os seus conteúdos. ";
    document.getElementById("magico").innerHTML = msg;
}
function semText(){
    document.getElementById("magico").innerHTML = "";
}
document.getElementById("btn2").addEventListener("click", exerci2);
function texto2(e){
    msg = "Escreva um algoritmo para ler um valor do teclado e escrever na tela seu antecessor";
    document.getElementById("magico").innerHTML = msg;
}
document.getElementById("btn3").addEventListener("click", exerci3);
function texto3(e){
    msg = "Escreva um algoritmo para ler as dimensões de um retângulo, calcular e escrever a área do retângulo";
    document.getElementById("magico").innerHTML = msg;
}
document.getElementById("btn4").addEventListener("click", exerci4);
function texto4(e){
    msg = "Faça um algoritmo que leia a idade de uma pessoa expressa em ano, meses e dias e escreva a idade dessa pessoa expressa apenas em dias.";
    document.getElementById("magico").innerHTML = msg;
}
document.getElementById("btn5").addEventListener("click", exerci5);
function texto5(e){
    msg = "Escreva um algoritmo para ler o número total de eleitores de um nunicípio, o número de votos brancos, nulos e válidos. Calcular e escrever o porcentual que cada um representa.";
    document.getElementById("magico").innerHTML = msg;
}
document.getElementById("btn6").addEventListener("click", exerci6);
function texto6(e){
    msg = "Escreva um algoritmo para ler o salário mensal atual de um funcionario e o percentual de reajuste. Calcular e escrever o valor do novo salário";
    document.getElementById("magico").innerHTML = msg;
}
document.getElementById("btn7").addEventListener("click", exerci7);
function texto7(e){
    msg = "O custo de um carro novo ao consumidor é a soma do custo de fábrica" +
    "com a porcentagem do distribuidor e dos impostos. " +
    "Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%" + 
    "escrever um algoritmo para calcular e escrever o custo ao consumidor";
    document.getElementById("magico").innerHTML = msg;
}
document.getElementById("btn8").addEventListener("click", exerci8);
function texto8(e){
    msg = "Faca um algoritmo que leia três notas de um aluno, calcule e escreva a média dinal deste aluno";
    document.getElementById("magico").innerHTML = msg;
}

document.getElementById("btn9").addEventListener("click", exerci9, showMacas);
function texto9(e){
    msg = "As maças cutam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12" + 
    ". Escreva um programa que leia o número de maças compradas, calcule e escreva o custo total da compra ";
    document.getElementById("magico").innerHTML = msg;
}
function showMacas(){
    document.getElementById("lojaMacas").classList.toggle("estiloLoja");
    
}

document.getElementById("btn10").addEventListener("click", exerci10);
function texto10(e){
    msg = "Ler 10 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescrente";
    document.getElementById("magico").innerHTML = msg;
}
document.getElementById("btn11").addEventListener("click", exerci11);
function texto11(e){
    msg = "Faça um algoritmo para ler: número da conta do cliente, saldo, debito e crédito. Após, calcular e escrever o saldo atual" +
    "saldo atual = saldo - débito + crédito. Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo positivo'" +
    ",senão escrever a mensagem 'Saldo negativo'";
    document.getElementById("magico").innerHTML = msg;
}
document.getElementById("btn12").addEventListener("click", exerci12);
function texto12(e){
    msg = "Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrevera tabuada de 1 a 10 do valor lido";
    document.getElementById("magico").innerHTML = msg;
}
