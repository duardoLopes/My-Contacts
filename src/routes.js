const { Router } = require('express');

const ContactControlleer = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

// registro de rotas
router.get('/contacts', ContactControlleer.index);
router.get('/contacts/:id', ContactControlleer.show);
router.delete('/contacts/:id', ContactControlleer.delete);
router.post('/contacts', ContactControlleer.store);
router.put('/contacts/:id', ContactControlleer.update);

router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);

module.exports = router;
