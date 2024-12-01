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

    // Hiển thị và phát nhạc từ SoundCloud khi click
    document.getElementById('soundcloud-player').style.display = 'block'; // Hiển thị player

    // Đổi track ID của bạn tại đây
    const trackUrl = "https://api.soundcloud.com/tracks/YOUR_TRACK_ID"; // Thay thế bằng track URL của bạn
    const player = document.querySelector('iframe');
    player.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=true`;
});
