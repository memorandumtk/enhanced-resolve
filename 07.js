const arr = [];

for (let j = 0; j < 10; j++) {
	const test = new Set();
	for (let i = 0; i < 10; i++) {
		test.add(i, i);
	}
	arr.push(test);
}

console.log(arr);

const rem = arr[2];

console.log(rem);
rem.clear();

console.log(rem);
console.log(arr);
