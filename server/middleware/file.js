const multer = require("multer");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, "files");
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, name);
  }
});

module.exports = multer({ storage: storage }).single("file");
