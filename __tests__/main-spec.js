const {isValid,generateMultiplyArray,printMultiplyTable} = require('../main');

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
    expect(generatedArray[0][0]).toBe('2x2=4');
    expect(generatedArray[1][0]).toBe('2x3=6');
    expect(generatedArray[1][1]).toBe('3x3=9');
});

it ('should generate result string', () => {
    //given
    const array = [];
    array[0] = [];
    array[0][0] = "2*2=4";

    //when
    const result = printMultiplyTable(array);

    //then
    expect(result).toBe("2*2=4 \n");
});
  
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