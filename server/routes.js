const express = require("express");
const extractFile = require("./middleware/file");

const QuizController = require("./controllers/quiz");

const CategoryController = require("./controllers/category");

const router = express.Router();

router.post("/createLink", QuizController.createLink);

router.get("/playQuiz", QuizController.playQuiz);

router.post("/category", extractFile, CategoryController.createCategory);

// router.get("/category", CategoryController.getQuestionsByCategory);

module.exports = router;
