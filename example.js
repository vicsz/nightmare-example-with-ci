var Nightmare = require('nightmare');
var nightmare = Nightmare();

console.log("Starting Test")
nightmare
  .goto('http://yahoo.com')
  .type('form[action*="/search"] [name=p]', 'github nightmare')
  .click('form[action*="/search"] [type=submit]')
  .wait('#main')
  .evaluate(function () {
    return document.querySelector('#main .searchCenterMiddle li a').href
  })
  .end()
  .then(function (result) {
    console.log("Test Succesful")
    console.log(result)
  })
  .catch(function (error) {
    console.log("Test Failed")
    console.error('Search failed:', error);
  });