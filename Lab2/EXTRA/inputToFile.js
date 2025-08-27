import fs from "fs";


const outputFile = "output.txt";


const writeStream = fs.createWriteStream(outputFile, { flags: "a" });



process.stdin.on("data", (data) => {
  const input = data.toString();
  writeStream.write(input);
  console.log(`text is written to the file: ${input.trim()}`);
});

