function add() {
    let x = Number(document.forms["sum"]["num1"].value);
    let y = Number(document.forms["sum"]["num2"].value);

    let res = x + y;

    document.getElementById("result").innerHTML = res;
}

const diff=() => {

    const x = Number(document.forms["sum"]["num1"].value);
    const y = Number(document.forms["sum"]["num2"].value);

    const res = x - y;

    document.getElementById("result").innerHTML = res;

}

function prod() {
    let x = Number(document.forms["sum"]["num1"].value);
    let y = Number(document.forms["sum"]["num2"].value);

    let res = x * y;

    document.getElementById("result").innerHTML = res;
}

function div() {
    let x = Number(document.forms["sum"]["num1"].value);
    let y = Number(document.forms["sum"]["num2"].value);

    let res = x / y;

    document.getElementById("result").innerHTML = res;
}

function factorial(x) {

    if (x === 0 || x === 1) {
        return 1;
    }
    else {
        return x * (factorial(x - 1));
    }

}

function printFact() {

    let x = Number(document.forms["sum"]["num1"].value);

    let result = factorial(x)

    document.getElementById("result").innerHTML = result;

}


const openNav = () => {
    document.getElementById("chococococo").style.right = "40vw";
}

const closeNav = () => {
    document.getElementById("chococococo").style.right = "90vw";
}

