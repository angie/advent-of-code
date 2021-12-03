const fs = require("fs")
const path = require("path")

const parseInput = () => {
  const data = fs.readFileSync(path.resolve(__dirname, "./input.txt"), {
    encoding: "utf-8",
  })

  const numbers = data.trim().split("\n")
  return numbers
}

const calcPowerConsumption = (input = parseInput()) => {
  let gammaRate = ""
  let epsilonRate = ""

  // assume binary numbers are all the same length
  let numCols = input[0].length

  for (let i = 0; i < numCols; i++) {
    let countZero = 0
    let countOne = 0

    for (const number of input) {
      if (number[i] === "0") {
        countZero++
      } else {
        countOne++
      }
    }

    if (countZero > countOne) {
      gammaRate += "0"
      epsilonRate += "1"
    } else {
      gammaRate += "1"
      epsilonRate += "0"
    }
  }

  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)
}

module.exports = { calcPowerConsumption, parseInput }
