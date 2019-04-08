const Quiz = require("../models/quiz");
const Question = require("../models/question");

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
                    message: "Quiz created successfully",
                    createdQuiz,
                    randomLink
                })
            })
            .catch(error => {
                res.status(500).json({
                    error: error,
                    message: "Creating a quiz failed!"
                });
            });

    } else {
        res.status(500).json({
            message: "Quiz already played!"
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

exports.playQuiz = (req, res, next) => {
    console.log(req.query)
    Quiz.findOne({ link: req.query.link })
        .populate('category')
        .then(quiz => {
            if (quiz.result = -1) {
                Question.find({ category: quiz.category })
                    .then(questions => {
                        res.status(200).json(questions);
                    })
            } else {
                res.status(404).json({ message: "Quiz already played!" });
            }

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

