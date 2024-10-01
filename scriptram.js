const shootBtn = document.getElementById('shoot-btn');
const arrow = document.getElementById('arrow');
const ravana = document.getElementById('ravana');
const message = document.getElementById('message');

shootBtn.addEventListener('click', shootArrow);

function shootArrow() {
    shootBtn.disabled = true;
    arrow.style.display = 'block';
    let position = 100; // Starting position of the arrow
    const ravanaPosition = 820; // The position of the Ravana

    const arrowInterval = setInterval(() => {
        // Stop the arrow when it reaches the Ravana's position
        if (position >= ravanaPosition - 80) { // 80 is the width of Ravana image
            clearInterval(arrowInterval);
            ravana.style.backgroundImage = "url('D:\weekly_proj\navratri\burning_ravana.png')"; // Use the burning image
            setTimeout(showMessage, 1000);
        } else {
            position += 8; // Increment the position of the arrow
            arrow.style.left = position + 'px'; // Update arrow position
        }
    }, 20);
}

function showMessage() {
    message.innerHTML = 'Happy Dussehra!<br>🎉✨🎊';
    message.style.display = 'block';
}
