//Declaração de Variáveis
A = 10;
B = 20;
aux = 0;


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
    reaju = (salar * 10.2)/100
    console.log("O reajuste de 2022 foi do 10,2% \n Seu salário é de: " + salar +
    "\nJunto con o reajuste fico um total de: " + (salar + reaju));
}//Fim da função do 6º Exercicio

//Função 5º exercicio
function exerci7(){
    nota1 = prompt("");
}//Fim da função do 6º Exercicio