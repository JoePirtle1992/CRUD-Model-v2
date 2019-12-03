const express = require("express");
const mahFirstRoute = express.Router();
const mahFirstController = require("../controllers/mahFirstController");

mahFirstRoute
  .route("/")
  .get(mahFirstController.getEmAll)
  .post(mahFirstController.addOne);

mahFirstRoute
  .route("/:id")
  .get(mahFirstController.getOne)
  .delete(mahFirstController.deleteOne)
  .put(mahFirstController.updateOne);

module.exports = mahFirstRoute;
