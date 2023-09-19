const express = require('express');
const router = express.Router();
const userRouter = require('../routes/user');
const recipesRouter = require('../routes/recipes');
const categorysRouter = require('../routes/categorys');
const commentsRouter = require('../routes/comments');
const likedsRouter = require('../routes/likeds');
const bookmarksRouter = require('../routes/bookmarks');

router.use('/user', userRouter);
router.use('/categorys', categorysRouter);
router.use('/recipes', recipesRouter);
router.use('/comments', commentsRouter);
router.use('/likeds', likedsRouter);
router.use('/bookmarks', bookmarksRouter);
module.exports = router;
