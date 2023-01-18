const express = require("express");
const controller = require("./students.controller");

const router = express.Router();

// ruta: /students/
router.get("/", controller.indexGet);

// ruta: /students/63c588039298264dbf1567a5
router.get("/:id", controller.getById);

// ruta: /getbyname/nombre
router.get("/getbyname/:name", controller.getByName);

// ruta: /students/create
router.post("/create", controller.createPost);

// ruta: /students/edit/63c588039298264dbf1567a5
router.put("/edit/:id", controller.editPut);

// ruta: /students/delete/63c66d185f6812d56a2814e3
router.delete("/delete/:id", controller.deleteStudent);

module.exports = router;