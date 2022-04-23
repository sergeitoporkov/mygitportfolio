console.log('main.jsloaded') ; 
function listningButtonId(evt) {

var tabMostpop = document.querySelector("#mostpop");
var tabRecent = document.querySelector("#recent");
var targetButton = evt.currentTarget.id;

if (targetButton === "mostpopbtn") {
    tabMostpop.classList.add("products_tab");  
    tabRecent.classList.remove("products_tab");
    buttons[0].classList.add("active_tab_btn");
    buttons[1].classList.remove("active_tab_btn");
}
    else if (targetButton === "recentbtn") {
    tabRecent.classList.add("products_tab");
    tabMostpop.classList.remove("products_tab");
    buttons[1].classList.add("active_tab_btn");
    buttons[0].classList.remove("active_tab_btn");
    }     
}

var buttons = document.querySelectorAll(".tab_button");
for (var i = buttons.length - 1; i >= 0; i--) {  
    buttons[i].addEventListener("click", listningButtonId);
    
}







