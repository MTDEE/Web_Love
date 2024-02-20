var sentences = ["Sure?", "Really?", "No way!", "Absolutely not!", "Of course not!", "Definitely not!"];
var previousSentenceIndex = -1; // เก็บ index ของประโยคก่อนหน้า
var noButtonClickCount = 0; // เก็บจำนวนครั้งที่ปุ่ม "No" ถูกคลิก
var yesButtonSizeIncrease = 0; // เก็บจำนวนครั้งที่ปุ่ม "Yes" ถูกขยายขนาด

function getRandomSentence() {
    var randomIndex = Math.floor(Math.random() * sentences.length);
    
    // ตรวจสอบเพื่อให้ไม่ซ้ำกับประโยคก่อนหน้า
    while (randomIndex === previousSentenceIndex) {
        randomIndex = Math.floor(Math.random() * sentences.length);
    }
    
    // บันทึก index ปัจจุบันเพื่อใช้ในการตรวจสอบคำซ้ำในครั้งถัดไป
    previousSentenceIndex = randomIndex;
    
    return sentences[randomIndex];
}

function increaseSize() {
    var targetButton = event.target;
    
    if (targetButton.classList.contains('No')) {
        noButtonClickCount++; // เพิ่มจำนวนครั้งที่ปุ่ม "No" ถูกคลิก

        if (noButtonClickCount >= 5) {
            // ซ่อนปุ่ม "No" เมื่อถูกคลิก 5 ครั้ง
            var noButton = document.querySelector('.No');
            noButton.style.display = 'none';

            // เพิ่มขนาดของปุ่ม "Yes" เพื่อให้เต็มจอ
            var yesButton = document.querySelector('.Yes');
            yesButton.style.width = '100%';
            yesButton.style.height = '100vh';
            yesButton.style.fontSize = '5vw'; // ให้ขนาดของตัวอักษรของปุ่ม "Yes" ขึ้นอยู่กับความกว้างของหน้าจอ
            yesButton.textContent = 'Yes'; // เปลี่ยนข้อความบนปุ่ม "Yes" เป็น "Yes"

            // ตำแหน่งปุ่ม "Yes" อยู่กลางจอ
            yesButton.style.position = 'absolute';
            yesButton.style.left = '50%';
            yesButton.style.top = '50%';
            yesButton.style.transform = 'translate(-50%, -50%)';
        } else {
            // เปลี่ยนข้อความบนปุ่ม "No" เมื่อถูกคลิก
            var noButton = document.querySelector('.No');
            var newText = getRandomSentence();
            noButton.textContent = newText;
        }
    } else if (targetButton.classList.contains('Yes')) {
        window.location.href = 'page.html'; // เปลี่ยน 'url_to_redirect' เป็น URL ของหน้าเว็บที่ต้องการให้ redirect ไป
    }
}


