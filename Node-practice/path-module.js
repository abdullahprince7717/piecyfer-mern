const path = require('node:path'); // node: Protocol is optional in ES6

console.log("Directory Name", __dirname);
console.log("File Name", __filename);

// Base Name

console.log("File basname", path.basename(__filename));
console.log("Directory basename", path.dirname(__dirname));

// File Extension

console.log("file Extension", path.extname(__filename));
console.log("Directory Extension", path.extname(__dirname));

//Parse
// Returns an object with the properties root, dir, base, name, and ext.

console.log("Parse File", path.parse(__filename));
console.log("Parse Directory", path.parse(__dirname));


// Format
// Returns a path string from an object - the opposite of parse.

console.log("Format", path.format(path.parse(__dirname)));


// Is Absolute
// Determines whether path is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

console.log("Is Absolute", path.isAbsolute(__dirname));


// Join
// Joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

console.log("Join", path.join(__dirname, 'path-module.js'));
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));



// Resolve
// Resolves a sequence of paths or path segments into an absolute path.

console.log("Resolve", path.resolve(__dirname, 'path-module.js'));
console.log("Resolve", path.resolve('path-module.js'));
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));


// Relative
// Returns the relative path from from to to based on the current working directory. If from is not an absolute path, it will be resolved to an absolute path using path.resolve().

console.log("Relative", path.relative(__dirname, 'path-module.js'));


// Normalize
// Normalizes the given path, resolving '..' and '.' segments.


console.log("Normalize", path.normalize(__dirname));


// Sep
// Provides the platform-specific path segment separator:


console.log("Sep", path.sep);


// Delimiter
// Provides the platform-specific path delimiter:


console.log("Delimiter", path.delimiter);


// Posix
// Provides access to POSIX specific implementations of the path methods.


console.log("Posix", path.posix);


// Win32
// Provides access to Windows specific implementations of the path methods.


console.log("Win32", path.win32);




