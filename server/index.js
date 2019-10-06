const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log(`listening on 'http://localhost:5000'`);
});

app.get("/", (req, res) => {
  res.json({
    message: "meower"
  });
});

function isValidMew(mew) {
  return (
    mew.name &&
    mew.name.toString().trim() != "" &&
    mew.content &&
    mew.content.toString().trim() !== ""
  );
}

app.post("/mews", (req, res) => {
  if (isValidMew(req.body)) {
    const mew = {
      name: req.body.name.toString(),
      content: req.body.content.toString()
    };
  } else {
    res.status(422);
    res.json({
      message: "Hey! Name and content are required!"
    });
  }
  console.log(req.body);
});
