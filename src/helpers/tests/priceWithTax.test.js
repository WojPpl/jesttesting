import React from "react";
import priceWithTax from "../priceWithTax"
import prices from "../../mockData/prices";

describe("Price with tax", () => {
        it("shows good final price with coma", () => {
            expect(priceWithTax(prices[0].basePrice, prices[0].tax)).toEqual("147,60");
        });

        it("shows good final price without coma", () => {
        expect(priceWithTax(prices[2].basePrice, prices[2].tax, false)).toEqual("54.69");
    });

});
