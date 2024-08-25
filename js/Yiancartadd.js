function addToCart() {
    // 获取商品信息
    var productName = document.getElementById("toyName").innerText;
    var productPrice = document.getElementById("toyprice").innerText;
    var quantity = parseInt(document.getElementById("buyNum").value);
    var productImage = document.getElementById("toyimg").src; // 获取商品图片的 URL

    // 从 localStorage 获取购物车数据
    var Yiancart = JSON.parse(localStorage.getItem("Yiancart")) || [];

    // 检查购物车中是否已经存在相同的商品
    var existingProduct = Yiancart.find(function(item) {
        return item.name === productName;
    });

    if (existingProduct) {
        // 如果商品已存在，增加购买数量
        // existingProduct.quantity += quantity;
        existingProduct.quantity = (parseInt(quantity)+parseInt(existingProduct.quantity)).toString() ;
        
    } else {
        // 如果商品不存在，添加新的商品到购物车
        var product = {
            name: productName,
            price: productPrice,
            quantity: quantity,
            image: productImage // 添加商品图片 URL
        };
        Yiancart.push(product);
    }

    // 更新 localStorage 中的购物车数据
    localStorage.setItem("Yiancart", JSON.stringify(Yiancart));

    // 显示成功消息
    alert("商品已加入购物车!");
}