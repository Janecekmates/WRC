// Funkce pro kontrolu, zda je prvek na obrazovce
const drivers = document.querySelectorAll('.driver');

function checkVisibility() {
    const windowHeight = window.innerHeight;
    drivers.forEach(driver => {
        const driverTop = driver.getBoundingClientRect().top;
        if (driverTop < windowHeight * 0.8) {
            driver.classList.add('visible');
        }
    });
}

// Při načítání stránky a při posouvání spustíme kontrolu viditelnosti
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility); // Zkontrolujeme viditelnost ihned po načtení stránky
