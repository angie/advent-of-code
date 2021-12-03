const { calcPowerConsumption, calcLifeSupportRating } = require(".")

const testInput = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
]

test("calculates power consumption", () => {
  expect(calcPowerConsumption(testInput)).toEqual(198)
})

test("calculates life support rating", () => {
  expect(calcLifeSupportRating(testInput)).toEqual(230)
})
