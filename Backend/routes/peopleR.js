const express = require('express');
const peopleController= require('../controllers/peopleC');
const router = express.Router();

router.get('/', peopleController.getPeople);
router.get('/:id', peopleController.getPerson);
router.post('/', peopleController.createPerson);
router.put('/:id', peopleController.updatePerson);
router.delete('/:id', peopleController.deletePerson);

module.exports = router;