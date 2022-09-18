export const addNumbers = (numbers) => {

    //numbers : 4,5,6 => 4 + 5 + 6 : 15

    return numbers.split(",")
                  .map(n => parseInt(n))
                  .reduce((a,b) => a + b)

}

export const multiplyNumbers = (numbers) => {

    //numbers : 4,5,6 => 4 * 5 * 6 : 120

    return numbers.split(",")
                  .map(n => parseInt(n))
                  .reduce((a,b) => a * b)

}