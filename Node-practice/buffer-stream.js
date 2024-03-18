const fs = require('fs');
const data = 'Stream is a sequence of data';

// Buffer and Stream in Node.js
// Buffer is an area where data is stored temporarily. Stream is a sequence of data. In Node.js, the Buffer class is used to handle binary data. The stream module provides a way of handling reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

// Buffer is a global object. It is a class in Node.js to handle binary data.
//It is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.
//Buffer class is used because pure JavaScript is not compatible with binary data.
//So, when dealing with TCP streams or the file system, it's necessary to handle octet streams. Buffer class is used to handle octet streams in Node.js. 

// Creating Buffers
// There are several ways to construct a buffer in Node.js.


// Method 1
// Creating a Buffer from a given array

const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf.toString());

// Method 2
// Creating a Buffer from a given string and optionally encoding type

const buf1 = Buffer.from('buffer', 'utf-8');
console.log(buf1.toString());

// Method 3
// Creating a Buffer from a given array and optionally encoding type

const buf2 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72], 'utf-8');
console.log(buf2.toString());

// Method 4
// Creating a Buffer from a given string and optionally encoding type

const buf3 = Buffer.from('buffer', 'utf-8');
console.log(buf3.toString());

// Method 5
// Creating a Buffer with a given size

const buf4 = Buffer.alloc(10);
console.log(buf4.toString());


// Method 6
// Creating a Buffer with a given size and filling with a given value

const buf5 = Buffer.alloc(10, 1);
console.log(buf5.toString());

// Method 7

// Creating a Buffer with a given size and filling with a given value

const buf6 = Buffer.allocUnsafe(10);
console.log(buf6.toString());



// Stream
// Stream is an abstract interface for working with streaming data in Node.js.
// It is designed to be implemented by different objects to provide a standard way to interact with different types of streaming data.


// Types of Streams
// There are four types of streams in Node.js:

// Readable: Used for reading operations.

// Writable: Used for writing operations.

// Duplex: Used for both reading and writing operations.

// Transform: A type of duplex stream where the output is computed based on input.


// Stream Events

// There are several events associated with streams:

// data: This event is fired when there is data is available to read.

// end: This event is fired when there is no more data to read.

// error: This event is fired when there is any error receiving or writing data.

// finish: This event is fired when all the data has been flushed to the underlying system.


// Example of Readable Stream

// The following example demonstrates how to create a readable stream.

const readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function (chunk) {
    data += chunk;
});
readerStream.on('end', function () {
    console.log(data);
});
readerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('Program Ended');


// Example of Writable Stream

// The following example demonstrates how to create a writable stream.
// The write() method is used to write data from the buffer to the stream.

const writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
writerStream.end();
writerStream.on('finish', function () {
    console.log('Write completed');
});
writerStream.on('error', function (err) {
    console.log(err.stack);
});
console.log('Program Ended');


// Example of Duplex Stream

