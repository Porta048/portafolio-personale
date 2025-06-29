// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');
// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorFollower = document.querySelector('.cursor-follower');
const backToTopBtn = document.querySelector('.back-to-top-btn');
window.addEventListener('mousemove', (e)=>{
    if (cursorDot) {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    }
    if (cursorFollower) {
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
    }
});
const interactiveElements = document.querySelectorAll('a, button, .skill-item');
const headersToAnimate = document.querySelectorAll('.section-header h2, .section-header p');
// Prepare headers for text animation
headersToAnimate.forEach((header)=>{
    const text = header.textContent || '';
    header.textContent = '';
    header.style.opacity = '1'; // Ensure wrapper is visible
    text.split('').forEach((char)=>{
        const span = document.createElement('span');
        span.textContent = char;
        // Use non-breaking space for actual spaces
        if (char === ' ') span.innerHTML = '&nbsp;';
        header.appendChild(span);
    });
});
interactiveElements.forEach((el)=>{
    el.addEventListener('mouseenter', ()=>{
        cursorDot?.classList.add('hovered');
        cursorFollower?.classList.add('hovered');
    });
    el.addEventListener('mouseleave', ()=>{
        cursorDot?.classList.remove('hovered');
        cursorFollower?.classList.remove('hovered');
    });
});
// Interactive Spotlight for Hero Section
hero?.addEventListener('mousemove', (e)=>{
    const { clientX: x, clientY: y } = e;
    const { offsetWidth: width, offsetHeight: height } = hero;
    const xPercent = x / width * 100;
    const yPercent = y / height * 100;
    hero.style.setProperty('--mouse-x', `${xPercent}%`);
    hero.style.setProperty('--mouse-y', `${yPercent}%`);
});
// Mobile Navigation Toggle
hamburger?.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu?.classList.toggle('active');
});
// Close mobile menu when clicking on a link
navLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});
// Navbar Background on Scroll
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 100) navbar?.classList.add('scrolled');
    else navbar?.classList.remove('scrolled');
});
// Smooth scrolling for navigation links
navLinks.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (!targetId) return;
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
// Active Navigation Link Highlighting
window.addEventListener('scroll', ()=>{
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) navLinks.forEach((link)=>{
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) link.classList.add('active');
        });
    });
});
// Animated Counter for Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(()=>{
        start += increment;
        if (start >= target) {
            element.textContent = target.toString() + (element.textContent?.includes('+') ? '+' : element.textContent?.includes('%') ? '%' : '');
            clearInterval(timer);
        } else element.textContent = Math.floor(start).toString() + (element.textContent?.includes('+') ? '+' : element.textContent?.includes('%') ? '%' : '');
    }, 16);
}
// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Text animation for section headers
            if (entry.target.classList.contains('section-header')) {
                const spans = entry.target.querySelectorAll('h2 span, p span');
                spans.forEach((span, index)=>{
                    span.style.transitionDelay = `${index * 0.03}s`;
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0) scale(1)';
                });
            }
            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stats')) {
                const statNumbers = entry.target.querySelectorAll('.stat h4');
                statNumbers.forEach((stat)=>{
                    const target = parseInt(stat.textContent || '0');
                    if (!isNaN(target)) animateCounter(stat, target);
                });
            }
        }
    });
}, observerOptions);
// Observe elements for animation
document.addEventListener('DOMContentLoaded', ()=>{
    // Calculate and display age
    const ageStatElement = document.getElementById('age-stat');
    if (ageStatElement) {
        const birthDate = new Date(2005, 6, 6); // Mese è 0-indexed (6 = Luglio)
        const age = calculateAge(birthDate);
        ageStatElement.textContent = age.toString();
    }
    const animateElements = document.querySelectorAll('.about-content, .stats, .contact-content, .section-header');
    animateElements.forEach((el)=>observer.observe(el));
    // Initialize typing animation
    const nameSpan = document.querySelector('.hero-text h1 .highlight');
    if (nameSpan && nameSpan.textContent) {
        const textToType = nameSpan.textContent;
        nameSpan.textContent = ''; // Clear the element
        setTimeout(()=>{
            if (nameSpan) typeWriter(nameSpan, textToType, 100);
        }, 1000); // Delay before starting
    }
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card)=>{
        card.addEventListener('mouseenter', ()=>{
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        card.addEventListener('mouseleave', ()=>{
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    // Skills cards animation
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index)=>{
        card.style.animationDelay = `${index * 0.1}s`;
        // Add hover effect
        card.addEventListener('mouseenter', ()=>{
            card.style.transform = 'translateY(-15px) rotateY(5deg)';
        });
        card.addEventListener('mouseleave', ()=>{
            card.style.transform = 'translateY(0) rotateY(0deg)';
        });
    });
});
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) age--;
    return age;
}
// Parallax effect for hero section
window.addEventListener('scroll', ()=>{
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    parallaxElements.forEach((element)=>{
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
// Typing animation for hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            if (element) element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    .navbar.scrolled {
        background: rgba(16, 37, 66, 0.95) !important;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1) !important;
    }
    
    .animate {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-card, .project-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .skill-card.animate, .project-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .nav-link.active {
        color: #F87060 !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);
// Back to Top Button Logic
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 300) backToTopBtn?.classList.add('visible');
    else backToTopBtn?.classList.remove('visible');
});
backToTopBtn?.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('#home')?.scrollIntoView({
        behavior: 'smooth'
    });
});

//# sourceMappingURL=portafolio personale.7d99bab5.js.map
