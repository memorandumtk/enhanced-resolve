const fs = require("graceful-fs");

fs.lstat("./05.js", (err, result) => {
	console.log(result);
});
