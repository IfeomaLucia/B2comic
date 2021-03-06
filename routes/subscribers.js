var express = require('express');
var router = express.Router();
var subscriberController = require('../Controllers/SubscriberController');

/* GET subscribers listing. */
router.get('/', subscriberController.getSubscribers);

router.post('/subscribe', subscriberController.addSubscriber);

router.get('/sendmail', subscriberController.sendMail);
// router.delete('/delete/:id', subscriberController.deletesubscriber);

// router.get('/search', subscriberController.getsubscriberByParam);

// router.put('/update/:id', subscriberController.updatesubscriber);

// router.put('/addFriend', subscriberController.addFriend);

module.exports = router;
