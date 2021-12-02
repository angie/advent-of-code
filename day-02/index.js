const fs = require("fs")
const path = require("path")

const parseInput = () => {
  const data = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
    encoding: "utf-8",
  })

  const numbers = data.trim().split("\n").map(Number)
  return numbers
}

const parseInstructions = () => {
  const data = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
    encoding: "utf-8",
  })

  const lines = data
    .trim()
    .split("\n")
    .map((line) => {
      const [instruction, num] = line.split(" ")
      return [instruction, Number(num)]
    })

  return lines
}

const dive = (instructions = parseInstructions()) => {
  let horizontal = 0
  let depth = 0

  for (const instruction of instructions) {
    const [direction, number] = instruction

    switch (direction) {
      case "forward":
        horizontal += number
        break
      case "down":
        depth += number
        break
      case "up":
        depth -= number
        break
      default:
        break
    }
  }

  return horizontal * depth
}

module.exports = { dive, parseInstructions }
