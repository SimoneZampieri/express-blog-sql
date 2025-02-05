const express = require("express");
const connection = require("../data/db");
const router = express.Router();

const index = (req, res) => {
  const sql = "SELECT * FROM blog";

  //query db
  connection.query(sql, (err, results) => {
    if (err) return res.status(500), json({ error: "Errore nella query" });
    res.json(results);
  });
};
