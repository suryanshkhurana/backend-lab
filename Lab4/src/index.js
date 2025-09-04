// import dotenv from 'dotenv'
// dotenv.config({
//     path: './.env'
// })


// import connectDB from "./DB/DBConnection.js";
// import { app } from "./app.js";




// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 5000, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("Mongodb connection failed",err);
// })

//

import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); // ensure it loads root .env

import connectDB from "./DB/DBConnection.js";
import { app } from "./app.js";

console.log("🔎 Loaded MONGO_URI:", process.env.MONGO_URI);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT || 8080}`);
    });
  })
  .catch((err) => {
    console.log("❌ Mongodb connection failed", err);
  });
