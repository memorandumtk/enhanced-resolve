const resolve = require("./lib");
// const useChalk = async (logs) => {
// 	const { default: chalk } = await import("chalk");
//
// 	logs.map((l) => console.log(chalk.blue(l)));
// };

const folder = "./";
const myTarget = "graceful-fs";

console.log({ resolve });

resolve(folder, myTarget, (err, result) => {
	console.log("result .......");
	console.log(result);
});

// resolve.sync(folder, myTarget);
//
// const myResolve = resolve.create({
// 	extensions: [".ts", ".js"]
// });
//
// myResolve(folder, myTarget, (err, result) => {
// 	console.log("result 2\n", result);
// });
