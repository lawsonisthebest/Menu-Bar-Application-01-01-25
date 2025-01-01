const equationTxt = document.querySelector(".calculatorDisplay");
var equation = "";

function enterNumber(num){
    equation += num;
    equationTxt.innerHTML = equation;
}

function clearEquation(){
    equation = "";
    equationTxt.innerHTML = equation;
}

function solve(){
    res = eval(equation);
    res2 = res.toFixed(2);
    equation = res2;
    equationTxt.innerHTML = res2;
}