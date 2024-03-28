/*  Here we create a bunch of functions that we can
 reference in the routes file to work with the data*/

const User = require("../models/userModel");
// const mongoose = require("mongoose");

// get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 }); //sort the docs we get in the descending order of the creation date
  res.status(200).json(users);
};

// get a single user
const getUser = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "No shuch user" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Innternal Server Error" });
  }
};
// create new user
const createUser = async (req, res) => {
  const { username, password } = req.body;

  // add doc to db
  try {
    const user = await User.create({ username, password }); // this one is async func. so we need the parrent function to execute asynchronously
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOneAndDelete({ username });

    if (!user) {
      return res.status(404).json({ error: "No such user" });
    }

    res.status(200).json(user);
  } catch (error) {
    // Handle any database errors
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update a user
const updateUser = async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { _username: username },
      {
        ...req.body,
      }
    );
    if (!user) {
      return res.status(404).json({ error: "No shuch user" });
    }

    res.status(200).json(user);
  } catch (error) {
     console.error(error);
     res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
};
