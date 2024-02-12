const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = PrismaClient();
const app = express();

app.use(express.json());

app.use();
