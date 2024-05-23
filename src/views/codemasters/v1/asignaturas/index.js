// src/views/codemasters/v1/asignaturas/index.js
import { Router } from 'express'
import {
    getAsignatura,
    createAsignatura,
    updateAsignatura,
    deleteAsignatura,
    getAsignaturasByProfesor,
    getAsignaturasByAlumno,
    getSingleAsignatura
} from '../../../controllers/asignaturasController';

let router = Router();

router.get('/:id', getAsignatura);
router.get('/profesor/:id', getAsignaturasByProfesor);
router.get('/alumno/:id', getAsignaturasByAlumno);
router.post('/', createAsignatura);
router.put('/:id', updateAsignatura);
router.delete('/:id', deleteAsignatura);

export default router;