const express = require("express");
const app = express();
const port = 3000;

const errorHand = require("./middlewares/errorHand");
const notFound = require("./middlewares/notFound");

const postRouter = require("./routes/postRouter");

//parsing body
app.use(express.json());

//listen
app.listen(port, () => {
  console.log(`Sono in ascolto sulla porta ${port}`);
});

//rotta 1
app.get("/", (req, res) => {
  res.send("Il mio BLOG");
});

//rotta post
app.use("/posts", postRouter);

//error handling
app.use(errorHand);

//notFound handling
app.use(notFound);
