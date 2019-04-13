const Category = require("../models/category");
const Question = require("../models/question");


exports.createCategory = async (req, res, next) => {
  const url = req.get("host");
  try {
    const category = await Category
    .create({
        name: req.body.name,
        logo: req.body.logo,
        filePath: '../files/' + req.file.filename,
    })
    console.log(category)

    const data = require("../files/" + req.file.filename);
    const quiz = await data.data.forEach((value, index) => {
        Question
           .create({
               name: value.questions,
               choices: value.choices,
               answer: value.answer,
               categoryId: category._id
           })
           .then( v => { console.log(v)})
       });
        res.status(201).json({
            message: "Category created successfully",
        });
  }
  catch (error) {
    res.status(500).json({
        error: error,
        message: "Creating a category failed!"
    });
  }
 
        
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



