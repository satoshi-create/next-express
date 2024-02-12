const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = PrismaClient();
const app = express();

// json
app.use(express.json());

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// test api
app.get("/test", (req, res) => {
  try {
    res.status(200).json({ message: "Api is working" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all users
app.get("/users", async (req, res) => {
  try {
  } catch (error) {}
});
