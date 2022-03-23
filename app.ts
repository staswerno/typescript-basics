// can do this but don't, let TS infer

// const person: {
//     name: string;
//     age: number;
// } = {
// 	name: "Stasi",
// 	age: 35,
// };

// do this
// NOTE! only adding schema because need to add tuple! normally don't!

const person: {
	name: string;
	age: number;
	hobbies: string[];
	role: [number, string];
} = {
	name: "Stasi",
	age: 35,
	hobbies: ["yoga", "gaming"],
	role: [2, "author"],
};

// array of strings:
// string[];
// array of anything:
// any[];

let favoriteActivities: string[];
favoriteActivities = ["cuddling"];

console.log(person);
// errors on below as prperty doesn't exist
// console.log(person.nickname);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
// can use string method as knows must be a string
// would get error on console.log(hobby.map); as not an array
