function fixes() {
    text_area = document.getElementById("message");
    text_area.innerHTML = "";
    return;
}

function scrollHandler(name) {
    var element = document.getElementById(name);
  
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
      
    var opacity = 1;
      
    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }

    else if (scrollTop < distanceToTop) {
        opacity = 1 - (distanceToTop  - scrollTop) / elementHeight;
    }
      
    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
}

function scrollHandlerCaller0() {
    scrollHandler('header-container');
}
function scrollHandlerCaller1() {
    scrollHandler('resume');
}
function scrollHandlerCaller2() {
    scrollHandler('about');
}
function scrollHandlerCaller3() {
    scrollHandler('profiles');
}
function scrollHandlerCaller4() {
    scrollHandler('frames');
}
function scrollHandlerCaller5() {
    scrollHandler('intern');
}
function scrollHandlerCaller6() {
    scrollHandler('tab1');
}
function scrollHandlerCaller7() {
    scrollHandler('tab2');
}
function scrollHandlerCaller8() {
    scrollHandler('contact');
}
  
window.addEventListener('scroll', scrollHandlerCaller0);
window.addEventListener('scroll', scrollHandlerCaller1);
window.addEventListener('scroll', scrollHandlerCaller2);
window.addEventListener('scroll', scrollHandlerCaller3);
window.addEventListener('scroll', scrollHandlerCaller4);
window.addEventListener('scroll', scrollHandlerCaller5);
window.addEventListener('scroll', scrollHandlerCaller6);
window.addEventListener('scroll', scrollHandlerCaller7);
window.addEventListener('scroll', scrollHandlerCaller8);

function initiateMail() {
    count = 0;

    ln = document.getElementById("last-name").value;
    fn = document.getElementById("first-name").value;
    el = document.getElementById("email").value;
    message = document.getElementById("message").value;

    if(!ln.match(/[A-Z a-z]+$/)) {
        console.log("invalid last name");
        var error1 = document.getElementById("error1");
        error1.style = "visibility: visible;"
    } else {
        console.log("valid last name");
        var error1 = document.getElementById("error1");
        error1.style = "visibility: hidden;"
        count ++;
    }

    if(!fn.match(/[A-Z a-z]+$/)) {
        console.log("invalid first name");
        var error2 = document.getElementById("error2");
        error2.style = "visibility: visible;"
    } else {
        console.log("valid first name");
        var error2 = document.getElementById("error2");
        error2.style = "visibility: hidden;";
        count ++;
    }

    if(!el.match(/[A-Z a-z 0-9 \.]+@[A-Z a-z]+\.[A-Z a-z \.]+$/)) {
        console.log("invalid email id");
        var error3 = document.getElementById("error3");
        error3.style = "visibility: visible;"
    } else {
        console.log("valid message");
        var error3 = document.getElementById("error3");
        error3.style = "visibility: hidden;";
        count ++;
    }

    if(!/[A-Z a-z]+/g.test(message)) {
        console.log("invalid email id");
        var error4 = document.getElementById("error4");
        error4.style = "visibility: visible;"
    } else {
        console.log("valid message");
        var error4 = document.getElementById("error4");
        error4.style = "visibility: hidden;";
        count ++;
    }

    console.log(ln);
    console.log(fn);
    console.log(el);
    console.log(message);

    if(count == 4) {
        document.getElementById("message").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("first-name").value = "";
        document.getElementById("email").value = "";
        alert("Message Sent Successfully!!");
        console.log("Sent");
    }

}