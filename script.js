document.getElementById('clickable-text').addEventListener('click', function() {
    // Phần hiện chữ
    const outputText = document.getElementById('text-output');
    outputText.style.visibility = 'visible'; // Hiện phần chữ

    const textToShow = `Xin chào! Tôi là Nhân dz`;
    let index = 0;

    function showText() {
        if (index < textToShow.length) {
            outputText.textContent += textToShow[index];
            index++;
            setTimeout(showText, 50); // Chạy từng ký tự một
        }
    }

    showText(); // Bắt đầu hiệu ứng chạy chữ

    // Phát nhạc nền từ URL
    const backgroundMusic = new Audio('https://on.soundcloud.com/hCxkWrnMSHBgxVg87'); // URL thay vì file local
    backgroundMusic.loop = true; // Lặp lại nhạc
    backgroundMusic.play().catch((error) => {
        console.error('Lỗi khi phát nhạc:', error);
    }); // Phát nhạc và xử lý lỗi nếu có
});
