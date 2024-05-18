
const db = require("../../models");
const Book = db.book;

exports.createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      publishedDate,
      genre,
      summary
    } = req.body;

    const data = {
      title,
      author,
      publishedDate,
      genre,
      summary,
    image: req.file ? req.file.path || "" : "",
    };

   
    const result = await Book.create(data);


    res.status(200).send({
      status: "Success",
      message: "Successfully book create",
      data: result,
    });
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};


exports.getAllBook = async (req, res) => {
  try {
    const result = await Book.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all book",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};


exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No book found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your book",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};


exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.update(req.body, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No book found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your book",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
