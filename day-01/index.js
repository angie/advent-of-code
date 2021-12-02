const fs = require("fs")
const path = require("path")

const parseInput = () => {
  const data = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
    encoding: "utf-8",
  })

  const numbers = data.trim().split("\n").map(Number)
  return numbers
}

const countIncreasingDepths = (data = parseInput()) => {
  let count = 0

  for (let i = 1; i < data.length; i++) {
    const prev = data[i - 1]
    const current = data[i]

    if (current > prev) {
      count++
    }
  }

  return count
}

const getSlidingWindow = (data = parseInput()) => {
  let [a, b, ...rest] = data
  const sums = []

  for (const number of rest) {
    const c = number
    const sum = a + b + c
    sums.push(sum)

    a = b
    b = c
  }

  return sums
}

module.exports = { countIncreasingDepths, getSlidingWindow }
