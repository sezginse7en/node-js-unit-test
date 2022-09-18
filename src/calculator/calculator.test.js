import { expect } from "chai";
import { addNumbers,multiplyNumbers } from "./calculator";

describe("calculator test", () => {

    it("should add number",() => {

        //arrange
        const input = "10,20,30"
        const expected = 60 //10+20+30

        //act
        const actual = addNumbers(input)

        //assert
        expect(actual).to.equal(expected)

    })

    it("should multiply number",() => {

        //arrange
        const input = "10,20,30"
        const expected = 6000 //10*20*30

        //act
        const actual = multiplyNumbers(input)

        //assert
        expect(actual).to.equal(expected)
        expect(actual).to.greaterThan(1000)

    })

})