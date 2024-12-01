document.getElementById('clickable-text').addEventListener('click', function() {
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

    // Phát nhạc khi nhấn vào nút "Click Here"
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.play(); // Phát nhạc khi người dùng nhấn
});
