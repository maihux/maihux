document.getElementById('clickable-text').addEventListener('click', function() {
    const outputText = document.getElementById('text-output');
    outputText.style.visibility = 'visible'; // Hiện phần chữ

    const textToShow = `
Xin chào! Tôi là Nhân dz
    `;

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
    const backgroundMusic = new Audio('https://replay.dropbox.com/share/l9UTOgHKqXbcy4Gv?variant=v2&media_type=audio'); // Thay đổi URL ở đây
    backgroundMusic.loop = true; // Lặp lại nhạc
    backgroundMusic.play(); // Phát nhạc
});
