const fetchDescription = require("./fetchDescription");

const cityName = "London";
const adjective = "well";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(`${cityName} is ${adjective}`),
  })
);

describe("City test", () => {
  test("Should be a string", async () => {
    const sentence = await fetchDescription();

    expect(typeof sentence).toBe("string");
  });

  test("City name should begin with uppercase", async () => {
    const sentence = await fetchDescription();
    const cityFirstLetter = cityName.split("")[0].toUpperCase();

    expect(sentence.split("")[0]).toBe(cityFirstLetter);
  });
});

describe("Adjective test", () => {
  test("Should be a string", async () => {
    const sentence = await fetchDescription();

    expect(typeof sentence).toBe("string");
  });

  test("Adjective should begin with lowercase", async () => {
    const sentence = await fetchDescription();
    const adjectiveIndex =
      sentence.split("")[sentence.length - adjective.length];
    const adjectiveFirstLetter = adjective.split("")[0].toLowerCase();

    expect(adjectiveIndex).toBe(adjectiveFirstLetter);
  });
});
