const express = require('express');
const { route } = require('.');
const router = express.Router();


const lessonsHandler = require('./handler/lessons');
const { update } = require('./handler/users');

router.post('/',lessonsHandler.create);
router.put('/:id',lessonsHandler.update);
router.delete('/:id', lessonsHandler.destroy);
router.get('/:id', lessonsHandler.get);
router.get('/', lessonsHandler.getAll);


module.exports = router;
