import fs from "fs";
import { Transform } from "stream";


const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    
    const upperCaseData = chunk.toString().toUpperCase();
   
    this.push(upperCaseData);
    callback();
  }
});


const inputFile = "file1.txt";
const outputFile = "file2.txt";


const readStream = fs.createReadStream(inputFile, "utf8");
const writeStream = fs.createWriteStream(outputFile);


readStream.pipe(upperCaseTransform).pipe(writeStream);

writeStream.on("finish", () => {
  console.log(`Data transformed to uppercase and written to ${outputFile}`);
});
