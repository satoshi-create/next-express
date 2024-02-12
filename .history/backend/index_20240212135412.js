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
app.get("/test",(req.res)=> {
  try {
    res.status(200).json({message:'Api is working'})
  } catch (error) {
    
  }
});
