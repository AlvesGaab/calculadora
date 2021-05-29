const operacoes = ['+', '-', '*', '/'];
let num1 = '', num2 = '', operador = '', resultado = 0;

function insert(num)
{
    const ehOperador = operacoes.includes(num);

    if(num1 && !num2 && !ehOperador)
        num2 = parseInt(num); 

    if(!num1 && !ehOperador)
        num1 = parseInt(num);  
     
    console.log(num);

    if(ehOperador)
        operador = num;

    document.getElementById('resultado').innerHTML = num1 +operador+ num2; 
}

function clean() 
{
    num1 = '', num2 = '', resultado = '', operador = '';
    document.getElementById('resultado').innerHTML = "";
}

function Adicao(a , b) 
{
    return a+b;
} 


function Multiplicacao(a , b) 
{ 
    return a*b;
} 


function subtração(a , b) 
{ 
    console.log (a - b) 
} 



function divisão(a , b) 
{ 
    console.log (a / b) 
}

function calcular(){

    switch (operador) {
        case '+':
            resultado = Adicao(num1,num2);
            break;
        case '*':
            resultado = Multiplicacao(num1,num2);
            break;
        default:
            break;
    }

    

    document.getElementById('resultado').innerHTML = (resultado);
}