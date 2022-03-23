//return type
function add2(n1: number, n2: number): number {
	return n1 + n2;
}

//return type void
function printResult2(num: number): void {
	console.log("Result: " + num);
}

printResult2(add2(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add2;

console.log(combineValues(8, 8));
