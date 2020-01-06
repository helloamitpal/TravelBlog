const data = require('../../mock.json');
const SubscriberModel = require('./SubscriberModel');

class SubscriberService {
  async getSubscriberCount() {
    const { subscribers } = data;

    return subscribers.length;
  }

  async addSubscriber(req) {
    const { name, email } = req.body;
    const { subscribers } = data;

    const existingSubscriber = subscribers.find((obj) => (obj.email === email));

    if (existingSubscriber) {
      throw new Error('subscribers is already present. Cannot be added further.');
    }

    subscribers.push(new SubscriberModel({
      name,
      email
    }));

    return 'subscriber added';
  }
}

module.exports = new SubscriberService();
