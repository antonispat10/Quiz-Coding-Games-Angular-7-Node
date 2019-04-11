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
            Question.find({ categoryId: quiz.category._id })
                .then(questions => {
                    res.status(200).json(questions);
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

