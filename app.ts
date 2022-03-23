// union types
// sometimes needs runtime type check like below (if/else)
// ensures function can work with multiple values

type combinable = number | string;
type converter = "as-number" | "as-text";

const combine = (
	input1: combinable,
	input2: combinable,
	resultConversion: converter
) => {
	let result;
	if (
		(typeof input1 === "number" && typeof input2 === "number") ||
		resultConversion === "as-number"
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}
	// if (resultConversion === "as-number") {
	// 	return +result;
	// } else {
	// 	return result.toString();
	// }
	return result;
};

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Fred", "Astaire", "as-text");
console.log(combinedNames);
