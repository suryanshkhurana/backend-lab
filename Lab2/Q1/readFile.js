const fs = require("fs");

const filePath = "data.txt";

if (fs.existsSync(filePath)) {
  const readStream = fs.createReadStream(filePath, "utf8");
  readStream.on("data", chunk => console.log(chunk));
  readStream.on("error", err => console.error("Error:", err.message));
} else {
  console.log("File does not exist!");
}
