var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    By = webdriver.By;

test.describe('Login', function() {
  test.it('login', function() {
    var p = new webdriver.Builder().build();

    p.findElement(By.id('username')).sendKeys("test@getosmosis.com");
    p.findElement(By.id('password')).sendKeys("test@getosmosis.com");

    p.findElement(By.id('loginBtn')).click().then(
      function() {
        p.findElement(By.id('start-search')).click();
      }
    );
/*
    searchBox.sendKeys('webdriver');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'webdriver');
    });
*/
    driver.quit();
  });
});

