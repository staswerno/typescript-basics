//return type
function add2(n1: number, n2: number): number {
	return n1 + n2;
}

//return type void
function printResult2(num: number): void {
	console.log("Result: " + num);
}

//void return type here means, if you add a return, nothing will be returned
//but you won't get punished for it
//so, good to use void
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2;
	cb(result);
}

printResult2(add2(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add2;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
	console.log(result);
});
