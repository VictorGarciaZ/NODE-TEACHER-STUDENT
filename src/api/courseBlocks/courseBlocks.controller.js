const CourseBlock = require("./courseBlocks.model")

const indexGet = async (req, res, next)=>{
    try {
        const allCourseBlocks = await CourseBlock.find().populate("teacher");
        return res.status(200).json(allCourseBlocks);
    } catch (error) {
        return next(error);
    }
};
const getById = async (req, res, next) => {
    try {
        // recogemos el id de los parámetros de la petición -> req -> request
        const { id } = req.params;
        const found = await CourseBlock.findById(id);
        return res.status(200).json(found);
    } catch (error) {
        return next(error);
    }
};

const getByName = async (req, res, next) => {
    try {
        // recogemos el id de los parámetros de la petición -> req -> request
        const { name } = req.params;
        const found = await CourseBlock.find({name: name});
        return res.status(200).json(found);
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
const editPut = async(req, res, next) => {
    try {
        const { id } = req.params; // req.params.id
        const fields = {...req.body};
        const options = { new: true };
        console.log('fields en course', options);
        const edited = await CourseBlock.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);
    }
    catch(error) {
        return next(error);
    }
}
const deleteCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await CourseBlock.deleteOne({ _id: id });
        if (deleted.deletedCount) {
            return res.status(200).json("Elemento eliminado con éxito");
        } else {
            return res.status(200).json("No se encuentra el elemento para eliminar");
        }
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    indexGet,
    getById,
    getByName,
    createPost,
    editPut,
    deleteCourse
}