/**
 * Created by strrife on 2/10/16.
 */

"use strict";

var Nightmare = require('nightmare');
var co = require('co');

class Instagram {

    constructor(){
        this.nightmare = Nightmare({ width: 1400, height: 1000, 'use-content-size': true });
    }

    login(username, password){
        return co(function * (){
            yield this.nightmare
                .goto('https://instagram.com/accounts/login/')
                .evaluate(function(config){
                    $.ajax({
                        'url' : '/accounts/login/ajax/',
                        'type' : 'post',
                        'data' : config,
                        success : function(r){
                            document.title = "LOADED";
                        }
                    });
                }, { username, password })
                .wait(function(){
                    return document.title === 'LOADED';
                });
        }.bind(this));
    }
}

module.exports = Instagram;