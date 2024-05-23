import { Router } from 'express'
import {
    getProfesor,
    createProfesor,
    updateProfesor,
    deleteProfesor
} from '../../../controllers/profesorController';

let router = Router();

router.get('/:id', getProfesor);
router.post('/', createProfesor);
router.put('/:id', updateProfesor);
router.delete('/:id', deleteProfesor);

export default router;