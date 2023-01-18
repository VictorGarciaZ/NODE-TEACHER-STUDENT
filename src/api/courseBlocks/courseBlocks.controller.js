const CourseBlock = require("./courseBlocks.model")

const indexGet = async (req, res, next)=>{
    try {
        const allCourseBlocks = await CourseBlock.find().populate("teacher");
        return res.status(200).json(allCourseBlocks);
    } catch (error) {
        return next(error);
    }
};

const createPost = async (req, res, next)=>{
    try {
        const courseBlockToBeCreated = new CourseBlock(req.body);
        const created = await courseBlockToBeCreated.save();
        return res.status(201).json(created);
    } catch (error) {
        return next(error);
    }

};

module.exports = {
    indexGet,
    createPost
}