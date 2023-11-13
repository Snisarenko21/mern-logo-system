import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { register } from "./controllers/UserController.js";
import handleValidationError from "./middlewares/handleValidationError.js";
import { registerValidator } from "./helpers/validators.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

const app = express();
app.use(express.json());
app.use(cors());

app.post("./register", registerValidator, handleValidationError, register);
// app.post("/login")
// app.get("/me")

const PORT = process.env.PORT || 49152;

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is running on port ${PORT}`);
});
