// spec.js
describe('Weather Forecast test', function() {
  it('Should retrieve 2 results', function() {
    
    var link = browser.element(by.linkText('2'));
    link.click();
    browser.driver.sleep(1000);
	browser.element.all(by.repeater('w in weatherResults.list')).count().then(function(count) {
		console.log(count)
		expect(count).toEqual(2);
	});    

    //var isLogged = browser.element(by.id('logged_in')); 
    //expect(isLogged.isPresent()).toEqual(true);
    
  });

  it('Should retrieve 5 results', function() {
    
    var link = browser.element(by.linkText('5'));
    link.click();
	browser.driver.sleep(1000);
	browser.element.all(by.repeater('w in weatherResults.list')).count().then(function(count) {
		console.log(count)
		expect(count).toEqual(5);
	});    
    
  });

  it('Should retrieve 7 results', function() {
    
    var link = browser.element(by.linkText('7'));
    link.click();
    browser.driver.sleep(1000);
	browser.element.all(by.repeater('w in weatherResults.list')).count().then(function(count) {
		console.log(count)
		expect(count).toEqual(7);
	});    
    
  });

  it('Should say in a days in the second element', function() {
   
    browser.driver.sleep(1000);
	browser.element.all(by.repeater('w in weatherResults.list')).then(function(list) {
		var title = list[1].element(by.className('panel-title'));
  	    expect(title.getText()).toEqual('in a day');
	});    
    
  });

  /*
  it('Retrieve 5 results', function() {
    
    var faves = browser.element.all((by.className('faves'))).first(); 
    faves.click();
    
  });
  */

});