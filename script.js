document.getElementById('clickable-text').addEventListener('click', function() {
    const outputText = document.getElementById('text-output');
    outputText.style.visibility = 'visible'; // Hiển thị phần chữ

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

    // Phát nhạc từ SoundCloud
    var player = document.getElementById('soundcloud-player');
    player.style.display = 'block'; // Hiển thị iframe

    // Nếu bạn muốn âm thanh phát ngay lập tức
    const backgroundMusic = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    backgroundMusic.play(); // Phát nhạc
});
