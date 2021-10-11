function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

const calculator = {
    add,
    subtract,
    multiply,
    divide, //키와 value값이 똑같으면 생략 가능 -> 객체 정의 방식
};

module.exports = calculator;