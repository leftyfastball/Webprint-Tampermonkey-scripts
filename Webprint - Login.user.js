// ==UserScript==
// @name         Webprint - Login
// @namespace    https://webprint.und.edu/user?
// @version      1.0
// @description  Auto Login
// @author       Ryan Kilbride
// @match        https://webprint.und.edu/user*
// @grant        none
// ==/UserScript==

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


(function() {
    'use strict';
    setCookie("nextstate", "", 1);
    document.getElementById("inputUsername").value=""; //TODO set
    document.getElementById("inputPassword").value=""; //TODO set
    window.setTimeout(function() {document.forms.Form0.submit();},100);
})();
