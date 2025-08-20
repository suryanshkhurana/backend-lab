const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");
writeStream.write("Hello, Node.js!");
writeStream.end(() => console.log("Data written successfully!"));
