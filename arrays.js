var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ]

function addElementToBeginningOfArray() {
  chocolateBars.unshift("milky way")
}

function destructivelyAddElementToBeginningOfArray() {
   const candyBars = ["milky way", ...chocolateBars]
}

function addElementToEndOfArray() {
  chocolateBars.push("")
}

function destructivelyAddElementToEndOfArray() {
  
}