// import { isVariableDeclaration } from "@babel/types";

function multiplyTalbe(firstNumber, secondNumber) {
    var output = "";
    var valid = isValid(firstNumber, secondNumber);
    if(valid) {
        return valid;
    }
    var multiplyArray = createMultiplicationTable(firstNumber, secondNumber);
    output = printMultiplyTable(generateMultiplyArray)
}

function isValid(firstNumber, secondNumber) {
    return firstNumber < secondNumber;
}

function printMultiplyTable(multiplyArray) {

}

function generateMultiplyArray(firstNumber, secondNumber) {

}

module.exports = {
    isValid,
    generateMultiplyArray
};