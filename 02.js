const ResolverFactory = require("./lib/ResolverFactory");
const CachedInputFileSystem = require("./lib/CachedInputFileSystem");
const fs = require("graceful-fs");
const context = __dirname;
const path = "acorn";

const nodeFileSystem = new CachedInputFileSystem(fs, 4000);

const nodeContext = {
	environments: ["node+es3+es5+process+native"]
};

const asyncResolver = ResolverFactory.createResolver({
	conditionNames: ["node"],
	extensions: [".js", ".json", ".node"],
	fileSystem: nodeFileSystem
});

const func = (context, path, request, resolveContext, callback) => {
	if (typeof context === "string") {
		callback = /** @type {ResolveCallback} */ (resolveContext);
		resolveContext = /** @type {ResolveContext} */ (request);
		request = path;
		path = context;
		context = nodeContext;
	}
	if (typeof callback !== "function") {
		callback = /** @type {ResolveCallback} */ (resolveContext);
	}
	asyncResolver.resolve(
		context,
		path,
		/** @type {string} */ (request),
		/** @type {ResolveContext} */ (resolveContext),
		/** @type {ResolveCallback} */ (callback)
	);
};

func(context, path, (err, result) => {
	console.log("result\n", result);
});
