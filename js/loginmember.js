// 取得按鈕和模態窗口
var modallogin = document.getElementById("myModallogin");
var openModalloginBtn = document.getElementById("openModalloginBtn");
var closeModalloginBtn = document.getElementById("closeModalloginBtn");
var modal = document.getElementById("myModal");

// 取得忘記密碼的按鈕和擬態窗口
var modalfg = document.getElementById('myModalfg');
var openModalfgBtn = document.getElementById("forgetpw");
var closeModalfgBtn = document.getElementById("closeModalfgBtn");

// 當使用者點擊按鈕時打開模態窗口
openModalloginBtn.onclick = function () {
    modallogin.style.display = "block";
}

// 當使用者點擊 x 按鈕時關閉模態窗口
closeModalloginBtn.onclick = function () {
    modallogin.style.display = "none";
}
// 當使用者點擊加入會員按鈕時關閉此窗口開啟加入會員窗口
document.getElementById('joinin').onclick = function () {
    modallogin.style.display = "none";
    modal.style.display = "block";
}
// 當使用者點擊忘記密碼按鈕時關閉此窗口並開啟忘記密碼窗口
openModalfgBtn.onclick = function () {
    modallogin.style.display = "none";
    modalfg.style.display = "block";
}
closeModalfgBtn.onclick=function(){
    modalfg.style.display="none";
}




// 當使用者點擊窗口以外的區域時關閉模態窗口(不使用)
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }