var locatorsCustomOne = function() {

		//we are creating a custom locator name 'ngClick'
	by.addLocator('ngClick', function(toState,parentelement) {
	
		//Below line tells to look for the element in the parent element if not in then the entire document.
		 var using = parentelement || document ;
		 var prefixes = ['ng-click'];
	      for (var p = 0; p < prefixes.length; ++p) {
	          var selector = '*[' + prefixes[p] + '="' + toState + '"]';
	          var inputs = using.querySelectorAll(selector);
	          if (inputs.length) {
	              return inputs;
	          }
	      }		
		
});
}

module.exports = new locatorsCustomOne();
