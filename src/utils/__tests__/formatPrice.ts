import formatPrice from "../formatPrice";

describe("formatPrice", () => {
  it("should convert a single digit number to a string", () => {
    const price = 0;

    expect(formatPrice(price)).toBe("0");
  });

  it("should be able to format a four digit number", () => {
    const price = 1250;

    expect(formatPrice(price)).toBe("1,250");
  });

  it("should be able to format a seven digit number", () => {
    const price = 1250000;

    expect(formatPrice(price)).toBe("1,250,000");
  });

  it("should be able to format a four digit number in a string form", () => {
    const price = "1250";

    expect(formatPrice(price)).toBe("1,250");
  });

  it("should be able to format a seven digit number in a string form", () => {
    const price = "1250000";

    expect(formatPrice(price)).toBe("1,250,000");
  });

  it("should return null if input is not convertable to string", () => {
    const price = "aaaaaa";

    expect(formatPrice(price)).toBe(null);
  });
});
