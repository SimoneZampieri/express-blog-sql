const connection = require("../data/db");

const index = (req, res) => {
  const sql = "SELECT * FROM blog";

  //query db
  connection.query(sql, (err, results) => {
    if (err) return res.status(500), json({ error: "Errore nella query" });
    res.json(results);
  });
};

const show = (req, res) => {
  const id = req.params.id;

  const sqPost = "SELECT * FROM blog WHERE id = ?";

  const sqContent = "SELECT  ";
};

const store = (req, res) => {
  res.send("Creazione Post");
};

const update = (req, res) => {
  const id = req.params.id;
  res.send(`Modifico il post con id: ${id}`);
};

const destroy = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM blog WHERE id = ?";

  connection.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: "Errore nella query" });
    res.sendStatus(204);
  });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
