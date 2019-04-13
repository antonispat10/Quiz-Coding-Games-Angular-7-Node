const express = require("express");
const extractFile = require("./middleware/file");

const QuizController = require("./controllers/quiz");

const CategoryController = require("./controllers/category");

const UserController = require("./controllers/user");

const router = express.Router();

router.post("/login", UserController.login);

router.post("/createQuiz", QuizController.createLink);

router.get("/playQuiz", QuizController.playQuiz);

router.get("/resultsPerCandidate/:email", QuizController.resultsPerCandidate);

router.post("/introQuiz", QuizController.introQuiz);

router.post("/searchResults", QuizController.resultsPerCandidate);

router.post("/category", extractFile, CategoryController.createCategory);

router.get("/category/:id", CategoryController.getCategory);

router.get("/categories", CategoryController.categories);

// router.get("/category", CategoryController.getQuestionsByCategory);

module.exports = router;
