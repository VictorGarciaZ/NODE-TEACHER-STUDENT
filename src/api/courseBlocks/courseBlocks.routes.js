const express = require ("express");
const { editPut } = require("../teachers/teacher.controller");

const controller = require ("./courseBlocks.controller");

const router = express.Router();

router.get("/", controller.indexGet);

router.get("/:id", controller.getById);

router.get("/getbyname/:name", controller.getByName);

router.post("/create", controller.createPost);

router.put("/edit", editPut);

router.delete("/delete", controller.deleteCourse);


module.exports = router;

