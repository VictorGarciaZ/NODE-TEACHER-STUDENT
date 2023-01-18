const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Debes poner el nombre del alumno"],
        },

        phoneNumber: {
            type: Number,
            required: true,
        },
    
        contactEmail: {
            type: String,
            required: true,
            unique: true,
        },

        startingDate: {
            type: Date, // UNIX format
        },
    },
    {
        timestamps: true,
    }
);

const Student = mongoose.model("students", studentSchema);

module.exports = Student;