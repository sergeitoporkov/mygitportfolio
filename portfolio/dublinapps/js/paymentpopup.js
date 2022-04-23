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
