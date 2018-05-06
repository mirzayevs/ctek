describe('Enter GURU99 Name', function() {
	it('should add a Name as GURU99', function() {
		 browser.get('https://angularjs.org');
 		 element(by.model('yourName')).sendKeys('Cybertek');
          element(by.binding('yourName')).getText().then(function(text){
            console.log(text);
          });
        
          //  var guru= element(by.binding('yourName'));
		//  expect(guru.getText()).toEqual('Hello GURU99!');
  });
});