const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedtodos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true }],
});

module.exports = mongoose.model("User", UserModel);