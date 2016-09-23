// ==UserScript==
// @name         Webprint - Cookie State Machine
// @namespace    https://webprint.und.edu/
// @version      1.0
// @description  Automate options for Webprint that I never find myself changing.
// @author       Ryan Kilbride
// @match        https://webprint.und.edu/app*
// @grant        none
// ==/UserScript==

//From W3Schools
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

//From W3Schools
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

(function (){
    state = getCookie("nextstate");
    switch (state){
        case "":
            setCookie("nextstate", "chooseprinter", 1);
            location.replace("https://webprint.und.edu/app?service=action/1/UserWebPrint/0/$ActionLink");
            break;
        case "chooseprinter":
            setCookie("nextstate", "numcopies", 1);
            document.forms.Form0.elements.$RadioGroup.value=0;
            window.setTimeout(function() {document.Form0.submit(1);}, 100);
            break;
        case "numcopies":
            setCookie("nextstate", "usermode", 1);
            window.setTimeout(function() {document.Form0.elements.$Submit.click();}, 100);
            break;
    }
})();

