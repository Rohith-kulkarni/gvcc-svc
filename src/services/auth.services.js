import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

export const signupUser = async ({ email, password, name }) => {
  const existingUser = await db.get(
    `SELECT * FROM users WHERE email = ?`,
    email
  );

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashed = await bcrypt.hash(password, 10);

  await db.run(
    `INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)`,
    email,
    hashed,
    name
  );

  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is missing");

  const token = jwt.sign({ email }, secret, { expiresIn: "30d" });

  return { regEmail: email, token };
};

export const loginUser = async ({ email, password }) => {
  const dbUser = await db.get(`SELECT * FROM admins WHERE email=?`, [email]);
  if (!dbUser) {
    throw new Error("Please check the email");
  }
  const isPasswordMatch = await bcrypt.compare(password, dbUser.password_hash);
  if (!isPasswordMatch) {
    throw new Error("Kindly check your password");
  }
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign({ email }, secret, { expiresIn: "1h" });
  console.log(token);
  return { regEmail: email, token, username: dbUser.name };
};
