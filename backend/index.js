const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
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
// app.get("/test", (req, res) => {
//   try {
//     res.status(200).json({ message: "Api is working" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// get all users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get all clients
app.get("/clients", async (req, res) => {
  try {
    const clients = await prisma.clients.findMany();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// get all test
app.get("/test", async (req, res) => {
  try {
    const test = await prisma.test.findMany();
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// get all sites
app.get("/sites", async (req, res) => {
  try {
    const sites = await prisma.sites.findMany();
    res.status(200).json(sites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all designs
app.get("/designs", async (req, res) => {
  try {
    const designs = await prisma.designs.findMany({
      include: { icon: true },
    });
    res.status(200).json(designs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get user by id
app.get("/users/:id", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create user
app.post("/users", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update user
app.put("/users/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete user
app.delete("/users/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
