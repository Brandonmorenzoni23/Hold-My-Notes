const homeController = require("../controllers/homeController.js");
const express = require("express");
const router = express.Router();


router.post("/addTodo", homeController.postTodo);

router.get("/listOfTodos/:userId", homeController.getTodos);



module.exports = router;
