import { body } from "express-validator";

export const authValidator = [
  body("email", "Wrong email format").isString().isEmail(),
  body("password", "Wrong password format")
    .isString()
    .isLength({ min: 5, max: 15 }),
];
