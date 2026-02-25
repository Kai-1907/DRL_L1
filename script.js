function updateClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    
    // Formatting time: HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Formatting date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

// Initial call
updateClock();

// Update every second
setInterval(updateClock, 1000);

// Add some interaction: mouse movement parallax
document.addEventListener('mousemove', (e) => {
    const card = document.querySelector('.glass-card');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener('mouseleave', () => {
    const card = document.querySelector('.glass-card');
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card.style.transition = 'all 0.5s ease';
});

document.addEventListener('mouseenter', () => {
    const card = document.querySelector('.glass-card');
    card.style.transition = 'none';
});
