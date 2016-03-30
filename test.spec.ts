/// <reference path='./typings.d.ts' />

var index = require('./index');
var assert = require('assert');

describe('server', function() {
   it('should return "Hello World"', function(){
       var response = {
           send : function(text){
               assert.equal(text, 'Hello World');
           }
       }
       index.helloWorld({}, response);
    });
});

describe('demo', function() {
    for (var i = 0; i< 100; i++) {
        it('should waste time', function(){
            setTimeout(() => {
                assert.equal(true, true);
            }, 1000);
        });
    }
});