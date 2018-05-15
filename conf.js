exports.config = {
    // The address of a running selenium server. 
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect : true,
   //Capabilities to be passed to the webdriver instance. 
        capabilities: {
             'browserName': 'chrome'    }, 
    //Spec patterns are relative to the current working directly when protractor is called. 
         specs: ['JasmineFW/JasmineBasics/calculatorTest2.js'],     
    //framework to be used:
	//framework: 'jasmine2',
    // Options to be passed to Jasmine-node. 
    jasmineNodeOpts: {
        showColors: true, 
        defaultTimeoutInterval: 30000    
}};
