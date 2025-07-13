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
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Osserva gli elementi della timeline
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}







/**
 * Initializes a neural network animation on a canvas.
 */
function initNeuralNetworkBackground() {
    const canvas = document.getElementById('neural-network-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    let nodes: any[];

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        nodes = [];
        const nodeCount = window.innerWidth < 768 ? 40 : 80;
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                baseRadius: Math.random() * 1.5 + 1,
                pulseAngle: Math.random() * Math.PI,
            });
        }
    };

    const draw = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
            if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
            
            node.pulseAngle += 0.02;
            const pulseFactor = (Math.sin(node.pulseAngle) + 1) / 2;
            const currentRadius = node.baseRadius + pulseFactor * 1.5;

            ctx.beginPath();
            ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + pulseFactor * 0.4})`;
            ctx.fill();
        });

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dist = Math.sqrt(Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2));
                
                const distToMouse = Math.min(
                    Math.sqrt(Math.pow(nodes[i].x - mouse.x, 2) + Math.pow(nodes[i].y - mouse.y, 2)),
                    Math.sqrt(Math.pow(nodes[j].x - mouse.x, 2) + Math.pow(nodes[j].y - mouse.y, 2))
                );

                if (dist < 150) {
                    let opacity = (1 - dist / 150) * 0.5;
                    if (distToMouse < 100) {
                        opacity = Math.min(1, opacity + (1 - distToMouse / 100) * 0.8);
                    }
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        draw();
        requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}

/**
 * Initializes a data flow animation on a canvas.
 */
function initDataFlowBackground() {
    const canvas = document.getElementById('data-flow-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[];

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        particles = [];
        const particleCount = 300;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: Math.random() * 1 + 0.2,
                size: Math.random() * 1.5 + 1,
                length: Math.random() * 15 + 5,
                opacity: Math.random() * 0.4 + 0.1,
            });
        }
    };

    const draw = () => {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.y -= p.speed;
            if (p.y < -p.length) {
                p.y = canvas.height;
                p.x = Math.random() * canvas.width;
            }
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x, p.y - p.length);
            ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity})`;
            ctx.lineWidth = p.size;
            ctx.stroke();
        });
    };

    const animate = () => {
        draw();
        requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
}



// Finestra in legno modal
function initWoodenWindowModal() {
    const aboutTrigger = document.getElementById('about-modal-trigger');
    const modal = document.getElementById('wooden-window-modal');
    const closeButtons = document.querySelectorAll('#close-wooden-window, #close-window-btn');

    if (!aboutTrigger || !modal) return;

    // Apri modal quando si clicca su About
    aboutTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    // Chiudi modal con i pulsanti di chiusura
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal();
        });
    });

    // Chiudi modal cliccando fuori dalla finestra
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Chiudi modal con tasto ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function openModal() {
        if (!modal) return;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Sound effect (opzionale)
        playWindowOpenSound();
        
        // Anima i contatori delle statistiche
        setTimeout(() => {
            animateModalStats();
        }, 500);
        
        // Prevent scrolling on background only
        document.addEventListener('wheel', preventBackgroundScroll, { passive: false });
        document.addEventListener('touchmove', preventBackgroundScroll, { passive: false });
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Sound effect (opzionale)
        playWindowCloseSound();
        
        // Reset contatori per la prossima apertura
        resetModalStats();
        
        // Re-enable scrolling
        document.removeEventListener('wheel', preventBackgroundScroll);
        document.removeEventListener('touchmove', preventBackgroundScroll);
    }

    function preventBackgroundScroll(e: Event) {
        const target = e.target as Element;
        const modalContent = modal?.querySelector('.wooden-window');
        
        // Allow scrolling if the event target is inside the modal content
        if (modalContent && modalContent.contains(target)) {
            return; // Don't prevent scrolling inside modal
        }
        
        // Prevent scrolling on background
        e.preventDefault();
    }

    function animateModalStats() {
        const statNumbers = modal?.querySelectorAll<HTMLElement>('.stat h4');
        statNumbers?.forEach(stat => {
            const target = parseInt(stat.dataset.target || '0', 10);
            const suffix = stat.dataset.suffix || '';
            animateCounter(stat, target, 2000, suffix);
        });
    }

    function resetModalStats() {
        const statNumbers = modal?.querySelectorAll<HTMLElement>('.stat h4');
        statNumbers?.forEach(stat => {
            stat.textContent = '0';
        });
    }

    // Effetti sonori opzionali (solo se disponibili)
    function playWindowOpenSound() {
        try {
            // Crea un suono di apertura finestra molto sottile
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            // Sound not available, continue silently
        }
    }

    function playWindowCloseSound() {
        try {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.2);
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.08, audioContext.currentTime + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (e) {
            // Sound not available, continue silently
        }
    }

    // Animazione di particelle di legno (opzionale)
    function createWoodParticles() {
        const windowElement = document.querySelector('.wooden-window');
        if (!windowElement) return;

        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #D2691E;
                border-radius: 50%;
                pointer-events: none;
                z-index: 10001;
                opacity: 0.6;
            `;
            
            const rect = windowElement.getBoundingClientRect();
            particle.style.left = `${rect.left + Math.random() * rect.width}px`;
            particle.style.top = `${rect.top + Math.random() * rect.height}px`;
            
            document.body.appendChild(particle);
            
            // Animate particle
            const animation = particle.animate([
                { transform: 'translateY(0px) scale(1)', opacity: 0.6 },
                { transform: 'translateY(-50px) scale(0)', opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            });
            
            animation.onfinish = () => {
                particle.remove();
            };
        }
    }

    // Trigger particles when window opens
    aboutTrigger.addEventListener('click', () => {
        setTimeout(createWoodParticles, 300);
    });
}

// Main initialization
document.addEventListener('DOMContentLoaded', () => {
    // Staggered fall-in animation for keyboard keys
    const keys = document.querySelectorAll('.key');
    keys.forEach((key, index) => {
        (key as HTMLElement).style.animationDelay = `${index * 0.05}s`;
    });



    // Page-specific initializations
    if (document.getElementById('neural-network-canvas')) {
        initNeuralNetworkBackground();
    }
    if (document.getElementById('data-flow-canvas')) {
        initDataFlowBackground();
    }

    initTooltips();
    initHamburgerMenu();
    initScrollToTop();
    initTimelineAnimation();

    // Funzioni comuni a tutte le pagine
    initNavbarActiveLink();
    initNavbarScroll();

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

    initWoodenWindowModal(); // Inizializza il modal della finestra in legno

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
