const express = require("express");
const extractFile = require("./middleware/file");
const checkAuth = require("./middleware/check-auth");
const QuizController = require("./controllers/quiz");
const CategoryController = require("./controllers/category");
const UserController = require("./controllers/user");
const router = express.Router();

router.post("/login", UserController.login);

router.post("/createQuiz", checkAuth, QuizController.createLink);

router.get("/playQuiz", QuizController.playQuiz);

router.get("/resultsPerCandidate/:email", checkAuth, QuizController.resultsPerCandidate);

router.post("/introQuiz", QuizController.introQuiz);

router.post("/submitQuiz", QuizController.submitQuiz);

router.post("/searchResults", checkAuth, QuizController.resultsPerCandidate);

router.post("/category", checkAuth, extractFile, CategoryController.createCategory);

router.delete("/deleteCategory", CategoryController.deleteCategory);

router.get("/category/:id", checkAuth, CategoryController.getCategory);

router.get("/categories", checkAuth, CategoryController.categories);

// router.get("/category", CategoryController.getQuestionsByCategory);

module.exports = router;
