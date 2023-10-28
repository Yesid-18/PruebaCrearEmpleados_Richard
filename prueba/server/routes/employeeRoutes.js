const exprees = require ('express')
const router = exprees.Router()
const employeesControllers = require('../controllers/employeesControllers')

router.post('/', employeesControllers.crearEmployee);
router.get('/', employeesControllers.obtenerEmployees);
router.get('/:id', employeesControllers.obtenerEmployee);
router.put('/:id', employeesControllers.actualizarEmployee);
router.delete('/:id', employeesControllers.eliminarEmployee);

module.exports = router;