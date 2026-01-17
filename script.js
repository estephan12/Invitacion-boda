document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = globalThis.innerHeight;
        const elementVisible = 150; // Distance from bottom to trigger

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    globalThis.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();


    // --- Countdown Timer ---
    const weddingDate = new Date('August 25, 2026 16:00:00').getTime();

    const updateCountdown = () => {
        const now = Date.now();
        const gap = weddingDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Calculate time
        const days = Math.floor(gap / day);
        const hours = Math.floor((gap % day) / hour);
        const minutes = Math.floor((gap % hour) / minute);
        const seconds = Math.floor((gap % minute) / second);

        // Update DOM (check if elements exist to avoid errors)
        if (gap > 0) {
            document.getElementById('days').innerText = days < 10 ? '0' + days : days;
            document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
            document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
        } else {
            // Optional: Message when date is reached
            document.querySelector('.countdown-timer').innerHTML = "<h3>¡Es hoy!</h3>";
        }
    };

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Run immediately


    // --- Bank Details Modal ---
    const modal = document.getElementById('bank-modal');
    const btn = document.getElementById('open-bank-modal');
    const span = document.getElementsByClassName('close-modal')[0];

    btn.onclick = function () {
        modal.classList.add('show'); // Add class for animation
    }

    span.onclick = function () {
        modal.classList.remove('show');
    }

    globalThis.onclick = function (event) {
        if (event.target == modal) {
            modal.classList.remove('show');
        }
    }
});
