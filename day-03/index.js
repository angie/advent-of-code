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

const calcOxygenGeneratorRating = (input = parseInput(), position = 0) => {
  if (input.length === 1) return input

  let zeroBit = []
  let oneBit = []

  let countZero = 0
  let countOne = 0

  // partition numbers by the bit we're interested in
  // and keep a total of which bit is encountered the most
  for (const number of input) {
    if (number[position] === "0") {
      countZero++
      zeroBit.push(number)
    } else {
      countOne++
      oneBit.push(number)
    }
  }

  if (countOne === countZero || countOne > countZero) {
    return calcOxygenGeneratorRating(oneBit, position + 1)
  }

  return calcOxygenGeneratorRating(zeroBit, position + 1)
}

const calcCo2Rating = (input = parseInput(), position = 0) => {
  if (input.length === 1) return input

  let zeroBit = []
  let oneBit = []

  let countZero = 0
  let countOne = 0

  // partition numbers by the bit we're interested in
  // and keep a total of which bit is encountered the most
  for (const number of input) {
    if (number[position] === "0") {
      countZero++
      zeroBit.push(number)
    } else {
      countOne++
      oneBit.push(number)
    }
  }

  if (countZero === countOne || countZero < countOne) {
    return calcCo2Rating(zeroBit, position + 1)
  }
  return calcCo2Rating(oneBit, position + 1)
}

const calcLifeSupportRating = (input = parseInput()) => {
  const oxygenRating = parseInt(calcOxygenGeneratorRating(input), 2)
  const co2Rating = parseInt(calcCo2Rating(input), 2)

  return oxygenRating * co2Rating
}

module.exports = {
  calcLifeSupportRating,
  calcPowerConsumption,
}
