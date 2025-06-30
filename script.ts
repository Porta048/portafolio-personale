import { computePosition, offset, shift, flip, arrow } from '@floating-ui/dom';

// DOM Elements
const hamburger = document.querySelector<HTMLDivElement>('.hamburger');
const navMenu = document.querySelector<HTMLDivElement>('.nav-menu');
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
const navbar = document.querySelector<HTMLElement>('.navbar');
const hero = document.querySelector<HTMLElement>('.hero');

// Custom Cursor Logic
const backToTopBtn = document.querySelector<HTMLAnchorElement>('.back-to-top-btn');
const tooltip = document.querySelector<HTMLElement>('#tooltip');

// Tooltip Logic
const elementsWithTooltip = document.querySelectorAll('[data-tooltip]');

elementsWithTooltip.forEach(element => {
    const reference = element as HTMLElement;
    const tooltipText = reference.dataset.tooltip || '';

    const showTooltip = () => {
        if (!tooltip) return;
        tooltip.textContent = tooltipText;
        tooltip.classList.add('visible');

        computePosition(reference, tooltip, {
            placement: 'top',
            middleware: [offset(8), flip(), shift({ padding: 5 })],
        }).then(({ x, y }) => {
            Object.assign(tooltip.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    };

    const hideTooltip = () => {
        if (tooltip) {
            tooltip.classList.remove('visible');
        }
    };

    reference.addEventListener('mouseenter', showTooltip);
    reference.addEventListener('mouseleave', hideTooltip);
    reference.addEventListener('focus', showTooltip);
    reference.addEventListener('blur', hideTooltip);
});

// Back to Top Button Logic
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn?.classList.add('visible');
    } else {
        backToTopBtn?.classList.remove('visible');
    }
});

backToTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
});

// Mobile Navigation Toggle
function toggleMobileMenu() {
    // Only toggle mobile menu on devices with width <= 1024px
    if (window.innerWidth <= 1024) {
        hamburger?.classList.toggle('active');
        navMenu?.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu?.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

function closeMobileMenu() {
    // Only close mobile menu on devices where it might be active
    if (window.innerWidth <= 1024) {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

hamburger?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
});

// Add touch support for mobile devices
hamburger?.addEventListener('touchstart', (e) => {
    e.preventDefault();
    e.stopPropagation();
}, { passive: false });

hamburger?.addEventListener('touchend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
}, { passive: false });

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
    
    // Add touch support for navigation links
    link.addEventListener('touchend', (e) => {
        // Small delay to ensure smooth transition
        setTimeout(closeMobileMenu, 100);
    }, { passive: true });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (window.innerWidth <= 1024 && 
        navMenu?.classList.contains('active') && 
        !navMenu.contains(target) && 
        !hamburger?.contains(target)) {
        closeMobileMenu();
    }
});

// Close mobile menu when touching outside (mobile)
document.addEventListener('touchstart', (e) => {
    const target = e.target as HTMLElement;
    if (window.innerWidth <= 1024 && 
        navMenu?.classList.contains('active') && 
        !navMenu.contains(target) && 
        !hamburger?.contains(target)) {
        closeMobileMenu();
    }
}, { passive: true });

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeMobileMenu();
        // Ensure navbar is in correct state for desktop
        document.body.style.overflow = 'auto';
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    }
});

// Handle escape key to close mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && 
        window.innerWidth <= 1024 && 
        navMenu?.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Prevent scrolling on mobile when menu is open
let startY = 0;
document.addEventListener('touchstart', (e) => {
    if (window.innerWidth <= 1024 && navMenu?.classList.contains('active')) {
        startY = e.touches[0].clientY;
    }
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    if (window.innerWidth <= 1024 && navMenu?.classList.contains('active')) {
        const target = e.target as HTMLElement;
        if (!navMenu.contains(target)) {
            e.preventDefault();
        }
    }
}, { passive: false });

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    let currentSectionId = "";

    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 85; // Offset per l'altezza della navbar + buffer

        if (scrollY >= sectionTop) {
            currentSectionId = section.getAttribute('id') || "";
        }
    });
    
    // Gestisce il caso in cui si arriva in fondo alla pagina
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
            currentSectionId = lastSection.getAttribute('id') || "";
        }
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

// Animated Counter for Stats
function animateCounter(element: HTMLElement, target: number, duration: number = 2000, suffix: string = ''): void {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toString() + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toString() + suffix;
        }
    }, 16);
}

// Intersection Observer for Animations
const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Text animation for section headers
            if (entry.target.classList.contains('section-header')) {
                const spans = entry.target.querySelectorAll('h2 span, p span');
                spans.forEach((span, index) => {
                    (span as HTMLElement).style.transitionDelay = `${index * 0.03}s`;
                    (span as HTMLElement).style.opacity = '1';
                    (span as HTMLElement).style.transform = 'translateY(0) scale(1)';
                });
            }

            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stats')) {
                const statNumbers = entry.target.querySelectorAll<HTMLElement>('.stat h4');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.dataset.target || '0');
                    const suffix = stat.dataset.suffix || '';
                    if (!isNaN(target)) {
                        animateCounter(stat, target, 2000, suffix);
                    }
                });
                // Unobserve the stats section after animation to prevent re-triggering
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

function calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Typing animation for hero text
function typeWriter(element: HTMLElement, text: string, speed: number = 100): void {
    let i = 0;
    
    function type() {
        if (i < text.length) {
            if(element) element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

function initInteractiveParticles(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2 };
    canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });
    
    canvas.addEventListener('mouseleave', () => {
        mouse.x = width / 2;
        mouse.y = height / 2;
    });

    window.addEventListener('resize', () => {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    });

    class Particle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;

        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() * 2 - 1) * 0.5;
            this.speedY = (Math.random() * 2 - 1) * 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Interazione con il mouse
            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                 this.x += dx / distance * 2;
                 this.y += dy / distance * 2;
            }

            // Mantieni le particelle all'interno dei bordi con un margine
            const margin = 10;
            if (this.x < margin) {
                this.x = margin;
                this.speedX = Math.abs(this.speedX);
            }
            if (this.x > width - margin) {
                this.x = width - margin;
                this.speedX = -Math.abs(this.speedX);
            }
            if (this.y < margin) {
                this.y = margin;
                this.speedY = Math.abs(this.speedY);
            }
            if (this.y > height - margin) {
                this.y = height - margin;
                this.speedY = -Math.abs(this.speedY);
            }
        }

        draw() {
            if (!ctx) return;
            ctx.fillStyle = 'rgba(237, 242, 244, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    let particlesArray: Particle[] = [];
    function initParticles() {
        particlesArray = [];
        const numberOfParticles = 80;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    initParticles();

    function handleParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    if (!ctx) return;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(248, 112, 96, ${1 - distance / 100})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        handleParticles();
        requestAnimationFrame(animate);
    }
    animate();
}

function initPlexusAnimation(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: {x: number, y: number, vx: number, vy: number, impactRadius: number, impactOpacity: number}[] = [];
    let snake: {x: number, y: number}[] = [];
    let snakeTarget = 0;
    const easing = 0.05; // Fattore di easing per un movimento più fluido

    const setup = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        points = [];
        const pointCount = Math.floor(canvas.width * canvas.height / 9000); // Leggermente meno punti

        for (let i = 0; i < pointCount; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4, // Velocità leggermente ridotta
                vy: (Math.random() - 0.5) * 0.4,
                impactRadius: 0,
                impactOpacity: 0
            });
        }

        snake = [{ x: canvas.width / 2, y: canvas.height / 2 }];
        for (let i = 1; i < 15; i++) { // Coda più lunga per un effetto più visibile
            snake.push({
                x: snake[0].x,
                y: snake[0].y
            });
        }
        findNewTarget();
    };

    const findNewTarget = () => {
        let newTarget;
        do {
            newTarget = Math.floor(Math.random() * points.length);
        } while (newTarget === snakeTarget);
        snakeTarget = newTarget;
    };

    const updateSnake = () => {
        if (points.length === 0 || !points[snakeTarget]) return;

        const target = points[snakeTarget];
        const head = snake[0];

        const dx = target.x - head.x;
        const dy = target.y - head.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 10) {
            // "Colpito" il target: crea effetto impatto
            points[snakeTarget].impactRadius = 15;
            points[snakeTarget].impactOpacity = 1;
            findNewTarget();
        } else {
            // Muovi la testa con easing
            head.x += dx * easing;
            head.y += dy * easing;
        }

        // La coda segue la testa
        for (let i = 1; i < snake.length; i++) {
            const leader = snake[i - 1];
            const segment = snake[i];
            const segDx = leader.x - segment.x;
            const segDy = leader.y - segment.y;
            segment.x += segDx * 0.5; // La coda segue in modo più "morbido"
            segment.y += segDy * 0.5;
        }
    };

    const draw = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Disegna e aggiorna i punti e gli impatti
        points.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.fillStyle = 'rgba(248, 112, 96, 0.8)';
            ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
            ctx.fill();

            // Disegna l'effetto impatto
            if (p.impactRadius > 0) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(248, 112, 96, ${p.impactOpacity})`;
                ctx.lineWidth = 2;
                ctx.arc(p.x, p.y, p.impactRadius, 0, Math.PI * 2);
                ctx.stroke();

                p.impactRadius += 0.5; // L'onda si espande
                p.impactOpacity -= 0.02; // E svanisce
                if (p.impactOpacity <= 0) {
                    p.impactRadius = 0;
                    p.impactOpacity = 0;
                }
            }
        });

        // Disegna le connessioni tra punti (plexus)
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
                if (dist < 100) { // Distanza di connessione ridotta
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.lineWidth = (1 - dist / 100) * 0.4;
                    ctx.strokeStyle = 'rgba(248, 112, 96, 0.2)';
                    ctx.stroke();
                }
            }
        }

        updateSnake();
        
        // Disegna il proiettile (serpente)
        for (let i = 0; i < snake.length; i++) {
            const segment = snake[i];
            const opacity = 1 - (i / snake.length) * 0.8;
            const size = 5 - (i / snake.length) * 4; // La coda si restringe

            ctx.beginPath();
            ctx.fillStyle = `rgba(248, 112, 96, ${opacity})`;
            ctx.arc(segment.x, segment.y, Math.max(1, size), 0, Math.PI * 2);
            ctx.fill();
        }

        // Disegna un alone attorno al punto target
        if (points[snakeTarget]) {
            const target = points[snakeTarget];
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(248, 112, 96, 0.5)';
            ctx.lineWidth = 1;
            ctx.arc(target.x, target.y, 10, 0, Math.PI * 2);
            ctx.stroke();
        }

        requestAnimationFrame(draw);
    };

    let animationFrameId: number | null = null;
    const projectsSection = document.getElementById('projects');

    const plexusObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!animationFrameId) {
                    setup();
                    animationFrameId = requestAnimationFrame(draw);
                }
            } else {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
            }
        });
    }, { threshold: 0.1 });
    
    if (projectsSection) {
        plexusObserver.observe(projectsSection);
    }
    window.addEventListener('resize', setup);
}

function initTechArt() {
    const container = document.getElementById('tech-art-container');
    if (!container) return;

    const canvas = document.createElement('canvas');
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let width = container.clientWidth;
    let height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: TechParticle[] = [];
    const particleCount = Math.min(Math.floor(width / 20), 30);
    const maxDistance = 100;

    class TechParticle {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;

        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Mantieni le particelle all'interno dei bordi con un margine
            const margin = 5;
            if (this.x < margin) {
                this.x = margin;
                this.speedX = Math.abs(this.speedX);
            }
            if (this.x > width - margin) {
                this.x = width - margin;
                this.speedX = -Math.abs(this.speedX);
            }
            if (this.y < margin) {
                this.y = margin;
                this.speedY = Math.abs(this.speedY);
            }
            if (this.y > height - margin) {
                this.y = height - margin;
                this.speedY = -Math.abs(this.speedY);
            }
        }

        draw() {
            if (!ctx) return;
            ctx.fillStyle = '#F87060';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new TechParticle());
        }
    }

    function handleParticles() {
        if (!ctx) return;
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(248, 112, 96, ${1 - distance / maxDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        handleParticles();
        requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', () => {
        width = container.clientWidth;
        height = container.clientHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
    });

    initParticles();
    animate();
}

function initSubtleBackground() {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    interface FloatingDot {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
        pulseSpeed: number;
        pulsePhase: number;
    }

    const dots: FloatingDot[] = [];
    const dotCount = Math.floor((width * height) / 15000); // Densità molto bassa

    // Inizializza i punti fluttuanti
    for (let i = 0; i < dotCount; i++) {
        dots.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2,
            opacity: Math.random() * 0.3 + 0.1,
            pulseSpeed: Math.random() * 0.02 + 0.01,
            pulsePhase: Math.random() * Math.PI * 2
        });
    }

    function draw() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);

        dots.forEach(dot => {
            // Aggiorna posizione
            dot.x += dot.speedX;
            dot.y += dot.speedY;

            // Rimbalzo sui bordi
            if (dot.x < 0 || dot.x > width) dot.speedX *= -1;
            if (dot.y < 0 || dot.y > height) dot.speedY *= -1;

            // Effetto pulsazione
            dot.pulsePhase += dot.pulseSpeed;
            const pulseOpacity = dot.opacity * (0.5 + 0.5 * Math.sin(dot.pulsePhase));

            // Disegna il punto con gradiente
            const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.size * 3);
            gradient.addColorStop(0, `rgba(248, 112, 96, ${pulseOpacity})`);
            gradient.addColorStop(1, 'rgba(248, 112, 96, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2);
            ctx.fill();
        });

        // Disegna connessioni sottili tra punti vicini
        ctx.strokeStyle = 'rgba(248, 112, 96, 0.1)';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dx = dots[i].x - dots[j].x;
                const dy = dots[i].y - dots[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.1;
                    ctx.strokeStyle = `rgba(248, 112, 96, ${opacity})`;
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        
        // Ricalcola il numero di punti in base alla nuova dimensione
        const newDotCount = Math.floor((width * height) / 15000);
        while (dots.length > newDotCount) {
            dots.pop();
        }
        while (dots.length < newDotCount) {
            dots.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.2,
                speedY: (Math.random() - 0.5) * 0.2,
                opacity: Math.random() * 0.3 + 0.1,
                pulseSpeed: Math.random() * 0.02 + 0.01,
                pulsePhase: Math.random() * Math.PI * 2
            });
        }
    });

    draw();
}

function initTypingAnimation() {
    const nameSpan = document.querySelector<HTMLElement>('.hero-text h1 .highlight');
    if (nameSpan?.textContent) {
        const textToType = nameSpan.textContent;
        nameSpan.textContent = ''; 
        setTimeout(() => {
            if (nameSpan) typeWriter(nameSpan, textToType, 100);
        }, 1000); 
    }
}

function initHamburgerMenu() {
    const hamburger = document.querySelector<HTMLDivElement>('.hamburger');
    const navMenu = document.querySelector<HTMLDivElement>('.nav-menu');
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
    
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu?.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });
}

function initNavbarActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

function initNavbarScroll() {
    const navbar = document.querySelector<HTMLElement>('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}

function initScrollToTop() {
    const backToTopBtn = document.getElementById('scrollToTopBtn');
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initTooltips() {
    const tooltipItems = document.querySelectorAll<HTMLElement>('[data-tooltip]');
    const tooltip = document.getElementById('tooltip') as HTMLElement | null;
    
    if (tooltip && tooltipItems.length > 0) {
        tooltipItems.forEach(item => {
            const reference = item;
            const tooltipText = reference.dataset.tooltip || '';

            const showTooltip = () => {
                tooltip.textContent = tooltipText;
                tooltip.classList.add('visible');

                computePosition(reference, tooltip, {
                    placement: 'top',
                    middleware: [offset(8), flip(), shift({ padding: 5 })],
                }).then(({ x, y }) => {
                    Object.assign(tooltip.style, {
                        left: `${x}px`,
                        top: `${y}px`,
                    });
                });
            };

            const hideTooltip = () => {
                tooltip.classList.remove('visible');
            };

            reference.addEventListener('mouseenter', showTooltip);
            reference.addEventListener('mouseleave', hideTooltip);
            reference.addEventListener('focus', showTooltip);
            reference.addEventListener('blur', hideTooltip);
        });
    }
}

function initKeyboardAnimation() {
    // La logica per l'animazione della tastiera va qui se necessaria
}

function initStatsCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.matches('.stats')) {
                     const statNumbers = entry.target.querySelectorAll<HTMLElement>('.stat h4');
                     statNumbers.forEach(stat => {
                         const target = parseInt(stat.dataset.target || '0', 10);
                         const suffix = stat.dataset.suffix || '';
                         animateCounter(stat, target, 2000, suffix);
                     });
                     observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    const statsEl = document.querySelector('.stats');
    if (statsEl) {
        observer.observe(statsEl);
    }
}

function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
}

function initAboutBackground() {
    const aboutSection = document.querySelector('.about') as HTMLElement;
    if (!aboutSection) return;

    // Crea il canvas per le forme geometriche animate
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '1';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.6';
    
    aboutSection.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = aboutSection.offsetWidth;
    let height = aboutSection.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    interface FloatingShape {
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        rotation: number;
        rotationSpeed: number;
        type: 'circle' | 'triangle' | 'square';
        opacity: number;
    }

    const shapes: FloatingShape[] = [];
    const shapeCount = 8;

    // Inizializza le forme
    for (let i = 0; i < shapeCount; i++) {
        shapes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 40 + 20,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.01,
            type: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square',
            opacity: Math.random() * 0.3 + 0.1
        });
    }

    function drawShape(shape: FloatingShape) {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.globalAlpha = shape.opacity;
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size);
        gradient.addColorStop(0, 'rgba(248, 112, 96, 0.3)');
        gradient.addColorStop(1, 'rgba(248, 112, 96, 0)');
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'rgba(248, 112, 96, 0.2)';
        ctx.lineWidth = 1;

        switch (shape.type) {
            case 'circle':
                ctx.beginPath();
                ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                break;
            
            case 'triangle':
                ctx.beginPath();
                ctx.moveTo(0, -shape.size / 2);
                ctx.lineTo(-shape.size / 2, shape.size / 2);
                ctx.lineTo(shape.size / 2, shape.size / 2);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                break;
            
            case 'square':
                ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                ctx.strokeRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
                break;
        }
        
        ctx.restore();
    }

    function updateShapes() {
        shapes.forEach(shape => {
            shape.x += shape.speedX;
            shape.y += shape.speedY;
            shape.rotation += shape.rotationSpeed;

            // Rimbalzo sui bordi
            if (shape.x < -shape.size || shape.x > width + shape.size) {
                shape.speedX *= -1;
            }
            if (shape.y < -shape.size || shape.y > height + shape.size) {
                shape.speedY *= -1;
            }

            // Mantieni le forme all'interno dell'area
            shape.x = Math.max(-shape.size / 2, Math.min(width + shape.size / 2, shape.x));
            shape.y = Math.max(-shape.size / 2, Math.min(height + shape.size / 2, shape.y));
        });
    }

    function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        
        updateShapes();
        shapes.forEach(drawShape);
        
        requestAnimationFrame(animate);
    }

    // Gestisci il ridimensionamento
    const resizeObserver = new ResizeObserver(() => {
        width = aboutSection.offsetWidth;
        height = aboutSection.offsetHeight;
        canvas.width = width;
        canvas.height = height;
    });
    
    resizeObserver.observe(aboutSection);
    
    // Avvia l'animazione solo quando la sezione è visibile
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate();
            }
        });
    }, { threshold: 0.1 });
    
    intersectionObserver.observe(aboutSection);
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    // Funzioni comuni a tutte le pagine
    initHamburgerMenu();
    initNavbarActiveLink();
    initNavbarScroll();
    initTooltips();
    initScrollToTop();

    // Funzioni specifiche per pagina
    if (document.getElementById('matrix-canvas')) {
        initSubtleBackground();
    }
    if (document.querySelector('.keyboard')) {
        initKeyboardAnimation();
    }
    if (document.getElementById('tech-art-container')) {
        initTechArt();
    }
    const plexusCanvas = document.getElementById('plexus-canvas') as HTMLCanvasElement;
    if (plexusCanvas) {
        initPlexusAnimation(plexusCanvas);
    }
    if (document.querySelector('.stats')) {
        initStatsCounters();
    }
    if (document.querySelector('.hero-text h1 .highlight')) {
        initTypingAnimation();
    }
    const interactiveCanvas = document.getElementById('interactive-particles-canvas') as HTMLCanvasElement;
    if(interactiveCanvas) {
        initInteractiveParticles(interactiveCanvas);
    }
    if (document.querySelector('.timeline')) {
        initTimelineAnimation();
    }
    if (document.querySelector('.about')) {
        initAboutBackground();
    }

    // Calculate and set age for the stat counter
    const ageStatElement = document.getElementById('age-stat');
    if (ageStatElement) {
        const birthDate = new Date(2005, 6, 6); // 06/07/2005 (mese è 0-indexed)
        const age = calculateAge(birthDate);
        ageStatElement.dataset.target = age.toString();
    }

    // Calcolo Età per il testo
    const ageText = document.getElementById('age-text');
    if (ageText) {
        const birthDate = new Date('2005-07-06'); // 06/07/2005
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        ageText.innerText = age.toString();
    }

    const animateElements = document.querySelectorAll('.about-content, .stats, .contact-content, .section-header');
    animateElements.forEach(el => observer.observe(el));

    // Project card hover effects
    const projectCards = document.querySelectorAll<HTMLDivElement>('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skills cards animation
    const skillCards = document.querySelectorAll<HTMLDivElement>('.skill-card');
    
    skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) rotateY(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateY(0deg)';
        });
    });

    // Update GitHub chart image source to prevent caching
    if (window.location.pathname.endsWith('projects.html')) {
        const chart = document.getElementById('github-chart') as HTMLImageElement;
        if (chart) {
            // Append a timestamp to the image URL to bypass the cache
            const baseUrl = chart.src.split('?')[0];
            chart.src = `${baseUrl}?t=${new Date().getTime()}`;
        }
    }
});

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
