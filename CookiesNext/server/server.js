const express = require("express");
const app = express();
const cors = require("cors");

const auth = require("./auth");
const route = require("./route/useRoutes");

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [process.env.COOKIE_KEY],
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

app.use("/api", route);

app.get("/", (req, res) => {
  if (req.user) {
    res.send("Logged in");
  } else {
    res.send("Not logged in");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require("express");
// const session = require("express-session");
// const router = require("./auth"); // Assuming auth routes are in a separate file

// const app = express();
// app.use(express.json());
// app.use(
//   session({
//     secret: "your_secret_key", // Replace with a secret key for session encryption
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// // Use auth routes
// app.use("/", router);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
