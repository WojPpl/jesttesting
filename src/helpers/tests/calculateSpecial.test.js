import calculateSpecialPrice from "../calculateSpecialPrice"

const mockPrice = {
    basePrice: 44.46,
    tax: 23,
    discount: 5
}
describe("Calculate special price", () => {
    it("shows good spacial price with coma", () => {
        expect(calculateSpecialPrice(mockPrice.basePrice,mockPrice.tax,mockPrice.discount)).toEqual("51,95");
    });
    it("contains dot instead of coma", () => {
        expect(calculateSpecialPrice(mockPrice.basePrice,mockPrice.tax,mockPrice.discount,false)).toContain(".");
    });
});
