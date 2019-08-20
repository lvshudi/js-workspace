const {isValid} = require('../main');

it ('should numbers be valid', ()=>{
    //given
    let firstNumber = 2;
    let secondNumber = 3;

    //when
    var result = isValid(firstNumber, secondNumber);
    expect(result).toBe(true);
});

it('should generated array with table items',()=>{
    //given 
    let firstNumber = 2;
    let secondNumber = 3;

    //when
    var generatedArray = generateMultiplyArray(firstNumber, secondNumber);

    //then
    expect(generatedArray[0][0],'2x2=4');
    expect(generatedArray[0][0],'2x3=6');
    expect(generatedArray[0][0],'3x3=9');
})
var generatedArray = [];
var rows = [];
generatedArray[0] = rows;

[
    ["2x2=4"],
    ['2x3=6','3x3=9']
]

  
// const createMultiplicationTable = require('../createMultiplicationTable');

// it ('should multiply tow numbers', ()=>{
//     //given 
//     const firstNumber = 2;
//     const secondNumber = 3;

//     //when 
//     const result = createMultiplicationTable(firstNumber, secondNumber);

//     //then
//     arr = [["2x2=4"],["2x3=6 3x3=9"]];
//     expect(result).toBe(arr);
// });

// it ('should multiply tow numbers', ()=>{
//     //given 
//     const firstNumber = 1;
//     const secondNumber = 2;

//     //when 
//     const result = createMultiplicationTable(firstNumber, secondNumber);

//     //then
//     arr = [["1x1=1"],["1x2=2 2x2=4"]];
//     expect(result).toBe(arr);
// });

// it ('should multiply tow numbers', ()=>{
//     //given 
//     const firstNumber = 1;
//     const secondNumber = 3;

//     //when 
//     const result = createMultiplicationTable(firstNumber, secondNumber);

//     //then
//     arr = [["1x1=1"]["1x2=2 2x2=4"],["2x3=6 3x3=9"]];
//     expect(result).toBe(arr);
// });