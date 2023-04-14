const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { existeCrupPorId, CrupExistValida } = require('../helpers/db-validators');
const router = Router();

const { crupsGET, crupIdGET, crupsPOST, crupPUT, crupDELETE} = require('../controllers/crup.controllers');


router.get('/', crupsGET);

router.get('/:id', crupIdGET);

router.post('/', [
    check('crup', 'La CRUP es obligatoria').not().isEmpty(),
    check('crup', 'La CRUP debe tener 18 caracteres').isLength({ min: 18 }),
    check('crup', 'La CRUP debe tener 18 caracteres').isLength({ max: 18 }),
    check('crup').custom(CrupExistValida),
    validarCampos
],crupsPOST);

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('crup', 'La CRUP es obligatoria').not().isEmpty(),
    check('crup', 'La CRUP debe tener 18 caracteres').isLength({ min: 18 }),
    check('crup', 'La CRUP debe tener 18 caracteres').isLength({ max: 18 }),
    check('id').custom(existeCrupPorId),
    validarCampos
], crupPUT);

router.delete('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeCrupPorId),
    validarCampos,

], crupDELETE);


module.exports = router;
