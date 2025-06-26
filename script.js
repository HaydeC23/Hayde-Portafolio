// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        navLinks.classList.remove('active');
    });
});

// Add sample projects to work section
const workGrid = document.querySelector('.work-grid');
const projects = [
    {
        title: 'Proyecto 1',
        description: 'Descripción del proyecto 1',
        image: 'https://via.placeholder.com/300',
        tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción del proyecto 2',
        image: 'https://via.placeholder.com/300',
        tech: ['React', 'Node.js']
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción del proyecto 3',
        image: 'https://via.placeholder.com/300',
        tech: ['Python', 'Django']
    }
];

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'work-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="work-card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        </div>
    `;
    workGrid.appendChild(projectCard);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Mensaje enviado con éxito!');
    contactForm.reset();
});

// Add scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Inicializar Typed.js para el texto animado
const typed = new Typed('.typed-text', {
    strings: ['Desarrolladora Web', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Animación de barra de progreso
document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = '0%';
    
    // Animar cuando el elemento esté en el viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bar.style.width = progress + '%';
            }
        });
    });
    
    observer.observe(bar.parentElement);
});

// Filtro de proyectos
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Obtener el filtro
        const filter = button.getAttribute('data-filter');
        
        // Mostrar/ocultar proyectos
        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Animación de scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Animación de estadísticas
const stats = document.querySelectorAll('.stat-number');

const animateStats = () => {
    stats.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const start = 0;
                    const end = parseInt(target.textContent);
                    const duration = 2000;
                    
                    let current = start;
                    const increment = (end - start) / (duration / 16);
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= end) {
                            target.textContent = end;
                            clearInterval(timer);
                        } else {
                            target.textContent = Math.floor(current);
                        }
                    }, 16);
                }
            });
        });
        
        observer.observe(stat);
    });
};

animateStats();

// Animación de navegación
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remover clase active de todos los enlaces
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Animación de cursor
const cursor = document.querySelector('.cursor');

const animateCursor = () => {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
};

animateCursor();

// Formulario de contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    try {
        // Aquí puedes implementar la lógica para enviar el formulario
        // Por ejemplo, usando fetch para enviar a un servicio de correo
        contactForm.reset();
        alert('¡Mensaje enviado con éxito!');
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
});

// Animación de tarjetas de proyectos
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Animación de texto en hover
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Animación de scroll para el header
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
});
