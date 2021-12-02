const { parseInstructions, dive } = require(".")

test("should parse instructions", () => {
  expect(parseInstructions()[0]).toEqual(["forward", 9])
})

test("should calculate product of horizontal distance and depth", () => {
  const input = [
    ["forward", 5],
    ["down", 5],
    ["forward", 8],
    ["up", 3],
    ["down", 8],
    ["forward", 2],
  ]

  expect(dive(input)).toEqual(150)
})
