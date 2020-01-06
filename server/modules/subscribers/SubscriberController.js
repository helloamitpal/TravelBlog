const HttpStatusCode = require('../../constants/httpStatusCode');
const SubscriberService = require('./SubscriberService');
const ResponseHandler = require('../../util/responseHandler');

class SubscriberController {
  getSubscriberCount(req, res) {
    SubscriberService.getSubscriberCount().then((data) => {
      return ResponseHandler(res, HttpStatusCode.success.SUCCESS, data);
    }).catch(({ message }) => {
      return ResponseHandler(res, HttpStatusCode.error.INTERNAL_SERVER_ERROR, message);
    });
  }

  addSubscriber(req, res) {
    SubscriberService.addSubscriber(req).then((data) => {
      return ResponseHandler(res, HttpStatusCode.success.SUCCESS, data);
    }).catch(({ message }) => {
      return ResponseHandler(res, HttpStatusCode.error.INTERNAL_SERVER_ERROR, message);
    });
  }
}

module.exports = SubscriberController;
