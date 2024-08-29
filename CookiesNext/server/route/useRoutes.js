const { login, logout } = require("../auth");

const route = require("express").Router();

route.post("/login", login);
route.get("/logout", logout);

module.exports = route;
        