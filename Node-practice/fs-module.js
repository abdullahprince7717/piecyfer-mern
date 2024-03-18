//fs Module
// The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
// The fs module provides a way of working with the file system. It is a built-in module in Node.js.

const fs = require('fs');

// Read File
// The fs.readFile() method is used to read files on your computer. This method takes in the file path and a callback function as arguments.
// The callback function takes two arguments: error and data. If an error occurs, the error argument will contain an error object. If the file is read successfully, the data argument will contain the file data.


fs.readFile('input.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data);
});


// Write File
// The fs.writeFile() method is used to write files on your computer. This method takes in the file path, data, and a callback function as arguments.
// This will replace the file if it already exists. If the file does not exist, a new file will be created.

fs.writeFile('new.txt', 'Hello World', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('File written successfully');
});


// Append File
// The fs.appendFile() method is used to append data to a file. This method takes in the file path, data, and a callback function as arguments.

fs.appendFile('new.txt', 'New Data', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('File appended successfully');
});


// Delete File
// The fs.unlink() method is used to delete files on your computer. This method takes in the file path and a callback function as arguments.

fs.unlink('new.txt', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('File deleted successfully');
});


// Rename File
// The fs.rename() method is used to rename files on your computer. This method takes in the old file path, new file path, and a callback function as arguments.

fs.rename('input.txt', 'newInput.txt', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('File renamed successfully');
});


// Read Directory
// The fs.readdir() method is used to read the contents of a directory. This method takes in the directory path and a callback function as arguments.

fs.readdir('Node-practice', function (err, files) {
    if (err) {
        console.log(err);
    }
    console.log(files);
});


