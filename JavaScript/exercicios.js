//Declaração de Variáveis
opcao = -1;
A = 10;
B = 20;
aux = 0;
nota1 = 0;


/*function menu(){
    console.log("------Menu------ \n\n" +
    "  Exercicio 1\n" +
    "  Exercicio 2\n" +
    "  Exercicio 3\n" +
    "  Exercicio 4\n" +
    "  Exercicio 5\n" +
    "  Exercicio 6\n" +
    "  Exercicio 8\n" +
    "  Exercicio 9\n" +
    "  Exercicio 11\n" +
    "  0. Sair");
}
function exeMenu(){
    
    switch(opcao){
        case 1:
            exerci1();
            break;
        case 2:
            exerci2();
            break;
        case 3:
            exerci3();
            break;
        case 4:
            exerci4();
            break;
        case 5:
            exerci5();
            break;
        case 6:
            exerci6();
            break;
        case 8:
            exerci8();
            break;
        case 9:
            exerci9();
            break;
        case 11:
            exerci11();
            break;
    }   
    
}*/


//Função 1º exercicio
function exerci1(){
    console.log("O valor inicial de A é: " + A);
    console.log("O valor inicial de B é: " + B);
    aux = A;
    A = B;
    B = aux;
    console.log("Depois da troca o valor de A é: " + A);
    console.log("Depois da troca o valor de B é: " + B);
}//Fim da função do 1º Exercicio

//Função 2º exercicio
function exerci2(){
    num1 = prompt("Digite um número: ");
    resultado = num1 - 1;
    console.log("O antecessor do número: " + num1 + " é: " + resultado);
}//Fim da função do 2º Exercicio

//Função 3º exercicio
function exerci3(){
    base = prompt("Informe o valor para a base do retângulo: ")
    altura = prompt("Informe o valor para altura do retângulo: ");
    area = base * altura;
    /*if(base < 0 && altura < 0){
        console.log("Por favor informe un valor positivo! ");
    }else{
        area = base * altura;
    }*/
    console.log("A Área de retângulo é: " + area);
}//Fim da função do 3º Exercicio

//Função 4º exercicio
function exerci4(){
    mes = prompt("Informe o mes do seu aniversário: ");
    dia = prompt("Informe o dia do seu aniversário: ");
    idade = prompt("Informa sua Idade em anos: ");
    if(mes == 2){
        resultado = (mes * 28)
    }else{
        resultado = (mes * 30)
    }
    resulAno = idade * 365;
    console.log("Sua idade: " + idade + " expressa em dias é: " + resulAno);
    console.log("O mês: " + mes + " expresso em dias é: " + resultado);
    console.log("A soma todos os dias fazem um total de: " + (resultado + resulAno + dia));
}//Fim da função do 4º Exercicio

//Função 5º exercicio
function exerci5(){
    muni = prompt("Informe o Município: ");
    elei = prompt("Digite o número total de eleitores: ");
    votoB = prompt("Informe o número de votos brancos: ");
    votoN = prompt("Informe o número de votos nulos: ");
    votoV = prompt("Informe o número de votos válidos: ");
    totalV = votoB + votoN + votoV;
    porBran = parseFloat(votoB) / parseFloat(totalV);
    porNulo = parseFloat(votoN) / parseFloat(totalV);
    porVal = parseFloat(votoV) / parseFloat(totalV);
    console.log("O numero de Eleitores é: " + elei 
    + "\nA % de votos em branco foi de: " + porBran +
    "\nA % de votos nulos foi de: " + porVal +
    "\nA % de votos válidos foi de: " + porVal + 
    "\nO total de votos registrados foi de: " + totalV);
}//Fim da função do 5º Exercicio

//Função 6º exercicio
function exerci6(){
    salar = prompt("Informe o salário mensal: ");
    reaju = (parseFloat(salar) * 10.2)/100
    console.log("O reajuste de 2022 foi do 10,2% \n Seu salário é de: " + salar +
    "\nJunto con o reajuste fico um total de: " + (salar + reaju));
}//Fim da função do 6º Exercicio

//Função 7º exercicio
function exerci7(){
    //carroNovo = (custoFabri + impostos=45%) + %distribuidor = 28%
    cusF = prompt("Informe o Custo de fábrica");
    porF = parseFloat(cusF) + (parseFloat(cusF) * 0.28) + (parseFloat(cusF) * 0.45);904
    total = porF;
    console.log("O valor registrado foi de: " + cusF +"R$\nJunto com o porcentual do distribuidor e os impostos fico um total de: " +
    total + "R$");

}

//Função 8º exercicio
function exerci8(){
    nome = prompt("Informe seu Nome: ");
    console.log("Bem-Vindo! " + nome +", ao portal de Notas!");
    nota1 = prompt("Informe a primeira nota: ");
    nota2 = prompt("Informe a segunda  nota: ");
    nota3 = prompt("Informe a terceira nota: ");
    media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3
    console.log( nome + " A média final é de: " + media);
}//Fim da função do 8º Exercicio

//Função 8º exercicio
function exerci9(){
    maca = prompt("Bem-Vindo!\nQuantas maças voçê vai comprar hoje?: ");
    if(maca < 12){
        total = parseFloat(maca) * 1.3
    }else{
        total = parseFloat(maca)
    }
    console.log("Obrigada pela compra!\nSua compra foi um Total de: "
    + total + "R$");
}//Fim da função do 9º Exercicio

//Função 11º exercicio
function exerci11(){
    nome = prompt("Informe seu Nome: ");
    console.log("Bem-Vindo! " + nome +", ao portal do SenaBank");
    conta = prompt("Por favor informe o número de sua conta: ");
    console.log("CC: " + conta);
    saldo = prompt("Agora informe seu saldo: ");
    console.log( nome + " o saldo atual é de: " + parseFloat(saldo) + "R$");
    debit = prompt("Os Débitos: ");
    credi = prompt("Ultimo! .... Créditos: ");
    salnow = (saldo - debit - credi); /*só pode ser subtração...quando pago no débito o saldo é descontado na hora!
    mas no crédito é igual a unica diferença é que vc vai pagar depois... só pode subtrair
    Banco suspeito...
    */
    if(salnow <= 0){
       console.log(":(  Saldo Negativo!  x.X \n\n" + salnow + "R$");
       //Quero colocar uma tag de tabela aqui.
    }else{
        console.log(":)  Saldo Possitivo!  x.X \n\n" + salnow + "R$");
    }
}//Fim da função do 11º Exercicio

/*menu();
opcao = prompt("Escolha um exercicio");
exeMenu(opcao);*/

document.getElementById("btn1").addEventListener("click", exerci1);
document.getElementById("btn2").addEventListener("click", exerci2);
document.getElementById("btn3").addEventListener("click", exerci3);
document.getElementById("btn4").addEventListener("click", exerci4);
document.getElementById("btn5").addEventListener("click", exerci5);
document.getElementById("btn6").addEventListener("click", exerci6);
document.getElementById("btn7").addEventListener("click", exerci7);
document.getElementById("btn8").addEventListener("click", exerci8);
document.getElementById("btn9").addEventListener("click", exerci9);
document.getElementById("btn11").addEventListener("click", exerci11);
