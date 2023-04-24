const fetchDescription = require("./fetchDescription");

const cityName = "London";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(`${cityName} is well`),
  })
);

describe("City test", () => {
  test("Should be a string", async () => {
    const sentence = await fetchDescription();
    expect(typeof sentence).toBe("string");
  });

  test("City name should be uppercase", async () => {
    const sentence = await fetchDescription();
    expect(sentence.split("")[0]).toBe(cityName.split("")[0].toUpperCase());
  });
});
