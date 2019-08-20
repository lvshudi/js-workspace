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
    var result = "";
    for(let i = 0; i<multiplyArray.length; i++) {
        for(let j = 0; j<multiplyArray[i].length; j++) {
            result = result  + multiplyArray[i][j] + " ";
        }
        result = result + "\n";
    }
    return result;
}

function generateMultiplyArray(firstNumber, secondNumber) {
    var generatedArray = [];
    var times = secondNumber = firstNumber + 1;
    for (let rowIndex = 0; rowIndex < times; rowIndex++) {
        //row
        var row = [];
        for (let colums = 0; colums < (rowIndex + 1); colums++) {
            var mulity = (colums + firstNumber) * (rowIndex + firstNumber);
            var result = (colums + firstNumber) + "x" + (rowIndex + firstNumber) + "=" + mulity;
            row.push(result);
        }
        generatedArray.push(row);
    }
    return generatedArray;
}

module.exports = {
    isValid,
    generateMultiplyArray,
    printMultiplyTable
};