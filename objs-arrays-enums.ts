// can do this but don't, let TS infer

// const person: {
//     name: string;
//     age: number;
// } = {
// 	name: "Stasi",
// 	age: 35,
// };

// do this

// const person = {
// 	name: "Stasi",
// 	age: 35,
// 	hobbies: ["yoga", "gaming"]
// };

// but, add schema if want to add tuple

// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: "Stasi",
// 	age: 35,
// 	hobbies: ["yoga", "gaming"],
// 	role: [2, "author"],
// };

// array of strings:
// string[];
// array of anything:
// any[];

// let favoriteActivities: string[];
// favoriteActivities = ["cuddling"];

// *enum*

// old scool way:

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// TS way - each below assigned a number.
// can also assign own numbers: enum Role { ADMIN = 5, READ_ONLY, AUTHOR };
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: "Stasi",
	age: 35,
	hobbies: ["yoga", "gaming"],
	role: Role.ADMIN,
};

console.log(person);
// errors on below as prperty doesn't exist
// console.log(person.nickname);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
// can use string method as knows must be a string
// would get error on console.log(hobby.map); as not an array

//enum log

if (person.role === Role.ADMIN) {
	console.log("is admin");
}
