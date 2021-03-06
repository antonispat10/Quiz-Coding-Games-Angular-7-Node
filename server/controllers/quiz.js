const Quiz = require("../models/quiz");
const Question = require("../models/question");

// create a unique link for the quiz
exports.createLink = async (req, res, next) => {
    const alreadyPlayed =  await checkIfAlreadyPlayed(req.body.email, req.body.category);

    if (!alreadyPlayed) {
        const randomLink = 'test/' +Math.floor(Math.random() * 1000000000);
         Quiz
            .create({
                email: req.body.email,
                name: req.body.name,
                surname: req.body.surname,
                category: req.body.category,
                link: randomLink,
                result: -1
            })
            .then(createdQuiz => {
                res.status(201).json({
                    message: "Link created successfully",
                    createdQuiz,
                    randomLink
                })
            })
            .catch(error => {
                res.status(500).json({
                    error: error,
                    message: "Creating a link failed!"
                });
            });

    } else {
        res.status(500).json({
            message: "Link already created!"
        });
    }
};

function checkIfAlreadyPlayed(email, category) {
    return Quiz.findOne({email, category});
};

// play the quiz 
exports.playQuiz = (req, res, next) => {
    Quiz.findOne({ link: req.query.link })
        .populate('category')
        .then(quiz => {
            console.log(quiz.category.name)
            const quizName = quiz.category.name;
            Question.find({ categoryId: quiz.category._id })
                .then(questions => {
                    res.status(200).json({ questions, quizName });
                })
          
            if (!quiz) {
                res.status(404).json({ message: "Quiz not found!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Loading quiz failed!"
            });
        });
};

// link for setting result to 0 in order to be played once
exports.introQuiz = (req, res, next) => {
    Quiz.updateOne({ link: req.query.link }, {result:0})
        .then(quiz => {
            console.log(quiz)
            if (quiz.nModified > 0) {
                res.status(200).json({
                    quiz,
                    message: "Successfully set results to 0"
                });
            } 
            else {
                res.status(500).json({ message: "Error, already played" });
              }
        })
        .catch(error => {
            res.status(500).json({
                message: "Setting quiz results to 0 failed"
            });
        });
};

// link for submitting the result of the test
exports.submitQuiz = (req, res, next) => {
    console.log(req.body)
    Quiz.updateOne({ link: req.body.link }, {result: req.body.score})
        .then(quiz => {
            if (quiz.nModified > 0) {
                res.status(200).json({
                    quiz,
                    message: "Successfully set result"
                });
            } 
            else {
                res.status(500).json({ message: "Error, can't send the result" });
              }
        })
        .catch(error => {
            res.status(500).json({
                message: "Setting result failed"
            });
        });
};

// view the results for each candidate by inserting his/her email
exports.resultsPerCandidate = (req, res, next) => {
    Quiz.find({ email: req.body.email })
        .populate('category')
        .then(quiz => {
            if (quiz[0]) {
                res.status(200).json({
                    quiz,
                    message: "Successfully found the results of the tests for the candidate"
                });
            } else {
                res.status(401).json({
                    message: "Results not found for this email"
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Error finding results"
            });
        });
};

