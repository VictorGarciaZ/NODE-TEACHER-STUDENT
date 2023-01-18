const express = require ("express");

const controller = require ("./courseBlocks.controller");

const router = express.Router();

router.get("/", controller.indexGet);

router.get("/create", controller.createPost);


module.exports = router;

