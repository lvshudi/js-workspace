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
    var generatedArray = [];
    var times = secondNumber = firstNumber + 1;
    for (let rowIndex = 0; rowIndex < times; index++) {
        //row
        var row = [];
        for (let colums = 0; colums < (rowIndex + 1); colums++) {
            var result = (colums + firstNumber) * (rowIndex + firstNumber);
            row.push(result);
        }
        generatedArray.push(row);
    }
    return generatedArray;
}

module.exports = {
    isValid,
    generateMultiplyArray
};