const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = PrismaClient();
const app = express();


// json
app.use(express.json());


// cors
app.use((req, res, next)=> {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  next()
}));
