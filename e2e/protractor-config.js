
/*

For Chrome v62-64 you need the ChromeDriver 2.35
For Chrome v61-63 you need the ChromeDriver 2.34 and so on, you check the whole list here:
https://sites.google.com/a/chromium.org/chromedriver/downloads
 
 to install protractor: 

 $ sudo npm install -g protractor@4.0.13

 to check if is correct installed, should display the current version 4.0.13 

 $ protractor --version

 this will install a webdriver-manager with the chromedriver 2.26
 we need to update to the current chrome browser version

 $  sudo webdriver-manager update --versions.chrome=2.35

 and run the webdriver-manager with the version

 $ webdriver-manager start --versions.chrome=2.35

 to run the tests we have to run this protractor-config.js

 $ protractor aisleplanner/clientapp/jstests/config/protractor-config.js

 and thats it

*/

// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../e2e/forecast.js'],
  onPrepare: function() {
    browser.driver.get("http://localhost:8000");

    //browser.driver.findElement(by.className('login')).click();

    browser.driver.findElement(by.name('city')).clear();
    browser.driver.findElement(by.name('city')).sendKeys("San Diego");    
    browser.driver.findElement(by.id('protractorButton')).click();
    browser.driver.sleep(2000);
    //browser.driver.findElement(by.id('signin')).click();

   }
}

/*
var env = require('environment.js');

// This is the configuration file showing how a suite of tests might
// handle log-in using the onPrepare field.
exports.config = {
  seleniumAddress: env.seleniumAddress,

  framework: 'jasmine',

  specs: [
    '../e2e/login.js'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

  onPrepare: function() {
    browser.driver.get(env.baseUrl);


    browser.findElement(by.css('parent-nav-links login')).click();

    //browser.driver.findElement(by.id('username')).sendKeys('Jane');
    //browser.driver.findElement(by.id('password')).sendKeys('1234');

    //browser.driver.findElement(by.id('clickme')).click();

    // Login takes some time, so wait until it's done.
    // For the test app's login, we know it's done when it redirects to
    // index.html.
    return browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return url;
      });
    }, 10000);
  }
};
*/