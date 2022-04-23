// Login window manipulation

function showLoginWindow(evt) {
    loginWindow.style.display = "block";
    evt.preventDefault();
}
function hideLoginWindow() {
    loginWindow.style.display = "none";
}
var loginLink = document.querySelectorAll(".login_btn");
var loginWindow = document.querySelector(".login_modal_window");
var loginWidowCloseBtn = document.querySelector(".login_modal_window_close");

for (var i = loginLink.length - 1; i >= 0; i--) {
    loginLink[i].addEventListener("click", showLoginWindow);
}
loginWidowCloseBtn.addEventListener("click", hideLoginWindow);
