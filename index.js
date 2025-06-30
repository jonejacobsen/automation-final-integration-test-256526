```javascript
const zapier = require('zapier-platform-core');

const authentication = require('./authentication');
const triggers = require('./triggers');
const actions = require('./actions');
const App = {
  version: require('./package.json').version,
  platformVersion: zapier.version,
  authentication: authentication,
  triggers: triggers,
  actions: actions,
  beforeRequest: [
    (request) => {
      request.headers['Content-Type'] = 'application/json';
      return request;
    },
  ],
  afterResponse: [
    (response) => {
      if (response.status >= 400) {
        throw new Error(`Unexpected status code ${response.status}`);
      }
      return response;
    },
  ],
};

module.exports = App;
```

Please note that this is the main `index.js` file for the Zapier CLI application. The actual logic for authentication, triggers, and actions would be in their respective files (`authentication.js`, `triggers.js`, `actions.js`) in the same directory. This structure is following the best practices of Zapier CLI applications.