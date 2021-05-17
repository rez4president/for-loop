// let word = "Hello";
// for(let i=0; i < word.length; i++){
// 	console.log(word[i]);
// }

// for(let i=0; i<=10; i++) {
// 	console.log(i);
// }

// for(let i=10; i>=2; i--) {
// 	console.log(i);
// }

let number = +prompt("Enter a number", "");

for(let i=1; i <= 10; i++) {
	console.log(`${number} x ${i} = ${number * i}` );
}

let num1 = +prompt("Enter the first number", "");
let num2 = +prompt("Enter the second number", "");
let sum = 0;

for(let i = num1; i <= num2; i++) {
	if (i%2 === 0) {
		sum += i;
	}
}
console.log(sum);