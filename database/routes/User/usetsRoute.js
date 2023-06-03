const { Router } = require("express");
const { User } = require("../../db");
const jwt = require("jsonwebtoken");

const router = Router();

router.post("/register", async (req, res) => {
  const { userName, email, password, role, name, banned, profile } = req.body;

  const alreadyExistUserEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error ", err);
    }
  );

  const alreadyExistUserName = await User.findOne({
    where: { userName },
  }).catch((err) => {
    console.log("Error ", err);
  });

  if (alreadyExistUserEmail) {
    return res.json({ message: "User with email already exists!" });
  }
  if (alreadyExistUserName) {
    return res.json({ message: "User with user Name already exists!" });
  }
  if (!password) {
    return res.json({ message: "enter a password!" });
  }
  if (password.length < 4) {
    return res.json({ message: "password must have more than 4 characters!" });
  }

  const newUser = new User({
    userName,
    email,
    name,
    password,
    role,
    banned:false,
    profile,
  });
  const saveUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.json({ error: "Cannot register user at the moment!" });
  });

  if (saveUser) {
    const jwtToken = jwt.sign({ userName, role }, process.env.JWT_SECRET);
    res.json({
      userName,
      email,
      name,
      token: jwtToken,
      role: role,
      banned: false,
      profile: profile,
    });
  }
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  const userWithUseName = await User.findOne({ where: { userName } }).catch(
    (err) => {
      console.log("Error ", err);
    }
  );

  if (!userWithUseName) {
    return res.json({ message: "User name or password does not match!" });
  }
  if (userWithUseName.password !== password) {
    return res.json({ message: "User name or password does not match!" });
  }

  const jwtToken = jwt.sign(
    { userName: userWithUseName.userName, role: userWithUseName.role },
    process.env.JWT_SECRET
  );

  res.json({
    userName,
    role: userWithUseName.role,
    name: userWithUseName.name,
    token: jwtToken,
    profile: userWithUseName.profile,
    banned: userWithUseName.banned,
  });
});

router.get("/", async (req, res) => {
  const user = await User.findAll().catch((err) => {
    console.log("Error ", err);
  });
  res.json(user);
});

module.exports = router;
