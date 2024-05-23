import { Router } from 'express'
import {
    getAsignatura,
    createAsignatura,
    updateAsignatura,
    deleteAsignatura
} from '../../../controllers/asignaturasController';

let router = Router();

router.get('/:id', getAsignatura);
router.post('/', createAsignatura);
router.put('/:id', updateAsignatura);
router.delete('/:id', deleteAsignatura);

export default router;