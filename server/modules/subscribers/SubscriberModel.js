class SubscriberModel {
  constructor({ name, email }) {
    this.name = name || '';
    this.email = email || '';
  }
}

module.exports = SubscriberModel;
