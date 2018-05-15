describe('Practicing locators', () => {
    it('should register student', () => {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        element(by.model('Auth.user.name')).sendKeys('angular');
        element(by.model('Auth.user.password')).sendKeys('password');
        element(by.model('model[options.key]')).sendKeys('Mike');
        element(by.buttonText('Login')).click();
        browser.sleep('4000');
        element(by.className('ng-scope')).getText().then(function(text){
            console.log(text);
            expect(text).toContain("Home");
        });
    });

    
    fit("Validating a Calculator",function(){

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("7");
        element(by.id("gobutton")).click();
        element(by.binding("latest")).getText().then(function(text){
            console.log(text);
        })
    }) ;




});