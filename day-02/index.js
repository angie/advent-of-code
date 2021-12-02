const fs = require("fs")
const path = require("path")

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

const simpleDive = (instructions = parseInstructions()) => {
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

const complexDive = (instructions = parseInstructions()) => {
  let aim = 0
  let horizontal = 0
  let depth = 0

  for (const instruction of instructions) {
    const [direction, number] = instruction

    switch (direction) {
      case "forward":
        horizontal += number
        depth += aim * number
        break
      case "down":
        aim += number
        break
      case "up":
        aim -= number
        break
      default:
        break
    }
  }

  return horizontal * depth
}

module.exports = { complexDive, simpleDive, parseInstructions }
