// import env from "dotenv"
//  env.config()
// require('dotenv').config()
// console.log(process.env)
import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is Ready");
// });

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "A joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A joke",
      content: "This is a joke 3",
    },
    {
      id: 4,
      title: "A joke4",
      content: "This is a joke4",
    },
    {
      id: 5,
      title: "A joke 5",
      content: "This is a joke 5",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`its runs on ${port}`);
});
