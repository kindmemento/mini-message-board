const express = require('express');
const router = express.Router();
const format = require('date-fns/format')

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: 'Sent on ' + format(new Date, 'PPpp')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: 'Sent on ' + format(new Date, 'PPpp')
  }
];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* POST new message */
router.post('/new', (req, res) => {
  const newMessage = {
    text: req.body.messageText,
    user: req.body.username,
    added: 'Sent on ' + format(new Date, 'PPpp')
  }
  messages.unshift(newMessage)
  res.redirect('/')
})

module.exports = router;
