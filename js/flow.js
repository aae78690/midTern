let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    let autoSlide = setInterval(nextSlide, 5000); // 每3秒自動切換圖片

    function showSlide(index) {
        currentIndex = index;
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalImages - 1;
        }
        const newTransformValue = `translateX(-${currentIndex * 100}%)`;
        document.querySelector('.carousel-images').style.transform = newTransformValue;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // 當滑鼠移入圖片時停止自動切換
    document.getElementById('carousel').addEventListener('mouseover', () => {
        clearInterval(autoSlide);
    });

    // 當滑鼠移出圖片時恢復自動切換
    document.getElementById('carousel').addEventListener('mouseout', () => {
        autoSlide = setInterval(nextSlide, 3000);
    });

    // 讓圖片大小隨視窗大小縮放
    window.addEventListener('resize', () => {
        showSlide(currentIndex);
    });