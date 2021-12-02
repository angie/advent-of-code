const { parseInstructions, simpleDive, complexDive } = require(".")

const input = [
  ["forward", 5],
  ["down", 5],
  ["forward", 8],
  ["up", 3],
  ["down", 8],
  ["forward", 2],
]

test("should parse instructions", () => {
  expect(parseInstructions()[0]).toEqual(["forward", 9])
})

test("part 1: multiplying final horizontal position by depth", () => {
  expect(simpleDive(input)).toEqual(150)
})

test("part 2: multiplying final horizontal position by depth", () => {
  expect(complexDive(input)).toEqual(900)
})
