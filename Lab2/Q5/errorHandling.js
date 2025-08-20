const fs = require("fs");

const readStream = fs.createReadStream("missing.txt", "utf8");

readStream.on("error", (err) => {
  console.error("Error occurred:", err.message);
});
