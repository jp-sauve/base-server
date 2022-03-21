const User = require("../models/User").userModel;

async function create(req, res) {
  res.status(200).json(req.info);
}

async function login(req, res) {
  res.status(200).json(req.info);
}

async function logout(req, res) {
  req.logout();
  req.session.destroy();
  res.clearCookie("id");
  res.status(200).send({ success: true, message: "You are now logged out." });
}
