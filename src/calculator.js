function soma(a,b){
    return a+b
}
function subtracao(a,b){
    return a-b
}
function multiplicacao(a,b){
    return a*b
}
function divisao(a,b){
    return a/b
}



console.log("=========== Calculadora ===========");
console.log("Selecione a operação:");
var operacao = Number(prompt("1)Soma\n2)Subtração\n3)Multiplicação\n4)Divisão"));
console.log("===================================")
var x = Number(prompt("Insira o valor 1:"));
var y = Number(prompt("Insira o valor 2:"));
switch(operacao){
    case 1:
        console.log("Resultado:",soma(x,y));
        break;
    case 2:
        console.log("Resultado:",subtracao(x,y));
        break;
    case 3:
        console.log("Resultado:",multiplicacao(x,y));
        break;
    case 4:
        console.log("Resultado:",divisao(x,y));
        break;
}
