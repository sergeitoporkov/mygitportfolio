// Payment window manipulation

function showPaymentWindow(evt) {
    paymentWindow.style.display = "block";
    evt.preventDefault();
}
function hidePaymentWindow() {
    paymentWindow.style.display = "none";
}
var paymentLink = document.querySelectorAll(".blue_btn_product_inn");
var paymentWindow = document.querySelector(".payment_modal_window");
var paymentWindowCloseBtn = document.querySelector(".payment_modal_window_close");

for (var i = paymentLink.length - 1; i >= 0; i--) {
	paymentLink[i].addEventListener("click", showPaymentWindow);
}
paymentWindowCloseBtn.addEventListener("click", hidePaymentWindow);



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



// Dialog window manipulation

function showDialogWindow(evt) {
    dialogWindow.style.display = "block";
    evt.preventDefault();
}
function hideDialogWindow() {
    dialogWindow.style.display = "none";
}
var dialogLink = document.querySelectorAll(".blue_btn_order_now");
var dialogWindow = document.querySelector(".yes_no_modal_window");
var dialogWindowCloseBtn = document.querySelector(".yes_no_modal_window_close");

for (var i = dialogLink.length - 1; i >= 0; i--) {
    dialogLink[i].addEventListener("click", showDialogWindow);
}
dialogWindowCloseBtn.addEventListener("click", hideDialogWindow);