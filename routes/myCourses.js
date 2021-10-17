const express = require('express');
const { route } = require('.');
const router = express.Router();


const myCoursesHandler = require('./handler/my-courses');

router.post('/',myCoursesHandler.create);
router.get('/', myCoursesHandler.get);


module.exports = router;
