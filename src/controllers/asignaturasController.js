// src/controllers/asignaturasController.js
const Asignatura = require('../models/asignaturas');
const Alumno = require('../models/alumnos');
const Profesor = require('../models/profesores');

const getAsignaturasByProfesor = async (profesorId) => {
    // ...
};

const getAsignaturasByAlumno = async (alumnoId) => {
    // ...
};

const getSingleAsignatura = async (asignaturaId) => {
    // ...
};

module.exports = {
    getAsignaturasByProfesor,
    getAsignaturasByAlumno,
    getSingleAsignatura
};