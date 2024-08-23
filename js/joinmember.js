  // 取得按鈕和模態窗口
  var modal = document.getElementById("myModal");
  var openModalBtn = document.getElementById("openModalBtn");
  var closeModalBtn = document.getElementById("closeModalBtn");

  // 當使用者點擊按鈕時打開模態窗口
  openModalBtn.onclick = function () {
      modal.style.display = "block";
  }

  // 當使用者點擊 x 按鈕時關閉模態窗口
  closeModalBtn.onclick = function () {
      modal.style.display = "none";
  }

  // 當使用者點擊窗口以外的區域時關閉模態窗口(不使用)
  // window.onclick = function (event) {
  //     if (event.target == modal) {
  //         modal.style.display = "none";
  //     }
  // }