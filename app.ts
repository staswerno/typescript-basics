let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput
// switch unknown to any to remove error
// unknown more restrictive

if (typeof userInput === "string") {
	userName = userInput;
}

function generateError(message: string, code: number): never {
	throw {
		message: message,
		errorCode: code,
	};
}
// throw cancels script so actual type is 'never'

const result = generateError("Error! Error! Panic!", 500);
console.log(result);
