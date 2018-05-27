var objects= require('./Objects.json');
var using = require('jasmine-data-provider');

describe('Login', () => {

beforeEach(() => {
    browser.ignoreSynchronization=true;
    browser.get(objects.testsiteurl);
    browser.sleep(4000);
    console.log('Test site URL is: '+objects.testsiteurl);
});
    function plusProvider() {
        return [{username:objects.userdetails.username1, password:objects.userdetails.password1},
            {username:objects.userdetails.username2, password:objects.userdetails.password2}
        ]
    }

    using(plusProvider,function (data) {
        it('should login to gmail', () => {
            element(by.xpath(objects.locators.loginpage.username)).sendKeys(data.username);
            console.log(data.password);
            element(by.id(objects.locators.loginpage.next)).click();
        });   
    });
    
});