// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
    });
});

    const phrases = ["Web Developer", "Data Analyst", "Tech Enthusiast", "Problem Solver"];
    let currentPhraseIndex = 0;
    let currentCharacterIndex = 0;
    const typingElement = document.getElementById("typing");

    function typePhrase() {
        if (currentCharacterIndex < phrases[currentPhraseIndex].length) {
            typingElement.textContent += phrases[currentPhraseIndex].charAt(currentCharacterIndex);
            currentCharacterIndex++;
            setTimeout(typePhrase, 100);
        } else {
            setTimeout(erasePhrase, 1000);
        }
    }

    function erasePhrase() {
        if (currentCharacterIndex > 0) {
            typingElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharacterIndex - 1);
            currentCharacterIndex--;
            setTimeout(erasePhrase, 50);
        } else {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(typePhrase, 500);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        typePhrase();
    });

    
    function showProjects(domain) {
        // Hide all project containers
        const allProjects = document.querySelectorAll('.projects-container');
        allProjects.forEach(project => {
            project.style.display = 'none';
        });
    
        // Show the clicked domain's projects with animation
        const selectedProjects = document.getElementById(domain);
        selectedProjects.style.display = 'flex';
        
        // Trigger fade-in animation
        const projectCards = selectedProjects.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.animation = `fadeIn 0.5s ${index * 0.1}s forwards`;
        });
    }
    