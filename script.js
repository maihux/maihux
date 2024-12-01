window.onload = function() {
    const outputText = document.getElementById('text-output');
    const textToShow = "Xin chào! Tôi là Nhân dz";

    let index = 0;
    function showText() {
        if (index < textToShow.length) {
            outputText.textContent += textToShow[index];
            index++;
            setTimeout(showText, 50); // Chạy từng ký tự một
        }
    }

    showText(); // Bắt đầu hiệu ứng chạy chữ
};

