function addToCart() {
    // 取得商品資訊
    var productName = document.getElementById("toyName").innerText;
    var productPrice = document.getElementById("toyprice").innerText;
    var quantity = parseInt(document.getElementById("buyNum").value);
    var productImage = document.getElementById("toyimg").src;

    // 從 localStorage 取得購物車資料
    var Yiancart = JSON.parse(localStorage.getItem("Yiancart")) || [];

    // 檢查購物車中是否存在相同的商品
    var existingProduct = Yiancart.find(function(item) {
        return item.name === productName;
    });

    if (existingProduct) {
        // 如果商品已存在，增加購買數量
        existingProduct.quantity = (parseInt(quantity)+parseInt(existingProduct.quantity)).toString() ;
        
    } else {
        // 如果商品不存在，添加新的商品到購物車
        var product = {
            name: productName,
            price: productPrice,
            quantity: quantity,
            image: productImage // 添加商品圖片 URL
        };
        Yiancart.push(product);
    }

    // 更新 localStorage 中的購物車資料
    localStorage.setItem("Yiancart", JSON.stringify(Yiancart));

    // 顯示加入成功消息
    alert("商品已加入購物車!");
}