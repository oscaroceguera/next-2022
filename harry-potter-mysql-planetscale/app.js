import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const app = express();

app.get("/characters", async (req, res) => {
  let status = 200;
  let retVal = {};
  try {
    const query = "SELECT * FROM hp_character";
    const [rows] = await connection.query(query);
    retVal.data = rows;
  } catch (err) {
    console.error(err);
    retVal.message = "Something went wrong";
  } finally {
    res.status(status).json(retVal);
  }
});

app.get("/characters/:id", async (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM hp_character WHERE hp_character.id=?`;
  const [rows] = await connection.query(query, [id]);
  if (!rows[0]) {
    return res.json({ msg: "Couldn’t find that character" });
  }
  res.json(rows[0]);
});

app.get("/wands", async (req, res) => {
  const query = "SELECT * FROM wand";
  const [rows] = await connection.query(query);
  res.json(rows);
});

app.get("/wands/:id", async (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM wand WHERE wand.id=?`;
  const [rows] = await connection.query(query, [id]);
  if (!rows[0]) {
    return res.json({ msg: "Couldn’t find that wand" });
  }
  res.json(rows[0]);
});

app.listen(3001, () => {
  console.log("App is running");
});
