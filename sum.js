let numbersState = []
function storeNumber(a , b = null, c = null){
	return numbersState = [a,b,c].filter( e => e)
}
function sum(a , b = null, c = null){
	let numbers = [...numbersState, a, b, c].filter( e => e).slice(0,3) // merge state and parameters. get first 3
  
	return numbers.length < 3 ? storeNumber(...numbers) : getSum(numbers)
}

function getSum(numbers){
  let sum = numbers.reduce((a, b) => a + b, 0) //calculate sum
  numbersState = [] //reset state
  return sum
}
sum(2)
sum(5)
console.log("first test", sum(3))
console.log("second test", sum(1, 2, 3))
