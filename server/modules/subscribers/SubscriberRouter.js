const router = require('express').Router();
const SubscriberLoader = require('./SubscriberLoader');

router.get('/getCount', (req, res, next) => {
  SubscriberLoader.getController().getSubscriberCount(req, res);
});

router.post('/add', (req, res, next) => {
  SubscriberLoader.getController(req).addSubscriber(req, res);
});

module.exports = router;
