const expression = document.getElementById("display");

const putForCalc =(calcButton) =>{
    expression.value += calcButton;
}

const clrScr = () =>{
    expression.value = "";
}

const calculate = () =>{
    try{
        expression.value = eval(expression.value)
    }

    catch{
        expression.value = "undefined"
    }
}