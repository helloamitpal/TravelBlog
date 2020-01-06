const router = require('express').Router();

const articleRouter = require('./modules/articles/ArticleRouter');
const subscriberRouter = require('./modules/subscribers/SubscriberRouter');
const categoryRouter = require('./modules/categories/CategoryRouter');

router.use('/article/', articleRouter);
router.use('/subscriber/', subscriberRouter);
router.use('/category/', categoryRouter);

module.exports = router;
