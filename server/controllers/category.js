const Category = require("../models/category");
const Question = require("../models/question");


exports.createCategory = (req, res, next) => {
  const url = req.get("host");

  const category = Category
    .create({
        name: req.body.name,
        filePath: '../files/' + req.file.filename,
    })
    .then(createdCategory => {
        const data = require("../files/" + req.file.filename);
        console.log(createdCategory)
        data.data.forEach(value => {
            console.log(value)
            Question
                .create({
                    name: value.questions,
                    choices: value.choices,
                    answer: value.answer,
                    category: createdCategory._id
                })
                .then(createdQuestion => {
                    console.log(createdQuestion.choices[1])
                })
                .catch(err => {
                    console.log('dsasad')
                })
        })

      res.status(201).json({
        message: "Category created successfully",
        category: {
          ...createdCategory,
          id: createdCategory._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error,
        message: "Creating a category failed!"
      });
    });



};



