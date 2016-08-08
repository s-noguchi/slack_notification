const request = require('request');

exports.handler = function(event, context) {

  // Message Configuration
  var message = '@channel:' + "\n";
  message += 'MESSAGE' + "\n";

  // WebHook URL
  var slackWebhookUrl = 'YOUR WEBHOOK URL';

  // Request Configuration
  const options = {
    url: slackWebhookUrl,
    headers: {
      'Content-type': 'application/json'
    },
    body: {
      "text": message
    },
    json: true
  };

  // Send Message
  request.post(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      context.done(null, body);
    } else {
      console.log('error: ' + response.statusCode);
      context.done(null, 'eroor');
    }
  });
}
