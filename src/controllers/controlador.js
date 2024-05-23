const Asignatura = require('../models/asignaturas');
const Alumno = require('../models/alumnos');
const Profesor = require('../models/profesores');

const getAsignaturaWithAlumnosAndProfesor = async (asignaturaId) => {
    try {
        const asignatura = await Asignatura.findOne({ _id: asignaturaId });
        const alumnos = await Alumno.find({ asignatura: asignaturaId });
        const profesor = await Profesor.findOne({ asignaturas: asignaturaId });

        const result = {
            asignatura,
            alumnos,
            profesor
        };

        return result;
    } catch (error) {
        console.error(error);
    }
};

module.exports = getAsignaturaWithAlumnosAndProfesor;