/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */

import { Buffer } from "buffer";
import { URL as URL_Import } from "url";

declare interface Abortable {
	/**
	 * When provided the corresponding `AbortController` can be used to cancel an asynchronous action.
	 */
	signal?: AbortSignal;
}
type Alias = string | false | string[];
declare interface AliasOption {
	alias: Alias;
	name: string;
	onlyModule?: boolean;
}
type AliasOptionNewRequest = string | false | string[];
declare interface AliasOptions {
	[index: string]: AliasOptionNewRequest;
}
declare interface Append<T extends any[], U> {
	[index: number]: U | {};

	/**
	 * Returns a string representation of an array.
	 */
	toString: () => string;

	/**
	 * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
	 */
	toLocaleString: toLocaleString;

	/**
	 * Removes the last element from an array and returns it.
	 * If the array is empty, undefined is returned and the array is not modified.
	 */
	pop: (() => undefined | U) | (() => undefined | U | {});

	/**
	 * Appends new elements to the end of an array, and returns the new length of the array.
	 */
	push: ((...items: U[]) => number) | ((...items: (U | {})[]) => number);

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	concat:
		| concatEs5Method_11
		| concatEs5Method_1
		| concatEs5Method_2
		| concatEs5Method_3
		| concatEs5Method_4
		| concatEs5Method_5
		| concatEs5Method_6
		| concatEs5Method_7
		| concatEs5Method_8;

	/**
	 * Adds all the elements of an array into a string, separated by the specified separator string.
	 */
	join: (separator?: string) => string;

	/**
	 * Reverses the elements in an array in place.
	 * This method mutates the array and returns a reference to the same array.
	 */
	reverse: (() => U[]) | (() => (U | {})[]);

	/**
	 * Removes the first element from an array and returns it.
	 * If the array is empty, undefined is returned and the array is not modified.
	 */
	shift: (() => undefined | U) | (() => undefined | U | {});

	/**
	 * Returns a copy of a section of an array.
	 * For both start and end, a negative index can be used to indicate an offset from the end of the array.
	 * For example, -2 refers to the second to last element of the array.
	 */
	slice:
		| ((start?: number, end?: number) => U[])
		| ((start?: number, end?: number) => (U | {})[]);

	/**
	 * Sorts an array in place.
	 * This method mutates the array and returns a reference to the same array.
	 */
	sort:
		| ((compareFn?: (a: U, b: U) => number) => [U])
		| ((compareFn?: (a: U | {}, b: U | {}) => number) => [{}, {}, U])
		| ((compareFn?: (a: U | {}, b: U | {}) => number) => [{}, U])
		| ((compareFn?: (a: U | {}, b: U | {}) => number) => [{}, {}, {}, U])
		| ((compareFn?: (a: U | {}, b: U | {}) => number) => [{}, {}, {}, {}, U])
		| ((
				compareFn?: (a: U | {}, b: U | {}) => number
		  ) => [{}, {}, {}, {}, {}, U])
		| ((
				compareFn?: (a: U | {}, b: U | {}) => number
		  ) => [{}, {}, {}, {}, {}, {}, U])
		| ((
				compareFn?: (a: U | {}, b: U | {}) => number
		  ) => [{}, {}, {}, {}, {}, {}, {}, U])
		| ((
				compareFn?: (a: U | {}, b: U | {}) => number
		  ) => [{}, {}, {}, {}, {}, {}, {}, {}, U]);

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	splice:
		| spliceEs5Method_11
		| spliceEs5Method_1
		| spliceEs5Method_2
		| spliceEs5Method_3
		| spliceEs5Method_4
		| spliceEs5Method_5
		| spliceEs5Method_6
		| spliceEs5Method_7
		| spliceEs5Method_8;

	/**
	 * Inserts new elements at the start of an array, and returns the new length of the array.
	 */
	unshift: ((...items: U[]) => number) | ((...items: (U | {})[]) => number);

	/**
	 * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
	 */
	indexOf:
		| ((searchElement: U, fromIndex?: number) => number)
		| ((searchElement: U | {}, fromIndex?: number) => number);

	/**
	 * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
	 */
	lastIndexOf:
		| ((searchElement: U, fromIndex?: number) => number)
		| ((searchElement: U | {}, fromIndex?: number) => number);

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	every:
		| everyEs5Method_11
		| everyEs5Method_1
		| everyEs5Method_2
		| everyEs5Method_3
		| everyEs5Method_4
		| everyEs5Method_5
		| everyEs5Method_6
		| everyEs5Method_7
		| everyEs5Method_8;

	/**
	 * Determines whether the specified callback function returns true for any element of an array.
	 */
	some:
		| ((
				predicate: (value: U, index: number, array: U[]) => unknown,
				thisArg?: any
		  ) => boolean)
		| ((
				predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
				thisArg?: any
		  ) => boolean);

	/**
	 * Performs the specified action for each element in an array.
	 */
	forEach:
		| ((
				callbackfn: (value: U, index: number, array: U[]) => void,
				thisArg?: any
		  ) => void)
		| ((
				callbackfn: (value: U | {}, index: number, array: (U | {})[]) => void,
				thisArg?: any
		  ) => void);

	/**
	 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
	 */
	map:
		| (<U>(
				callbackfn: (value: U, index: number, array: U[]) => U,
				thisArg?: any
		  ) => U[])
		| (<U>(
				callbackfn: (value: U | {}, index: number, array: (U | {})[]) => U,
				thisArg?: any
		  ) => U[]);

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	filter:
		| filterEs5Method_11
		| filterEs5Method_1
		| filterEs5Method_2
		| filterEs5Method_3
		| filterEs5Method_4
		| filterEs5Method_5
		| filterEs5Method_6
		| filterEs5Method_7
		| filterEs5Method_8;

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	reduce:
		| reduceEs5Method_11
		| reduceEs5Method_1
		| reduceEs5Method_2
		| reduceEs5Method_3
		| reduceEs5Method_4
		| reduceEs5Method_5
		| reduceEs5Method_6
		| reduceEs5Method_7
		| reduceEs5Method_8;

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	reduceRight:
		| reduceRightEs5Method_11
		| reduceRightEs5Method_1
		| reduceRightEs5Method_2
		| reduceRightEs5Method_3
		| reduceRightEs5Method_4
		| reduceRightEs5Method_5
		| reduceRightEs5Method_6
		| reduceRightEs5Method_7
		| reduceRightEs5Method_8;

	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	find:
		| findEs2015CoreMethod_11
		| findEs2015CoreMethod_1
		| findEs2015CoreMethod_2
		| findEs2015CoreMethod_3
		| findEs2015CoreMethod_4
		| findEs2015CoreMethod_5
		| findEs2015CoreMethod_6
		| findEs2015CoreMethod_7
		| findEs2015CoreMethod_8;

	/**
	 * Returns the index of the first element in the array where predicate is true, and -1
	 * otherwise.
	 */
	findIndex:
		| ((
				predicate: (value: U, index: number, obj: U[]) => unknown,
				thisArg?: any
		  ) => number)
		| ((
				predicate: (value: U | {}, index: number, obj: (U | {})[]) => unknown,
				thisArg?: any
		  ) => number);

	/**
	 * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
	 */
	fill:
		| ((value: U, start?: number, end?: number) => [U])
		| ((value: U | {}, start?: number, end?: number) => [{}, {}, U])
		| ((value: U | {}, start?: number, end?: number) => [{}, U])
		| ((value: U | {}, start?: number, end?: number) => [{}, {}, {}, U])
		| ((value: U | {}, start?: number, end?: number) => [{}, {}, {}, {}, U])
		| ((value: U | {}, start?: number, end?: number) => [{}, {}, {}, {}, {}, U])
		| ((
				value: U | {},
				start?: number,
				end?: number
		  ) => [{}, {}, {}, {}, {}, {}, U])
		| ((
				value: U | {},
				start?: number,
				end?: number
		  ) => [{}, {}, {}, {}, {}, {}, {}, U])
		| ((
				value: U | {},
				start?: number,
				end?: number
		  ) => [{}, {}, {}, {}, {}, {}, {}, {}, U]);

	/**
	 * Returns the this object after copying a section of the array identified by start and end
	 * to the same array starting at position target
	 */
	copyWithin:
		| ((target: number, start: number, end?: number) => [U])
		| ((target: number, start: number, end?: number) => [{}, {}, U])
		| ((target: number, start: number, end?: number) => [{}, U])
		| ((target: number, start: number, end?: number) => [{}, {}, {}, U])
		| ((target: number, start: number, end?: number) => [{}, {}, {}, {}, U])
		| ((target: number, start: number, end?: number) => [{}, {}, {}, {}, {}, U])
		| ((
				target: number,
				start: number,
				end?: number
		  ) => [{}, {}, {}, {}, {}, {}, U])
		| ((
				target: number,
				start: number,
				end?: number
		  ) => [{}, {}, {}, {}, {}, {}, {}, U])
		| ((
				target: number,
				start: number,
				end?: number
		  ) => [{}, {}, {}, {}, {}, {}, {}, {}, U]);

	/**
	 * Returns an iterable of key, value pairs for every entry in the array
	 */
	entries:
		| (() => ArrayIterator<[number, U]>)
		| (() => ArrayIterator<[number, U | {}]>);

	/**
	 * Returns an iterable of keys in the array
	 */
	keys: () => ArrayIterator<number>;

	/**
	 * Returns an iterable of values in the array
	 */
	values: (() => ArrayIterator<U>) | (() => ArrayIterator<U | {}>);

	/**
	 * Determines whether an array includes a certain element, returning true or false as appropriate.
	 */
	includes:
		| ((searchElement: U, fromIndex?: number) => boolean)
		| ((searchElement: U | {}, fromIndex?: number) => boolean);

	/**
	 * Calls a defined callback function on each element of an array. Then, flattens the result into
	 * a new array.
	 * This is identical to a map followed by flat with depth 1.
	 */
	flatMap:
		| (<U, This = undefined>(
				callback: (
					this: This,
					value: U,
					index: number,
					array: U[]
				) => U | ReadonlyArray<U>,
				thisArg?: This
		  ) => U[])
		| (<U, This = undefined>(
				callback: (
					this: This,
					value: U | {},
					index: number,
					array: (U | {})[]
				) => U | ReadonlyArray<U>,
				thisArg?: This
		  ) => U[]);

	/**
	 * Returns a new array with all sub-array elements concatenated into it recursively up to the
	 * specified depth.
	 */
	flat: <A, D extends number = 1>(this: A, depth?: D) => FlatArray<A, D>[];

	/**
	 * Takes an integer value and returns the item at that index,
	 * allowing for positive and negative integers.
	 * Negative integers count back from the last item in the array.
	 */
	at:
		| ((index: number) => undefined | U)
		| ((index: number) => undefined | U | {});
}
declare interface AsArray<T> {
	[index: number]: any;

	/**
	 * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
	 */
	length: number;

	/**
	 * Returns a string representation of an array.
	 */
	toString: () => string;

	/**
	 * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
	 */
	toLocaleString: toLocaleString;

	/**
	 * Removes the last element from an array and returns it.
	 * If the array is empty, undefined is returned and the array is not modified.
	 */
	pop: (() => any) | (() => undefined | T);

	/**
	 * Appends new elements to the end of an array, and returns the new length of the array.
	 */
	push: ((...items: any[]) => number) | ((...items: T[]) => number);

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	concat: concatEs5Method_9 | concatEs5Method_10;

	/**
	 * Adds all the elements of an array into a string, separated by the specified separator string.
	 */
	join: (separator?: string) => string;

	/**
	 * Reverses the elements in an array in place.
	 * This method mutates the array and returns a reference to the same array.
	 */
	reverse: (() => any[]) | (() => T[]);

	/**
	 * Removes the first element from an array and returns it.
	 * If the array is empty, undefined is returned and the array is not modified.
	 */
	shift: (() => any) | (() => undefined | T);

	/**
	 * Returns a copy of a section of an array.
	 * For both start and end, a negative index can be used to indicate an offset from the end of the array.
	 * For example, -2 refers to the second to last element of the array.
	 */
	slice:
		| ((start?: number, end?: number) => any[])
		| ((start?: number, end?: number) => T[]);

	/**
	 * Sorts an array in place.
	 * This method mutates the array and returns a reference to the same array.
	 */
	sort:
		| ((compareFn?: (a?: any, b?: any) => number) => any[])
		| ((compareFn?: (a: T, b: T) => number) => [T]);

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	splice: spliceEs5Method_9 | spliceEs5Method_10;

	/**
	 * Inserts new elements at the start of an array, and returns the new length of the array.
	 */
	unshift: ((...items: any[]) => number) | ((...items: T[]) => number);

	/**
	 * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
	 */
	indexOf:
		| ((searchElement?: any, fromIndex?: number) => number)
		| ((searchElement: T, fromIndex?: number) => number);

	/**
	 * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
	 */
	lastIndexOf:
		| ((searchElement?: any, fromIndex?: number) => number)
		| ((searchElement: T, fromIndex?: number) => number);

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	every: everyEs5Method_9 | everyEs5Method_10;

	/**
	 * Determines whether the specified callback function returns true for any element of an array.
	 */
	some:
		| ((
				predicate: (value: any, index: number, array: any[]) => unknown,
				thisArg?: any
		  ) => boolean)
		| ((
				predicate: (value: T, index: number, array: T[]) => unknown,
				thisArg?: any
		  ) => boolean);

	/**
	 * Performs the specified action for each element in an array.
	 */
	forEach:
		| ((
				callbackfn: (value: any, index: number, array: any[]) => void,
				thisArg?: any
		  ) => void)
		| ((
				callbackfn: (value: T, index: number, array: T[]) => void,
				thisArg?: any
		  ) => void);

	/**
	 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
	 */
	map:
		| (<U>(
				callbackfn: (value: any, index: number, array: any[]) => U,
				thisArg?: any
		  ) => U[])
		| (<U>(
				callbackfn: (value: T, index: number, array: T[]) => U,
				thisArg?: any
		  ) => U[]);

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	filter: filterEs5Method_9 | filterEs5Method_10;

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	reduce: reduceEs5Method_9 | reduceEs5Method_10;

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	reduceRight: reduceRightEs5Method_9 | reduceRightEs5Method_10;

	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	find: findEs2015CoreMethod_9 | findEs2015CoreMethod_10;

	/**
	 * Returns the index of the first element in the array where predicate is true, and -1
	 * otherwise.
	 */
	findIndex:
		| ((
				predicate: (value: any, index: number, obj: any[]) => unknown,
				thisArg?: any
		  ) => number)
		| ((
				predicate: (value: T, index: number, obj: T[]) => unknown,
				thisArg?: any
		  ) => number);

	/**
	 * Changes all array elements from `start` to `end` index to a static `value` and returns the modified array
	 */
	fill:
		| ((value?: any, start?: number, end?: number) => any[])
		| ((value: T, start?: number, end?: number) => [T]);

	/**
	 * Returns the this object after copying a section of the array identified by start and end
	 * to the same array starting at position target
	 */
	copyWithin:
		| ((target: number, start: number, end?: number) => any[])
		| ((target: number, start: number, end?: number) => [T]);

	/**
	 * Returns an iterable of key, value pairs for every entry in the array
	 */
	entries:
		| (() => ArrayIterator<[number, any]>)
		| (() => ArrayIterator<[number, T]>);

	/**
	 * Returns an iterable of keys in the array
	 */
	keys: () => ArrayIterator<number>;

	/**
	 * Returns an iterable of values in the array
	 */
	values: (() => ArrayIterator<any>) | (() => ArrayIterator<T>);

	/**
	 * Determines whether an array includes a certain element, returning true or false as appropriate.
	 */
	includes:
		| ((searchElement?: any, fromIndex?: number) => boolean)
		| ((searchElement: T, fromIndex?: number) => boolean);

	/**
	 * Calls a defined callback function on each element of an array. Then, flattens the result into
	 * a new array.
	 * This is identical to a map followed by flat with depth 1.
	 */
	flatMap:
		| (<U, This = undefined>(
				callback: (
					this: This,
					value: any,
					index: number,
					array: any[]
				) => U | ReadonlyArray<U>,
				thisArg?: This
		  ) => U[])
		| (<U, This = undefined>(
				callback: (
					this: This,
					value: T,
					index: number,
					array: T[]
				) => U | ReadonlyArray<U>,
				thisArg?: This
		  ) => U[]);

	/**
	 * Returns a new array with all sub-array elements concatenated into it recursively up to the
	 * specified depth.
	 */
	flat: <A, D extends number = 1>(this: A, depth?: D) => FlatArray<A, D>[];

	/**
	 * Takes an integer value and returns the item at that index,
	 * allowing for positive and negative integers.
	 * Negative integers count back from the last item in the array.
	 */
	at: ((index: number) => any) | ((index: number) => undefined | T);
}
declare abstract class AsyncHook<
	T,
	R,
	AdditionalOptions = UnsetAdditionalOptions
> extends Hook<T, R, AdditionalOptions> {
	tapAsync(
		options:
			| string
			| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
		fn: (...args: Append<AsArray<T>, InnerCallback<Error, R>>) => void
	): void;
	tapPromise(
		options:
			| string
			| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
		fn: (...args: AsArray<T>) => Promise<R>
	): void;
}
declare abstract class AsyncSeriesBailHook<
	T,
	R,
	AdditionalOptions = UnsetAdditionalOptions
> extends AsyncHook<T, R, AdditionalOptions> {}
declare abstract class AsyncSeriesHook<
	T,
	AdditionalOptions = UnsetAdditionalOptions
> extends AsyncHook<T, void, AdditionalOptions> {}
type BaseFileSystem = FileSystem & SyncFileSystem;
declare interface BaseResolveRequest {
	path: string | false;
	context?: object;
	descriptionFilePath?: string;
	descriptionFileRoot?: string;
	descriptionFileData?: JsonObject;
	relativePath?: string;
	ignoreSymlinks?: boolean;
	fullySpecified?: boolean;
	__innerRequest?: string;
	__innerRequest_request?: string;
	__innerRequest_relativePath?: string;
}
type BufferEncoding =
	| "ascii"
	| "utf8"
	| "utf-8"
	| "utf16le"
	| "utf-16le"
	| "ucs2"
	| "ucs-2"
	| "base64"
	| "base64url"
	| "latin1"
	| "binary"
	| "hex";
type BufferEncodingOption = "buffer" | { encoding: "buffer" };
declare class CachedInputFileSystem {
	constructor(fileSystem: BaseFileSystem, duration: number);
	fileSystem: BaseFileSystem;
	lstat?: LStat;
	lstatSync?: LStatSync;
	stat: Stat;
	statSync: StatSync;
	readdir: Readdir;
	readdirSync: ReaddirSync;
	readFile: ReadFile;
	readFileSync: ReadFileSync;
	readJson?: (
		arg0: PathOrFileDescriptor,
		arg1: (
			arg0: null | Error | NodeJS.ErrnoException,
			arg1?: JsonObject
		) => void
	) => void;
	readJsonSync?: (arg0: PathOrFileDescriptor) => JsonObject;
	readlink: Readlink;
	readlinkSync: ReadlinkSync;
	realpath?: RealPath;
	realpathSync?: RealPathSync;
	purge(
		what?:
			| string
			| number
			| Buffer
			| URL_url
			| (string | number | Buffer | URL_url)[]
			| Set<string | number | Buffer | URL_url>
	): void;
}
declare interface Callback<E, T> {
	(error: null | E, result?: T): void;
}
declare class CloneBasenamePlugin {
	constructor(
		source:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >,
		target:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >
	);
	source:
		| string
		| AsyncSeriesBailHook<
				[ResolveRequest, ResolveContext],
				null | ResolveRequest
		  >;
	target:
		| string
		| AsyncSeriesBailHook<
				[ResolveRequest, ResolveContext],
				null | ResolveRequest
		  >;
	apply(resolver: Resolver): void;
}
declare interface Dirent {
	isFile: () => boolean;
	isDirectory: () => boolean;
	isBlockDevice: () => boolean;
	isCharacterDevice: () => boolean;
	isSymbolicLink: () => boolean;
	isFIFO: () => boolean;
	isSocket: () => boolean;
	name: string;
	path: string;
}
type EncodingOption =
	| undefined
	| null
	| "ascii"
	| "utf8"
	| "utf-8"
	| "utf16le"
	| "utf-16le"
	| "ucs2"
	| "ucs-2"
	| "base64"
	| "base64url"
	| "latin1"
	| "binary"
	| "hex"
	| ObjectEncodingOptions;
type ErrorWithDetail = Error & { details?: string };
declare interface ExtensionAliasOption {
	alias: string | string[];
	extension: string;
}
declare interface ExtensionAliasOptions {
	[index: string]: string | string[];
}
declare interface FileSystem {
	readFile: ReadFile;
	readdir: Readdir;
	readJson?: (
		arg0: PathOrFileDescriptor,
		arg1: (
			arg0: null | Error | NodeJS.ErrnoException,
			arg1?: JsonObject
		) => void
	) => void;
	readlink: Readlink;
	lstat?: LStat;
	stat: Stat;
	realpath?: RealPath;
}
type FullTap = TapOptions & { name: string } & {
	type: "promise" | "sync" | "async";
	fn: Function;
};
declare abstract class Hook<T, R, AdditionalOptions = UnsetAdditionalOptions> {
	name?: string;
	taps: FullTap[];
	intercept(interceptor: HookInterceptor<T, R, AdditionalOptions>): void;
	isUsed(): boolean;
	callAsync(...args: Append<AsArray<T>, Callback<Error, R>>): void;
	promise(...args: AsArray<T>): Promise<R>;
	tap(
		options:
			| string
			| (TapOptions & { name: string } & IfSet<AdditionalOptions>),
		fn: (...args: AsArray<T>) => R
	): void;
	withOptions(
		options: TapOptions & IfSet<AdditionalOptions>
	): Omit<Hook<T, R, AdditionalOptions>, "call" | "callAsync" | "promise">;
}
declare interface HookInterceptor<
	T,
	R,
	AdditionalOptions = UnsetAdditionalOptions
> {
	name?: string;
	tap?: (
		tap: TapOptions & { name: string } & {
			type: "promise" | "sync" | "async";
			fn: Function;
		} & IfSet<AdditionalOptions>
	) => void;
	call?: (...args: any[]) => void;
	loop?: (...args: any[]) => void;
	error?: (err: Error) => void;
	result?: (result: R) => void;
	done?: () => void;
	register?: (
		tap: TapOptions & { name: string } & {
			type: "promise" | "sync" | "async";
			fn: Function;
		} & IfSet<AdditionalOptions>
	) => TapOptions & { name: string } & {
		type: "promise" | "sync" | "async";
		fn: Function;
	} & IfSet<AdditionalOptions>;
}
type IBigIntStats = IStatsBase<bigint> & {
	atimeNs: bigint;
	mtimeNs: bigint;
	ctimeNs: bigint;
	birthtimeNs: bigint;
};
declare interface IStats {
	isFile: () => boolean;
	isDirectory: () => boolean;
	isBlockDevice: () => boolean;
	isCharacterDevice: () => boolean;
	isSymbolicLink: () => boolean;
	isFIFO: () => boolean;
	isSocket: () => boolean;
	dev: number;
	ino: number;
	mode: number;
	nlink: number;
	uid: number;
	gid: number;
	rdev: number;
	size: number;
	blksize: number;
	blocks: number;
	atimeMs: number;
	mtimeMs: number;
	ctimeMs: number;
	birthtimeMs: number;
	atime: Date;
	mtime: Date;
	ctime: Date;
	birthtime: Date;
}
declare interface IStatsBase<T> {
	isFile: () => boolean;
	isDirectory: () => boolean;
	isBlockDevice: () => boolean;
	isCharacterDevice: () => boolean;
	isSymbolicLink: () => boolean;
	isFIFO: () => boolean;
	isSocket: () => boolean;
	dev: T;
	ino: T;
	mode: T;
	nlink: T;
	uid: T;
	gid: T;
	rdev: T;
	size: T;
	blksize: T;
	blocks: T;
	atimeMs: T;
	mtimeMs: T;
	ctimeMs: T;
	birthtimeMs: T;
	atime: Date;
	mtime: Date;
	ctime: Date;
	birthtime: Date;
}
declare interface IfSet<X> {}
declare interface InnerCallback<E, T> {
	(error?: null | false | E, result?: T): void;
}
declare interface Iterator<T, Z> {
	(
		item: T,
		callback: (err?: null | Error, result?: null | Z) => void,
		i: number
	): void;
}
type JsonObject = { [index: string]: JsonValue } & {
	[index: string]:
		| undefined
		| null
		| string
		| number
		| boolean
		| JsonObject
		| JsonValue[];
};
type JsonValue = null | string | number | boolean | JsonObject | JsonValue[];
declare interface KnownHooks {
	resolveStep: SyncHook<
		[
			AsyncSeriesBailHook<
				[ResolveRequest, ResolveContext],
				null | ResolveRequest
			>,
			ResolveRequest
		]
	>;
	noResolve: SyncHook<[ResolveRequest, Error]>;
	resolve: AsyncSeriesBailHook<
		[ResolveRequest, ResolveContext],
		null | ResolveRequest
	>;
	result: AsyncSeriesHook<[ResolveRequest, ResolveContext]>;
}
declare interface LStat {
	(
		path: PathLike,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: IStats) => void
	): void;
	(
		path: PathLike,
		options: undefined | (StatOptions & { bigint?: false }),
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: IStats) => void
	): void;
	(
		path: PathLike,
		options: StatOptions & { bigint: true },
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: IBigIntStats) => void
	): void;
	(
		path: PathLike,
		options: undefined | StatOptions,
		callback: (
			arg0: null | NodeJS.ErrnoException,
			arg1?: IStats | IBigIntStats
		) => void
	): void;
}
declare interface LStatSync {
	(path: PathLike, options?: undefined): IStats;
	(
		path: PathLike,
		options?: StatSyncOptions & { bigint?: false; throwIfNoEntry: false }
	): undefined | IStats;
	(
		path: PathLike,
		options: StatSyncOptions & { bigint: true; throwIfNoEntry: false }
	): undefined | IBigIntStats;
	(path: PathLike, options?: StatSyncOptions & { bigint?: false }): IStats;
	(path: PathLike, options: StatSyncOptions & { bigint: true }): IBigIntStats;
	(
		path: PathLike,
		options: StatSyncOptions & { bigint: boolean; throwIfNoEntry?: false }
	): IStats | IBigIntStats;
	(path: PathLike, options?: StatSyncOptions):
		| undefined
		| IStats
		| IBigIntStats;
}
declare class LogInfoPlugin {
	constructor(
		source:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >
	);
	source:
		| string
		| AsyncSeriesBailHook<
				[ResolveRequest, ResolveContext],
				null | ResolveRequest
		  >;
	apply(resolver: Resolver): void;
}
declare interface ObjectEncodingOptions {
	encoding?:
		| null
		| "ascii"
		| "utf8"
		| "utf-8"
		| "utf16le"
		| "utf-16le"
		| "ucs2"
		| "ucs-2"
		| "base64"
		| "base64url"
		| "latin1"
		| "binary"
		| "hex";
}
declare interface ParsedIdentifier {
	request: string;
	query: string;
	fragment: string;
	directory: boolean;
	module: boolean;
	file: boolean;
	internal: boolean;
}
type PathLike = string | Buffer | URL_url;
type PathOrFileDescriptor = string | number | Buffer | URL_url;
type Plugin =
	| undefined
	| null
	| false
	| ""
	| 0
	| { apply: (arg0: Resolver) => void }
	| ((this: Resolver, arg1: Resolver) => void);
declare interface PnpApi {
	resolveToUnqualified: (
		arg0: string,
		arg1: string,
		arg2: object
	) => null | string;
}
declare interface ReadFile {
	(
		path: PathOrFileDescriptor,
		options:
			| undefined
			| null
			| ({ encoding?: null; flag?: string } & Abortable),
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: Buffer) => void
	): void;
	(
		path: PathOrFileDescriptor,
		options:
			| ({ encoding: BufferEncoding; flag?: string } & Abortable)
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex",
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: string) => void
	): void;
	(
		path: PathOrFileDescriptor,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptions & { flag?: string } & Abortable),
		callback: (
			arg0: null | NodeJS.ErrnoException,
			arg1?: string | Buffer
		) => void
	): void;
	(
		path: PathOrFileDescriptor,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: Buffer) => void
	): void;
}
declare interface ReadFileSync {
	(
		path: PathOrFileDescriptor,
		options?: null | { encoding?: null; flag?: string }
	): Buffer;
	(
		path: PathOrFileDescriptor,
		options:
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| { encoding: BufferEncoding; flag?: string }
	): string;
	(
		path: PathOrFileDescriptor,
		options?:
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptions & { flag?: string })
	): string | Buffer;
}
declare interface Readdir {
	(
		path: PathLike,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| {
					encoding:
						| null
						| "ascii"
						| "utf8"
						| "utf-8"
						| "utf16le"
						| "utf-16le"
						| "ucs2"
						| "ucs-2"
						| "base64"
						| "base64url"
						| "latin1"
						| "binary"
						| "hex";
					withFileTypes?: false;
					recursive?: boolean;
			  },
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: string[]) => void
	): void;
	(
		path: PathLike,
		options:
			| { encoding: "buffer"; withFileTypes?: false; recursive?: boolean }
			| "buffer",
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: Buffer[]) => void
	): void;
	(
		path: PathLike,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: string[]) => void
	): void;
	(
		path: PathLike,
		options:
			| undefined
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptions & {
					withFileTypes?: false;
					recursive?: boolean;
			  }),
		callback: (
			arg0: null | NodeJS.ErrnoException,
			arg1?: string[] | Buffer[]
		) => void
	): void;
	(
		path: PathLike,
		options: ObjectEncodingOptions & {
			withFileTypes: true;
			recursive?: boolean;
		},
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: Dirent[]) => void
	): void;
}
declare interface ReaddirSync {
	(
		path: PathLike,
		options?:
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| {
					encoding:
						| null
						| "ascii"
						| "utf8"
						| "utf-8"
						| "utf16le"
						| "utf-16le"
						| "ucs2"
						| "ucs-2"
						| "base64"
						| "base64url"
						| "latin1"
						| "binary"
						| "hex";
					withFileTypes?: false;
					recursive?: boolean;
			  }
	): string[];
	(
		path: PathLike,
		options:
			| "buffer"
			| { encoding: "buffer"; withFileTypes?: false; recursive?: boolean }
	): Buffer[];
	(
		path: PathLike,
		options?:
			| null
			| "ascii"
			| "utf8"
			| "utf-8"
			| "utf16le"
			| "utf-16le"
			| "ucs2"
			| "ucs-2"
			| "base64"
			| "base64url"
			| "latin1"
			| "binary"
			| "hex"
			| (ObjectEncodingOptions & { withFileTypes?: false; recursive?: boolean })
	): string[] | Buffer[];
	(
		path: PathLike,
		options: ObjectEncodingOptions & {
			withFileTypes: true;
			recursive?: boolean;
		}
	): Dirent[];
}
declare interface Readlink {
	(
		path: PathLike,
		options: EncodingOption,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: string) => void
	): void;
	(
		path: PathLike,
		options: BufferEncodingOption,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: Buffer) => void
	): void;
	(
		path: PathLike,
		options: EncodingOption,
		callback: (
			arg0: null | NodeJS.ErrnoException,
			arg1?: string | Buffer
		) => void
	): void;
	(
		path: PathLike,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: string) => void
	): void;
}
declare interface ReadlinkSync {
	(path: PathLike, options?: EncodingOption): string;
	(path: PathLike, options: BufferEncodingOption): Buffer;
	(path: PathLike, options?: EncodingOption): string | Buffer;
}
declare interface RealPath {
	(
		path: PathLike,
		options: EncodingOption,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: string) => void
	): void;
	(
		path: PathLike,
		options: BufferEncodingOption,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: Buffer) => void
	): void;
	(
		path: PathLike,
		options: EncodingOption,
		callback: (
			arg0: null | NodeJS.ErrnoException,
			arg1?: string | Buffer
		) => void
	): void;
	(
		path: PathLike,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: string) => void
	): void;
}
declare interface RealPathSync {
	(path: PathLike, options?: EncodingOption): string;
	(path: PathLike, options: BufferEncodingOption): Buffer;
	(path: PathLike, options?: EncodingOption): string | Buffer;
}
declare interface ResolveContext {
	contextDependencies?: WriteOnlySet<string>;

	/**
	 * files that was found on file system
	 */
	fileDependencies?: WriteOnlySet<string>;

	/**
	 * dependencies that was not found on file system
	 */
	missingDependencies?: WriteOnlySet<string>;

	/**
	 * set of hooks' calls. For instance, `resolve → parsedResolve → describedResolve`,
	 */
	stack?: Set<string>;

	/**
	 * log function
	 */
	log?: (arg0: string) => void;

	/**
	 * yield result, if provided plugins can return several results
	 */
	yield?: (arg0: ResolveRequest) => void;
}
declare interface ResolveFunction {
	(context: object, path: string, request: string): string | false;
	(path: string, request: string): string | false;
}
declare interface ResolveFunctionAsync {
	(
		context: object,
		path: string,
		request: string,
		resolveContext: ResolveContext,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest
		) => void
	): void;
	(
		context: object,
		path: string,
		request: string,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest
		) => void
	): void;
	(
		path: string,
		request: string,
		resolveContext: ResolveContext,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest
		) => void
	): void;
	(
		path: string,
		request: string,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest
		) => void
	): void;
}
type ResolveOptionsOptionalFS = Omit<
	ResolveOptionsResolverFactoryObject_2,
	"fileSystem"
> &
	Partial<Pick<ResolveOptionsResolverFactoryObject_2, "fileSystem">>;
declare interface ResolveOptionsResolverFactoryObject_1 {
	alias: AliasOption[];
	fallback: AliasOption[];
	aliasFields: Set<string | string[]>;
	extensionAlias: ExtensionAliasOption[];
	cachePredicate: (arg0: ResolveRequest) => boolean;
	cacheWithContext: boolean;

	/**
	 * A list of exports field condition names.
	 */
	conditionNames: Set<string>;
	descriptionFiles: string[];
	enforceExtension: boolean;
	exportsFields: Set<string | string[]>;
	importsFields: Set<string | string[]>;
	extensions: Set<string>;
	fileSystem: FileSystem;
	unsafeCache: false | object;
	symlinks: boolean;
	resolver?: Resolver;
	modules: (string | string[])[];
	mainFields: { name: string[]; forceRelative: boolean }[];
	mainFiles: Set<string>;
	plugins: Plugin[];
	pnpApi: null | PnpApi;
	roots: Set<string>;
	fullySpecified: boolean;
	resolveToContext: boolean;
	restrictions: Set<string | RegExp>;
	preferRelative: boolean;
	preferAbsolute: boolean;
}
declare interface ResolveOptionsResolverFactoryObject_2 {
	/**
	 * A list of module alias configurations or an object which maps key to value
	 */
	alias?: AliasOptions | AliasOption[];

	/**
	 * A list of module alias configurations or an object which maps key to value, applied only after modules option
	 */
	fallback?: AliasOptions | AliasOption[];

	/**
	 * An object which maps extension to extension aliases
	 */
	extensionAlias?: ExtensionAliasOptions;

	/**
	 * A list of alias fields in description files
	 */
	aliasFields?: (string | string[])[];

	/**
	 * A function which decides whether a request should be cached or not. An object is passed with at least `path` and `request` properties.
	 */
	cachePredicate?: (arg0: ResolveRequest) => boolean;

	/**
	 * Whether or not the unsafeCache should include request context as part of the cache key.
	 */
	cacheWithContext?: boolean;

	/**
	 * A list of description files to read from
	 */
	descriptionFiles?: string[];

	/**
	 * A list of exports field condition names.
	 */
	conditionNames?: string[];

	/**
	 * Enforce that a extension from extensions must be used
	 */
	enforceExtension?: boolean;

	/**
	 * A list of exports fields in description files
	 */
	exportsFields?: (string | string[])[];

	/**
	 * A list of imports fields in description files
	 */
	importsFields?: (string | string[])[];

	/**
	 * A list of extensions which should be tried for files
	 */
	extensions?: string[];

	/**
	 * The file system which should be used
	 */
	fileSystem: FileSystem;

	/**
	 * Use this cache object to unsafely cache the successful requests
	 */
	unsafeCache?: boolean | object;

	/**
	 * Resolve symlinks to their symlinked location
	 */
	symlinks?: boolean;

	/**
	 * A prepared Resolver to which the plugins are attached
	 */
	resolver?: Resolver;

	/**
	 * A list of directories to resolve modules from, can be absolute path or folder name
	 */
	modules?: string | string[];

	/**
	 * A list of main fields in description files
	 */
	mainFields?: (
		| string
		| string[]
		| { name: string | string[]; forceRelative: boolean }
	)[];

	/**
	 * A list of main files in directories
	 */
	mainFiles?: string[];

	/**
	 * A list of additional resolve plugins which should be applied
	 */
	plugins?: Plugin[];

	/**
	 * A PnP API that should be used - null is "never", undefined is "auto"
	 */
	pnpApi?: null | PnpApi;

	/**
	 * A list of root paths
	 */
	roots?: string[];

	/**
	 * The request is already fully specified and no extensions or directories are resolved for it
	 */
	fullySpecified?: boolean;

	/**
	 * Resolve to a context instead of a file
	 */
	resolveToContext?: boolean;

	/**
	 * A list of resolve restrictions
	 */
	restrictions?: (string | RegExp)[];

	/**
	 * Use only the sync constraints of the file system calls
	 */
	useSyncFileSystemCalls?: boolean;

	/**
	 * Prefer to resolve module requests as relative requests before falling back to modules
	 */
	preferRelative?: boolean;

	/**
	 * Prefer to resolve server-relative urls as absolute paths before falling back to resolve in roots
	 */
	preferAbsolute?: boolean;
}
type ResolveRequest = BaseResolveRequest & Partial<ParsedIdentifier>;
declare abstract class Resolver {
	fileSystem: FileSystem;
	options: ResolveOptionsResolverFactoryObject_1;
	hooks: KnownHooks;
	ensureHook(
		name:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >
	): AsyncSeriesBailHook<
		[ResolveRequest, ResolveContext],
		null | ResolveRequest
	>;
	getHook(
		name:
			| string
			| AsyncSeriesBailHook<
					[ResolveRequest, ResolveContext],
					null | ResolveRequest
			  >
	): AsyncSeriesBailHook<
		[ResolveRequest, ResolveContext],
		null | ResolveRequest
	>;
	resolveSync(context: object, path: string, request: string): string | false;
	resolve(
		context: object,
		path: string,
		request: string,
		resolveContext: ResolveContext,
		callback: (
			err: null | ErrorWithDetail,
			res?: string | false,
			req?: ResolveRequest
		) => void
	): void;
	doResolve(
		hook: AsyncSeriesBailHook<
			[ResolveRequest, ResolveContext],
			null | ResolveRequest
		>,
		request: ResolveRequest,
		message: null | string,
		resolveContext: ResolveContext,
		callback: (err?: null | Error, result?: ResolveRequest) => void
	): void;
	parse(identifier: string): ParsedIdentifier;
	isModule(path: string): boolean;
	isPrivate(path: string): boolean;
	isDirectory(path: string): boolean;
	join(path: string, request: string): string;
	normalize(path: string): string;
}
declare interface Stat {
	(
		path: PathLike,
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: IStats) => void
	): void;
	(
		path: PathLike,
		options: undefined | (StatOptions & { bigint?: false }),
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: IStats) => void
	): void;
	(
		path: PathLike,
		options: StatOptions & { bigint: true },
		callback: (arg0: null | NodeJS.ErrnoException, arg1?: IBigIntStats) => void
	): void;
	(
		path: PathLike,
		options: undefined | StatOptions,
		callback: (
			arg0: null | NodeJS.ErrnoException,
			arg1?: IStats | IBigIntStats
		) => void
	): void;
}
declare interface StatOptions {
	bigint?: boolean;
}
declare interface StatSync {
	(path: PathLike, options?: undefined): IStats;
	(
		path: PathLike,
		options?: StatSyncOptions & { bigint?: false; throwIfNoEntry: false }
	): undefined | IStats;
	(
		path: PathLike,
		options: StatSyncOptions & { bigint: true; throwIfNoEntry: false }
	): undefined | IBigIntStats;
	(path: PathLike, options?: StatSyncOptions & { bigint?: false }): IStats;
	(path: PathLike, options: StatSyncOptions & { bigint: true }): IBigIntStats;
	(
		path: PathLike,
		options: StatSyncOptions & { bigint: boolean; throwIfNoEntry?: false }
	): IStats | IBigIntStats;
	(path: PathLike, options?: StatSyncOptions):
		| undefined
		| IStats
		| IBigIntStats;
}
declare interface StatSyncOptions {
	bigint?: boolean;
	throwIfNoEntry?: boolean;
}
declare interface SyncFileSystem {
	readFileSync: ReadFileSync;
	readdirSync: ReaddirSync;
	readJsonSync?: (arg0: PathOrFileDescriptor) => JsonObject;
	readlinkSync: ReadlinkSync;
	lstatSync?: LStatSync;
	statSync: StatSync;
	realpathSync?: RealPathSync;
}
declare abstract class SyncHook<
	T,
	R = void,
	AdditionalOptions = UnsetAdditionalOptions
> extends Hook<T, R, AdditionalOptions> {
	call(...args: AsArray<T>): R;
}
declare interface TapOptions {
	before?: string;
	stage?: number;
}

/**
 * `URL` class is a global reference for `require('url').URL`
 * https://nodejs.org/api/url.html#the-whatwg-url-api
 */
declare interface URL_url extends URL_Import {}
declare abstract class UnsetAdditionalOptions {}
declare interface WriteOnlySet<T> {
	add: (item: T) => void;
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_1 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<U | {}>[]): (U | {})[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (U | {} | ConcatArray<U | {}>)[]): (U | {})[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_10 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<T>[]): T[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (T | ConcatArray<T>)[]): T[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_11 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<U>[]): U[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (U | ConcatArray<U>)[]): U[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_2 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<U | {}>[]): (U | {})[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (U | {} | ConcatArray<U | {}>)[]): (U | {})[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_3 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<U | {}>[]): (U | {})[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (U | {} | ConcatArray<U | {}>)[]): (U | {})[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_4 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<U | {}>[]): (U | {})[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (U | {} | ConcatArray<U | {}>)[]): (U | {})[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_5 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<U | {}>[]): (U | {})[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (U | {} | ConcatArray<U | {}>)[]): (U | {})[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_6 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<U | {}>[]): (U | {})[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (U | {} | ConcatArray<U | {}>)[]): (U | {})[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_7 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<U | {}>[]): (U | {})[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (U | {} | ConcatArray<U | {}>)[]): (U | {})[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_8 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<U | {}>[]): (U | {})[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: (U | {} | ConcatArray<U | {}>)[]): (U | {})[];
}

/**
 * Combines two or more arrays.
 * This method returns a new array without modifying any existing arrays.
 */
declare interface concatEs5Method_9 {
	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: ConcatArray<any>[]): any[];

	/**
	 * Combines two or more arrays.
	 * This method returns a new array without modifying any existing arrays.
	 */
	(...items: any[]): any[];
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_1 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_10 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: T, index: number, array: T[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: T, index: number, array: T[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_11 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: U, index: number, array: U[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: U, index: number, array: U[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_2 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_3 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_4 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_5 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_6 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_7 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_8 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): boolean;
}

/**
 * Determines whether all the members of an array satisfy the specified test.
 */
declare interface everyEs5Method_9 {
	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	<unknown /* no parsed data */>(
		predicate: (value: any, index: number, array: any[]) => boolean,
		thisArg?: any
	): boolean;

	/**
	 * Determines whether all the members of an array satisfy the specified test.
	 */
	(
		predicate: (value: any, index: number, array: any[]) => unknown,
		thisArg?: any
	): boolean;
}
declare function exports(
	context: object,
	path: string,
	request: string,
	resolveContext: ResolveContext,
	callback: (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest
	) => void
): void;
declare function exports(
	context: object,
	path: string,
	request: string,
	callback: (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest
	) => void
): void;
declare function exports(
	path: string,
	request: string,
	resolveContext: ResolveContext,
	callback: (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest
	) => void
): void;
declare function exports(
	path: string,
	request: string,
	callback: (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest
	) => void
): void;
declare namespace exports {
	export const sync: ResolveFunction;
	export function create(
		options: ResolveOptionsOptionalFS
	): ResolveFunctionAsync;
	export namespace create {
		export const sync: (options: ResolveOptionsOptionalFS) => ResolveFunction;
	}
	export namespace ResolverFactory {
		export let createResolver: (
			options: ResolveOptionsResolverFactoryObject_2
		) => Resolver;
	}
	export const forEachBail: <T, Z>(
		array: T[],
		iterator: Iterator<T, Z>,
		callback: (err?: null | Error, result?: null | Z, i?: number) => void
	) => void;
	export type ResolveCallback = (
		err: null | ErrorWithDetail,
		res?: string | false,
		req?: ResolveRequest
	) => void;
	export {
		CachedInputFileSystem,
		CloneBasenamePlugin,
		LogInfoPlugin,
		ResolveOptionsOptionalFS,
		PnpApi,
		Resolver,
		FileSystem,
		ResolveContext,
		ResolveRequest,
		Plugin,
		ResolveOptionsResolverFactoryObject_2 as ResolveOptions,
		ResolveFunctionAsync,
		ResolveFunction
	};
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_1 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): (U | {})[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_10 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: T, index: number, array: T[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: T, index: number, array: T[]) => unknown,
		thisArg?: any
	): T[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_11 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: U, index: number, array: U[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: U, index: number, array: U[]) => unknown,
		thisArg?: any
	): U[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_2 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): (U | {})[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_3 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): (U | {})[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_4 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): (U | {})[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_5 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): (U | {})[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_6 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): (U | {})[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_7 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): (U | {})[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_8 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S>(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: U | {}, index: number, array: (U | {})[]) => unknown,
		thisArg?: any
	): (U | {})[];
}

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
declare interface filterEs5Method_9 {
	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	<S extends any>(
		predicate: (value: any, index: number, array: any[]) => boolean,
		thisArg?: any
	): S[];

	/**
	 * Returns the elements of an array that meet the condition specified in a callback function.
	 */
	(
		predicate: (value: any, index: number, array: any[]) => unknown,
		thisArg?: any
	): any[];
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_1 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => boolean,
		thisArg?: any
	): undefined | S;
	(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => unknown,
		thisArg?: any
	): undefined | U | {};
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_10 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: T, index: number, obj: T[]) => boolean,
		thisArg?: any
	): undefined | S;
	(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any):
		| undefined
		| T;
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_11 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: U, index: number, obj: U[]) => boolean,
		thisArg?: any
	): undefined | S;
	(predicate: (value: U, index: number, obj: U[]) => unknown, thisArg?: any):
		| undefined
		| U;
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_2 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => boolean,
		thisArg?: any
	): undefined | S;
	(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => unknown,
		thisArg?: any
	): undefined | U | {};
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_3 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => boolean,
		thisArg?: any
	): undefined | S;
	(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => unknown,
		thisArg?: any
	): undefined | U | {};
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_4 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => boolean,
		thisArg?: any
	): undefined | S;
	(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => unknown,
		thisArg?: any
	): undefined | U | {};
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_5 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => boolean,
		thisArg?: any
	): undefined | S;
	(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => unknown,
		thisArg?: any
	): undefined | U | {};
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_6 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => boolean,
		thisArg?: any
	): undefined | S;
	(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => unknown,
		thisArg?: any
	): undefined | U | {};
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_7 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => boolean,
		thisArg?: any
	): undefined | S;
	(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => unknown,
		thisArg?: any
	): undefined | U | {};
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_8 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S>(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => boolean,
		thisArg?: any
	): undefined | S;
	(
		predicate: (value: U | {}, index: number, obj: (U | {})[]) => unknown,
		thisArg?: any
	): undefined | U | {};
}

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 */
declare interface findEs2015CoreMethod_9 {
	/**
	 * Returns the value of the first element in the array where predicate is true, and undefined
	 * otherwise.
	 */
	<S extends any>(
		predicate: (value: any, index: number, obj: any[]) => boolean,
		thisArg?: any
	): undefined | S;
	(
		predicate: (value: any, index: number, obj: any[]) => unknown,
		thisArg?: any
	): any;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_1 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_10 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[]
		) => T
	): T;
	(
		callbackfn: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[]
		) => T,
		initialValue: T
	): T;

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: T,
			currentIndex: number,
			array: T[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_11 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U,
			currentValue: U,
			currentIndex: number,
			array: U[]
		) => U
	): U;
	(
		callbackfn: (
			previousValue: U,
			currentValue: U,
			currentIndex: number,
			array: U[]
		) => U,
		initialValue: U
	): U;

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U,
			currentIndex: number,
			array: U[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_2 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_3 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_4 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_5 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_6 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_7 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_8 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceEs5Method_9 {
	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: any,
			currentValue: any,
			currentIndex: number,
			array: any[]
		) => any
	): any;
	(
		callbackfn: (
			previousValue: any,
			currentValue: any,
			currentIndex: number,
			array: any[]
		) => any,
		initialValue?: any
	): any;

	/**
	 * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: any,
			currentIndex: number,
			array: any[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_1 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_10 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[]
		) => T
	): T;
	(
		callbackfn: (
			previousValue: T,
			currentValue: T,
			currentIndex: number,
			array: T[]
		) => T,
		initialValue: T
	): T;

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: T,
			currentIndex: number,
			array: T[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_11 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U,
			currentValue: U,
			currentIndex: number,
			array: U[]
		) => U
	): U;
	(
		callbackfn: (
			previousValue: U,
			currentValue: U,
			currentIndex: number,
			array: U[]
		) => U,
		initialValue: U
	): U;

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U,
			currentIndex: number,
			array: U[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_2 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_3 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_4 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_5 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_6 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_7 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_8 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {}
	): U | {};
	(
		callbackfn: (
			previousValue: U | {},
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U | {},
		initialValue: U | {}
	): U | {};

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: U | {},
			currentIndex: number,
			array: (U | {})[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 */
declare interface reduceRightEs5Method_9 {
	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	(
		callbackfn: (
			previousValue: any,
			currentValue: any,
			currentIndex: number,
			array: any[]
		) => any
	): any;
	(
		callbackfn: (
			previousValue: any,
			currentValue: any,
			currentIndex: number,
			array: any[]
		) => any,
		initialValue?: any
	): any;

	/**
	 * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
	 */
	<U>(
		callbackfn: (
			previousValue: U,
			currentValue: any,
			currentIndex: number,
			array: any[]
		) => U,
		initialValue: U
	): U;
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_1 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): (U | {})[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: (U | {})[]): (U | {})[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_10 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): T[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: T[]): T[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_11 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): U[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: U[]): U[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_2 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): (U | {})[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: (U | {})[]): (U | {})[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_3 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): (U | {})[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: (U | {})[]): (U | {})[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_4 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): (U | {})[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: (U | {})[]): (U | {})[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_5 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): (U | {})[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: (U | {})[]): (U | {})[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_6 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): (U | {})[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: (U | {})[]): (U | {})[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_7 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): (U | {})[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: (U | {})[]): (U | {})[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_8 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): (U | {})[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: (U | {})[]): (U | {})[];
}

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 */
declare interface spliceEs5Method_9 {
	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount?: number): any[];

	/**
	 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
	 */
	(start: number, deleteCount: number, ...items: any[]): any[];
}

/**
 * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
 */
declare interface toLocaleString {
	/**
	 * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
	 */
	(): string;
	(
		locales: string | string[],
		options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions
	): string;
}

export = exports;
