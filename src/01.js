const er = require("../lib");
// er("./", "acorn", (err, result) => {
// 	// result; // === "/some/path/node_modules/module/dir/index.js"
// 	console.log("result\n", result);
// });

er("./", "acorn", (err, result) => {
	console.log("result\n", result);
});

// er.resolve.sync("/some/path/to/folder", "../../dir");
// // === "/some/path/dir/index.js"
//
// const myResolve = er.resolve.create({
// 	// or resolve.create.sync
// 	extensions: [".ts", ".js"]
// 	// see more options below
// });
//
// myResolve("/some/path/to/folder", "ts-module", (err, result) => {
// 	result; // === "/some/node_modules/ts-module/index.ts"
// });
