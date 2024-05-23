import { Router } from 'express'
import {
    getAlumno,
    createAlumno,
    updateAlumno,
    deleteAlumno
} from '../../../controllers/alumnoController';

let router = Router();

router.get('/:id', getAlumno);
router.post('/', createAlumno);
router.put('/:id', updateAlumno);
router.delete('/:id', deleteAlumno);

export default router;