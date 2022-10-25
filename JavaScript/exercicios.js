//Declaração de Variáveis
A = 10;
B = 20;
aux = 0;

function menu(){
    this.opcao = prompt("---- Menu ----\n"  + 
                        "0. Sair\n"         +
                        "1. Exercício 01\n" + 
                        "2. Exercício 02\n" +
                        "3. Exercício 03\n" +
                        "4. Exercício 04\n" +
                        "5. Exercício 05\n" +
                        "6. Exercício 06\n" +
                        "7. Exercício 07\n" +
                        "8. Exercício 08\n" +
                        "9. Exercício 09\n" +
                        "10. Exercício 10\n" +
                        "11. Exercício 11\n" +
                        "Escolha uma das opções"
                        );
}//fim da função menu

function operacao(){
    menu();//Chamar o menu de opções
    switch(this.opcao){
        case '0':
            console.log("Obrigado!");
            break;
        case '1':
            console.log("Exercício 01:\n " + exerci1());
            break;
        case '2':
            console.log("Exercício 02:\n " + exerci2());
            break;
        case '3':
            console.log("Exercício 03:\n " + exerci3());
            break;
        case '4':
            console.log("Exercício 04:\n " + exerci4());
            break;
        case '5':
            console.log("Exercício 05:\n " + exerci5());
            break;
        case '6':
            console.log("Exercício 06:\n " + exerci6());
            break;
        case '7':
            console.log("Exercício 07:\n " + exerci7());
            break;
        case '8':
            console.log("Exercício 08:\n " + exerci8());
            break;
        case '9':
            console.log("Exercício 09:\n " + exerci9());
            break;
        case '10':
            console.log("Exercício 10:\n " + exerci10());
            break;
        case '11':
            console.log("Exercício 11:\n " + exerci11());
            break;
        default:
            console.log("Escolha uma opção válida!");
            break; 
    }//fim do switch 
}//fim da função operação


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
    console.log("A soma de todos os dias fazem um total de: " + (resultado + resulAno + dia));
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

//Função 7º exercicio
function exerci7(){
    fabri = prompt("Informe o valor de custo de fábrica: ");
    console.log("Custo de Fábrica: " + fabri);
    total = ((fabri * 45) / 100) + ((fabri * 28) / 100)
    console.log("Mais o 45% de impostos e o 28% do Distribuidor fico um total de: " + total);
}//Fim da função do 7º Exercicio

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

//Função 10º exercicio
function exerci10(){
    nome = prompt("Informe seu Nome: ");
    console.log("Bem-Vindo! " + nome +", ao portal do Vendedor!");
    salar = prompt("Informe seu salario fixo: ");
    console.log("Salario fixo é de: " + salar);
    venda = prompt("Informe o valor total de vendas: ");
    if(venda == 1500){
        comi = (venda * 3) / 100;
        console.log(nome + "sua comissão das vendas foi de: " + comi);
        console.log("total de: " + (salar +comi));
    }else{
        if(venda > 1500){
            comi = (venda * 5) / 100;
            console.log(nome + "sua comissão das vendas foi de: " + comi);
            console.log("total de: " + (salar +comi));
        }else{
            console.log("+_+  Não teve comissao  :( ");
        }
    }
}

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


//Função 12º exercicio
function exerci12(){
    num = prompt("Informe um valor: ");
    if(num > 10){
        console.log("Somente são válidos numeros entre 1 e 10");
    }else{
        console.log("Tabuaba do " + num + ": \n");
        for(i=0;i<=10;i++){
            msg += num + " * " + i + " = " + (parseFloat(num) * parseFloat(i)) + "\n";
        }
        console.log(msg + "\n");
    }  
}//Fim da função do 12º Exercicio

//Função 13º exercicio
function exerci13(){
    N = prompt("Informe um valor: ");
    if(N <= 0){
        console.log("Deve ser um número maior que Zero!");
    }else{
        for(i=0; i<=N; i++){
            console.log(i);    
        }
    }
}//Fim da função do 13º Exercicio

//Função 14º exercicio
function exerci14(){
    valor[10] = prompt("Por favor informe um valor positivo ou negativo");
    if(valor < 0){
        count = count + 1;
    }
    console.log("Você digito: " + count + "número negativos");
}//Fim da função do 14º Exercicio
operacao();
