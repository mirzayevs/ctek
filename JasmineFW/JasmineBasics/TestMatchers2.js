describe('Validating the Calculator app', () => {

    var title;

    beforeEach(function(){
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
        title = browser.getTitle();
    });
    
    
        it('validate Exact Title', () => {      
            title.then(function (text) {
                console.log(text);
                expect(title).toEqual('Protractor practice website - Calculator');
            });
        });

        it('validate Title should not match', () => {      
            title.then(function (text) {
                console.log(text);
                expect(title).not.toEqual('Protractor practice website - Calculator');
            });
        });


        it('validate Title partial match', () => {      
            title.then(function (text) {
                console.log(text);
                expect(title).toMatch('practice');
            });
        });

    });