const fs = require("fs");
const { CachedInputFileSystem, ResolverFactory } = require("./lib");

// create a resolver
const myResolver = ResolverFactory.createResolver({
	fileSystem: new CachedInputFileSystem(fs, 0),
	extensions: [".js", ".json"]
});

// resolve a file with the new resolver
const context = {};
const lookupStartPath = "./";
const request = "acorn";
const resolveContext = {};
myResolver.resolve(
	context,
	lookupStartPath,
	request,
	resolveContext,
	(err /*Error*/, filepath /*string*/) => {
		console.log(`result: ${filepath}`);
		console.log(`err: ${err}`);
	}
);
