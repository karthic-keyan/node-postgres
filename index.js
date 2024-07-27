const express = require("express");
const bodyParser = require("body-parser");
const db = require("./queries");
var cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { body, validationResult } = require("express-validator");
const helmet = require("helmet");

const app = express();
const port = 3000;
app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// passport.use(
//   new LocalStrategy(function (username, password, done) {
//     // Verify username and password
//     // Call done(null, user) if authentication is successful
//   })
// );

// function isAdmin(req, res, next) {
//   if (req.user && req.user.role === "admin") {
//     return next();
//   } else {
//     return res.status(403).json({ message: "Permission denied" });
//   }
// }

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// app.use((req, res, next) => {
//   const error = new Error("Something went wrong");
//   next(error);
// });

// Error-handling Middleware

// app.use((err, req, res, next) => {
//   console.error("Error:", err.message);
//   res.status(500).send("Internal Server Error");
// });

// app.get("/users", (req, res) => {
//   // const errors = validationResult(req);
//   // if (!errors.isEmpty()) {
//   //   return res.status(422).json({ errors: errors.array() });
//   // }
//   db.getUsers;
// });

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/create/user", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
