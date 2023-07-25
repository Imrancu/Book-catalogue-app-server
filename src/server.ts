import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    app.listen(port, () => {
      console.log(`Book Catelog Application is listening on port ${port}`);
    });

    console.log("Database is connected");
  } catch (err) {
    console.log("face this error", err);
  }
}
main();
module.exports = app;
