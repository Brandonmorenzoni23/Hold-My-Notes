const express = require("express");
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");
const Post = require("../../models/post");
const UserModel = require("../../models/users");


exports.postTodo = async (req, res) => {
    console.log(req.body)
    const comment = req.body.writeTodo.todo
    console.log(comment)
    const user = req.body.writeTodo.user
    console.log(user)
const post = new Post ({comment: comment, user: user})
await post.save();
res.json({ message: "Todo Added" });
}

exports.getTodos = async (req, res) => {
    console.log(req)
   try {
    const posts = await Post.find({ user: req.params.userId });
    console.log(posts)
    res.json(posts)
   } catch (error) {
    res.json({message: "error"})
   }
}