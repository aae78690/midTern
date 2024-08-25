
function filterProducts(category) {
    const products = document.querySelectorAll('.toyBox');

    products.forEach(product => {
        if (category === 'all') {
            product.classList.add('show');
        } else {
            if (product.classList.contains(category)) {
                product.classList.add('show');
            } else {
                product.classList.remove('show');
            }
        }
    });
}

// 初始顯示全部商品
filterProducts('all');