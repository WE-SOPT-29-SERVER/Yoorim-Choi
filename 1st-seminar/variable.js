// var: 재선언 / 재할당 가능
var variableVar = "123";
var variableVar = "321";

console.log("variableVar",variableVar);

//let: 재선언 불가(두 번이상 선언 불가)/재할당 가능
let variableLet = "123";
variableLet = "321";

console.log("varaibleLet",variableLet);

//const: 재선언 불가능 / 재할당도 불가능
const variableConst = "123";
// const someConst; 처럼 초기화값을 할당하지 않으면 오류

console.log("variableConst",variableConst);