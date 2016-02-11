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

    ajaxRequest(endpoint, data){
        return co(function * (){
            yield this.nightmare.goto("https://www.instagram.com/")
                .evaluate(function(endpoint, data){
                    $.ajax({
                        'url' : endpoint,
                        'type' : 'post',
                        'data' : data,
                        'ascync': false
                    });
                }, endpoint, data);
        }.bind(this));
    }

    login(username, password){
        return this.ajaxRequest('/accounts/login/ajax/', {username, password})
    }

    comment(id, text){
        return this.ajaxRequest(`/web/comments/${id}/add/`, {comment_text: text});
    }

    like(id){
        return this.ajaxRequest(`/web/likes/${id}/like/`, {});
    }
}

module.exports = Instagram;