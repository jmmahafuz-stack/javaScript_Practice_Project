function initCommon() {
    console.log("Common code is running");
}


function Common(){
    const items = document.querySelectorAll(".item");

    items.forEach(function (item) {
        item.style.color = "blue";
    });
}

function Common2() {
    const peras = document.getElementById("pera");

    if (peras) {
        peras.textContent = "Hi this is Home Page and i'am Md Mahafuz Islam";
    }
}



function initAboutPage(){
   Common();
}

function initHomePage(){
    Common();
    Common2();
}

function initIndexPage(){
    Common();
}

function initLoginPage(){
    Common();
}




const page = document.body.dataset.page;

initCommon();

if (page === "index") {
    initIndexPage();

}

// // alternative
// const pagei= window.location.pathname;

// if (pagei.endsWith("/home.html")) {
//     initHomePage();
// }

if (page === "home") {
    initHomePage();
}

if(page === "about"){
    initAboutPage();
}

if(page === "login"){
    initLoginPage();
}