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