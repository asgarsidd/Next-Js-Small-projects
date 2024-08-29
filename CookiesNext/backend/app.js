require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 4000;
const githubData = {
  login: "asgarsidd",
  id: 72298542,
  node_id: "MDQ6VXNlcjcyMjk4NTQy",
  avatar_url: "https://avatars.githubusercontent.com/u/72298542?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/asgarsidd",
  html_url: "https://github.com/asgarsidd",
  followers_url: "https://api.github.com/users/asgarsidd/followers",
  following_url:
    "https://api.github.com/users/asgarsidd/following{/other_user}",
  gists_url: "https://api.github.com/users/asgarsidd/gists{/gist_id}",
  starred_url: "https://api.github.com/users/asgarsidd/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/asgarsidd/subscriptions",
  organizations_url: "https://api.github.com/users/asgarsidd/orgs",
  repos_url: "https://api.github.com/users/asgarsidd/repos",
  events_url: "https://api.github.com/users/asgarsidd/events{/privacy}",
  received_events_url: "https://api.github.com/users/asgarsidd/received_events",
  type: "User",
  site_admin: false,
  name: "Asgar",
  company: null,
  blog: "",
  location: "Bengaluru",
  email: null,
  hireable: null,
  bio: "Front-end Devloper\r\n",
  twitter_username: null,
  public_repos: 35,
  public_gists: 0,
  followers: 1,
  following: 5,
  created_at: "2020-10-03T09:01:59Z",
  updated_at: "2024-03-31T09:03:58Z",
};

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/twitter", (req, res) => {
  res.send("asgar");
});
app.get("/user", (req, res) => {
  res.send("Hey This is You Asgar");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please Login first</h1>");
});

app.get("/chai", (req, res) => {
  res.send("<h2>This is the page of Chai where you can take!!</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
