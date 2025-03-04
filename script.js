//your JS code here. If required.
let input=document.getElementById("ip")
let start=document.getElementById("btn")
let output=document.getElementById("output")

function initial(inp){
	return setTimeout(()=>{
		output.innerHTML=""
		output.innerHTML=`Result: ${inp}`
		console.log("inp",inp)
		return inp;
	},2000)
}
function second(inp){
	setTimeout(()=>{
		output.innerHTML=""
		let mul=2*inp
		output.innerHTML=`Result: ${mul}`
		console.log("mul",mul)
		return mul
	},2000)
}
function third(inp){
	setTimeout(()=>{
		output.innerHTML=""
		let sub=inp - 3
		output.innerHTML=`Result: ${sub}`
		console.log("sub",sub)
		return sub
	},1000)
}
function fourth(inp){
	setTimeout(()=>{
		output.innerHTML=""
		let div=inp/2
		output.innerHTML=`Result: ${div}`
		console.log("div",div)
		return div
	},1000)
}
function fifth(inp){
	setTimeout(()=>{
		output.innerHTML=""
		let sum=inp+10
		output.innerHTML=`Final Result: ${sum}`
		console.log("sum",sum)
		return sum
	},1000)
}

start.addEventListener("click", (e)=>{
	e.preventDefault();
	const userInput=input.value;
	new Promise(resolve=>{
		resolve(userInput)
	})
	.then(initial(userInput))
	.then(second(userInput))
	.then(third(userInput))
	.then(fourth(userInput))
	.then(fifth(userInput))
})