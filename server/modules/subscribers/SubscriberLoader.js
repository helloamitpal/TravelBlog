const SubscriberController = require('./SubscriberController');

class SubscriberLoader {
  getController() {
    return new SubscriberController();
  }
}

module.exports = new SubscriberLoader();
