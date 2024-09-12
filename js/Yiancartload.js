// 取得按鈕和模態窗口
var modalcart = document.getElementById("modalcart");
var openModalcartBtn = document.getElementById("openYiancartBtn");
var closeModalcartBtn = document.getElementById("closeModalcartBtn");

// 當使用者點擊按鈕時打開模態窗口
openModalcartBtn.onclick = function () {
    modalcart.style.display = "block";
    loadCart();
    
}

// 當使用者點擊 x 按鈕時關閉模態窗口
closeModalcartBtn.onclick = function () {
    modalcart.style.display = "none";
}

function loadCart() {
    var Yiancart = JSON.parse(localStorage.getItem("Yiancart")) || [];
    var YiancartContainer = document.getElementById("YiancartItems");

    YiancartContainer.innerHTML = ""; // 清空現有內容

    if (Yiancart.length === 0) {
        YiancartContainer.innerHTML = "<h3>購物車是空的</h3>";
    } else {
        Yiancart.forEach(function(item, index) {
            var itemElement = document.createElement("div");
            itemElement.innerHTML = `
                <img src="${item.image}" alt="商品圖片" width="100" style="display: inline-block; vertical-align: middle;">
                <div style="display: inline-block; vertical-align: middle;">
                <p>商品名稱： ${item.name}</p>
                <p> ${item.price}&nbsp&nbsp
                購買數量： ${item.quantity}</p>
                </div>
                <br>
                <button class="removeItem" onclick="removeItem(${index})">刪除</button>
            `;
            YiancartContainer.appendChild(itemElement);
        });
    }
}

function removeItem(index) {
    var Yiancart = JSON.parse(localStorage.getItem("Yiancart")) || [];
    Yiancart.splice(index, 1); // 移除指定索引的商品
    localStorage.setItem("Yiancart", JSON.stringify(Yiancart));
    loadCart(); // 重新加載購物車
}

function clearCart() {
    localStorage.removeItem("Yiancart"); // 清空購物車
    loadCart(); // 重新加載購物車
}

 
