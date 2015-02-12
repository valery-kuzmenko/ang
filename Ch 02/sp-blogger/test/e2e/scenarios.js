'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('The Single Page Blogger E2E Test', function() {
    browser.get('/'); //go to http://localhost:8000 file name where we conduct tests
    protractor = protractor.getInstance();
    it('Should have 4 posts', function() {
	var posts = element.all(by.repeater('post in posts'));
	expect(posts.count()).toBe(4); // we have 4 hard coded posts
    });
    it('Should redirect to #/posts/1/sample-title1', function() {
	var posts = element.all(by.repeater('post in posts'));
	posts.first().then(function(postElem) {
	    postElem.findElement(by.tagName('a')).then(function(a) {
		a.click(); //click the title link of 1st post
		expect(protractor.getCurrentUrl()).toMatch
		    ('/posts/1/simple-title1');
	    });
	});
    });
});