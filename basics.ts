const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
	// The JS way of checking would be... TS avoids all this.
	// if (typeof n1 !== 'number' || typeof n2 !== 'number) {
	//    throw new error('Incorrect Input')
	//  }
	const result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return n1 + n2;
	}
	return n1 + n2;
};

const number1 = 6;
const number2 = 1.8;
const printResult = true;
const resultPhrase = "Result is: ";
// resultPhrase = 0;
// 'not assignable to type' error!

add(number1, number2, printResult, resultPhrase);
