// 取得按鈕和模態窗口
var modallogin = document.getElementById("myModallogin");
var openModalloginBtn = document.getElementById("openModalloginBtn");
var closeModalloginBtn = document.getElementById("closeModalloginBtn");

// 當使用者點擊按鈕時打開模態窗口
openModalloginBtn.onclick = function () {
    modallogin.style.display = "block";
}

// 當使用者點擊 x 按鈕時關閉模態窗口
closeModalloginBtn.onclick = function () {
    modallogin.style.display = "none";
}

// 當使用者點擊窗口以外的區域時關閉模態窗口(不使用)
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }