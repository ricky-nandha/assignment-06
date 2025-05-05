import express from "express";

import cors from "cors";

const app = express();

app.use(cors());

const location = [
  {
    title: "New York",
    body: "is 3,392 miles away",
  },
  {
    title: "London",
    body: "is 89 miles away",
  },
  {
    title: "Dubai",
    body: "is 3,460 miles away",
  },

  {
    title: "Cairo",
    body: "is 3,607 miles away",
  },

  {
    title: "Rome",
    body: "is 977 miles away",
  },
  {
    title: "Madrid",
    body: "is 853 miles away",
  },
];

app.get("/", function (req, res) {
  res.json("Who invited you here! Show your ticket please!");
});

app.get("/location", (req, res) => {
  res.json(location);
});
const PORT = 8080;

app.listen(PORT, function (req, res) {
  console.log(`Server is on port ${PORT}`);
});
