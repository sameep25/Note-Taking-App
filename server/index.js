import express from "express";
import mongoose from "mongoose";
import route from "./Routes/routes.js";

const app = express();
const PORT = 8000;

const URL =
  "mongodb+srv://sameep:ZeVsZD1Gt5gTThC9@googlekeep.dfc7l.mongodb.net/GoogleKeep?retryWrites=true&w=majority";

app.use("/" ,route) ;

mongoose
  .connect(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error :", error.message);
  });



// mongodb+srv://sameep:ZeVsZD1Gt5gTThC9@googlekeep.dfc7l.mongodb.net/GoogleKeep?retryWrites=true&w=majority
// ZeVsZD1Gt5gTThC9
