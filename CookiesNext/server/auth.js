const jwt = require("jsonwebtoken");

const users = [
  {
    username: "abc@gmail.com",
    password: "abc123",
  },
];

const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  try {
    const currentUser = users.find((item) => item.username === username);
    console.log(currentUser);
    if (!currentUser) {
      return res.status(404).send({
        message: "user not found",
        statusCode: "Not Ok",
      });
    }
    // console.log(password,currentUser.password);
    if (password !== currentUser.password) {
      // console.log("inside password not match");
      return res.status(401).send({
        message: "Incorrect password",
        statusCode: "Unauthorized",
      });
    }
    const secretKey = "aeisbcijac";
    const token = jwt.sign({ usedId: currentUser.username }, secretKey, {
      expiresIn: "2d",
    });

    return res
      .status(200)
      .cookie("jwtToken", token, {
        // httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
        // sameSite: process.env.NODE_ENV === "production" ? "none" : "lex",
        // domain: process.env.NODE_ENV === "production" ? "abc.com" : "localhost",
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        domain: "localhost",
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .send({
        token,
      });
  } catch (err) {
    // console.log("inside catch")
    res.status(500).send({
      message: "Internal server error",
      statusCode: 500,
    });
  }
};

const logout = (req, res) => {
  res.cookie("jwtToken", "", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    domain: "localhost",
    maxAge: 0, // Expire the cookie
  });

  res
    .status(200)
    .send({ status: "success", message: "logged out successfully" });
};

module.exports = { login, logout };
