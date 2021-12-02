const { countIncreasingDepths } = require("./")

const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
test("should count number of times a depth measurement increases from the previous measurement", () => {
  expect(countIncreasingDepths(testInput)).toBe(7)
})

test("should use a sliding window to calculate increases", () => {})
