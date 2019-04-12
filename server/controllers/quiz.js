const Quiz = require("../models/quiz");
const Question = require("../models/question");

// create a unique link for the quiz
exports.createLink = async (req, res, next) => {
    let alreadyPlayed;
    try {
         alreadyPlayed =  await checkIfAlreadyPlayed(req.body.email, req.body.name);
    }
    catch (err) {
        console.log(err)
    }
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

  async function checkIfAlreadyPlayed(email, category) {
      const played = await Quiz
          .findOne({
              email
          });
    return played;

};

// link for playing the quiz 
exports.playQuiz = (req, res, next) => {
    Quiz.findOne({ link: req.query.link })
        .populate('category')
        .then(quiz => {
            console.log(quiz.category._id)
            const quizName = quiz.name;
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

// link for setting result to 0
exports.introQuiz = (req, res, next) => {
    Quiz.updateOne({ link: req.query.link }, {result:0})
        .then(quiz => {
            if (quiz.nModified > 0) {
                res.status(200).json({
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

// view the results for each candidate by inserting his/her email
exports.resultsPerCandidate = (req, res, next) => {
    Quiz.find({ email: req.body.email })
        .then(quiz => {
                res.status(200).json({
                    quiz,
                    message: "Successfully found the results of the tests for the candidate"
                });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error finding results"
            });
        });
};

