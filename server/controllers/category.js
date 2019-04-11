const Category = require("../models/category");
const Question = require("../models/question");


exports.createCategory = (req, res, next) => {
  const url = req.get("host");
    console.log(req.file.filename)
  const category = Category
    .create({
        name: req.body.name,
        filePath: '../files/' + req.file.filename,
    })
    .then(createdCategory => {
        const data = require("../files/" + req.file.filename);
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
                    res.status(201).json({
                        message: "Category created successfully",
                        category: {
                            ...createdCategory,
                            id: createdCategory._id
                        }
                    });
                })
            })
            .catch(error => {
                res.status(500).json({
                    error: error,
                    message: "Creating a category failed!"
                });
            });
    })
};

exports.categories = (req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    let categories;
    Category.find()
        .skip(pageSize * (currentPage - 1))
        .limit(pageSize)
        .then(cat => {
            categories = cat;
            return Category.count();
        })
        .then(count => {
         res.status(200).json({ count, categories });
        })
        .catch(error => {
            res.status(500).json({
                error,
                message: "Loading categories failed!"
            });
        });
};

exports.getCategory = (req, res, next) => {
    Category.findById(req.params.id)
        .then(category => {
            if (category) {
                res.status(200).json(category);
            } else {
                res.status(404).json({ message: "Category not found!" });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Fetching category failed!"
            });
        });
};



