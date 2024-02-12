const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = PrismaClient();
const app = express();
