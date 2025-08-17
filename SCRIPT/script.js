// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Typing animation for the hero section
    const heroText = document.querySelector('.hero-content h2');
    if (heroText) {
        const text = heroText.textContent;
        heroText.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }

    // Animated counter for skills
    const animateCounter = (element, target, duration) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            if (start >= target) {
                clearInterval(timer);
                element.textContent = target;
            }
        }, 16);
    };

    const skillLevels = document.querySelectorAll('.skill-level');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.style.width);
                animateCounter(entry.target.previousElementSibling, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillLevels.forEach(skill => observer.observe(skill));

    // Project filter functionality
    const projectFilter = document.querySelector('.project-filter');
    const projectCards = document.querySelectorAll('.project-card');

    if (projectFilter) {
        projectFilter.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const filter = e.target.dataset.filter;
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
                // Update active filter button
                projectFilter.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
            }
        });
    }

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.disconnect();
                }
            });
        });
        io.observe(target);
    };
    lazyImages.forEach(lazyLoad);

    // Form validation and submission
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();
            
            if (name && email && message) {
                // Here you would typically send the form data to a server
                // For demonstration, we'll just log it and show a success message
                console.log('Form submitted:', { name, email, message });
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Dynamic copyright year
    const copyrightYear = document.querySelector('#copyright-year');
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // Scroll-to-top button
    const scrollToTopBtn = document.querySelector('#scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');
    const mobileMenu = document.querySelector('#mobile-menu');
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.toggle('dark-mode');
        } else if (currentTheme === 'light') {
            document.body.classList.remove('dark-mode');
        }

        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
        });

        // Listen for changes in color scheme preference
        prefersDarkScheme.addListener((e) => {
            const theme = e.matches ? 'dark' : 'light';
            document.body.classList.toggle('dark-mode', e.matches);
            localStorage.setItem('theme', theme);
        });
    }

    // Animated skill bars
    const animateSkillBars = () => {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const percentage = bar.dataset.percentage;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = percentage;
                bar.style.transition = 'width 1s ease-in-out';
            }, 100);
        });
    };

    // Trigger skill bar animation when in viewport
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(skillsSection);
            }
        }, { threshold: 0.5 });
        skillsObserver.observe(skillsSection);
    }

    // Parallax effect for hero section
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    animateOnScroll();

    // Project modal
    const projectLinks = document.querySelectorAll('.project-link');
    const modal = document.querySelector('#project-modal');
    const modalContent = document.querySelector('#modal-content');
    const closeModal = document.querySelector('#close-modal');

    if (modal && modalContent) {
        projectLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = link.dataset.project;
                // Here you would typically fetch project details from a server
                // For demonstration, we'll just use some hardcoded data
                const projectDetails = {
                    title: 'Project Title',
                    description: 'This is a detailed description of the project.',
                    technologies: ['HTML', 'CSS', 'JavaScript'],
                    image: '/placeholder.svg?height=300&width=500'
                };
                modalContent.innerHTML = `
                    <h2>${projectDetails.title}</h2>
                    <img src="${projectDetails.image}" alt="${projectDetails.title}">
                    <p>${projectDetails.description}</p>
                    <h3>Technologies Used:</h3>
                    <ul>
                        ${projectDetails.technologies.map(tech => `<li>${tech}</li>`).join('')}
                    </ul>
                `;
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Responsive navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });

        // Close menu when resizing to larger screen
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Smooth reveal animation for sections
    const revealSections = () => {
        const sections = document.querySelectorAll('.reveal-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    revealSections();

    // Animated background for hero section
    const animateHeroBackground = () => {
        const hero = document.querySelector('#hero');
        if (hero) {
            let hue = 0;
            setInterval(() => {
                hue = (hue + 1) % 360;
                hero.style.backgroundImage = `linear-gradient(135deg, 
                    hsl(${hue}, 50%, 50%), 
                    hsl(${(hue + 60) % 360}, 50%, 50%)
                )`;
            }, 100);
        }
    };

    animateHeroBackground();

    // Typing effect for skills
    const typeSkills = () => {
        const skillsList = document.querySelector('#skills-list');
        if (skillsList) {
            const skills = ['Web Development', 'UI/UX Design', 'JavaScript', 'React', 'Node.js', 'Python'];
            let currentSkill = 0;
            let currentChar = 0;
            let isDeleting = false;
            let typingSpeed = 100;

            const typeSkill = () => {
                const skill = skills[currentSkill];
                if (isDeleting) {
                    skillsList.textContent = skill.substring(0, currentChar - 1);
                    currentChar--;
                } else {
                    skillsList.textContent = skill.substring(0, currentChar + 1);
                    currentChar++;
                }

                if (!isDeleting && currentChar === skill.length) {
                    isDeleting = true;
                    typingSpeed = 50;
                } else if (isDeleting && currentChar === 0) {
                    isDeleting = false;
                    currentSkill = (currentSkill + 1) % skills.length;
                    typingSpeed = 100;
                }

                setTimeout(typeSkill, typingSpeed);
            };

            typeSkill();
        }
    };

    typeSkills();

    // Scroll progress indicator
    const createScrollProgressBar = () => {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress-bar';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = `${scrollPercentage}%`;
        });
    };

    createScrollProgressBar();

    // Interactive timeline
    const initializeTimeline = () => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    };

    initializeTimeline();

    // Responsive image gallery
    const initializeGallery = () => {
        const gallery = document.querySelector('.image-gallery');
        if (gallery) {
            const images = gallery.querySelectorAll('img');
            const modal = document.createElement('div');
            modal.className = 'gallery-modal';
            document.body.appendChild(modal);

            images.forEach(img => {
                img.addEventListener('click', () => {
                    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
                    modal.style.display = 'flex';
                });
            });

            modal.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
    };

    initializeGallery();

    // Animated counters for statistics
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        
        const speed = 200;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };

            updateCount();
        });
    };

    // Trigger counter animation when in viewport
    const statsSection = document.querySelector('#statistics');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                statsObserver.unobserve(statsSection);
            }
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    // Infinite scroll for blog posts or projects
    const initializeInfiniteScroll = () => {
        const container = document.querySelector('.infinite-scroll-container');
        const loadingIndicator = document.querySelector('.loading-indicator');
        let page = 1;
        let isLoading = false;

        const loadMoreItems = () => {
            if (isLoading) return;
            isLoading = true;
            loadingIndicator.style.display = 'block';

            // Simulating an API call
            setTimeout(() => {
                // Here you would typically fetch data from a server
                const newItems = [
                    { title: 'New Item ' + (page * 3 + 1) },
                    { title: 'New Item ' + (page * 3 + 2) },
                    { title: 'New Item ' + (page * 3 + 3) }
                ];

                newItems.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'item';
                    itemElement.textContent = item.title;
                    container.appendChild(itemElement);
                });

                page++;
                isLoading = false;
                loadingIndicator.style.display = 'none';
            }, 1000);
        };

        window.addEventListener('scroll', () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                loadMoreItems();
            }
        });
    };

    initializeInfiniteScroll();

    // Add any additional JavaScript functionality here
});


document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Skill Bar Animation
    const skillBars = document.querySelectorAll('.skill-bar');
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const percentage = bar.getAttribute('data-skill');
            bar.style.width = percentage + '%';
        });
    };

    // Trigger skill bar animation when the skills section is in view
    const skillsSection = document.querySelector('#skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(skillsSection);
        }
    }, { threshold: 0.5 });

    skillsObserver.observe(skillsSection);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('#hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            observer.observe(element);
        });
    };

    animateOnScroll();

    // Dark mode toggle
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
    }

    // Typing effect for hero section
    const heroText = document.querySelector('.hero-content h1');
    if (heroText) {
        const text = heroText.textContent;
        heroText.innerHTML = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }

    // Project filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            projects.forEach(project => {
                if (filter === 'all' || project.classList.contains(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });

            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Add any additional JavaScript functionality here
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            navLinks.classList.remove('active');
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        navLinks.classList.remove('active');
    }
});


// popup
let popupShown = false;
        let scrollPercentage = 0;

        function showReviewPopup() {
            if (!popupShown) {
                document.getElementById('reviewPopup').style.display = 'block';
                popupShown = true;
            }
        }

        function hideReviewPopup() {
            document.getElementById('reviewPopup').style.display = 'none';
            document.getElementById('showReviewButton').style.display = 'block';
        }

        function manualShowReviewPopup() {
            document.getElementById('reviewPopup').style.display = 'block';
            document.getElementById('showReviewButton').style.display = 'none';
        }

        // Show popup after 40 seconds
        setTimeout(showReviewPopup, 40000);

        // Check scroll percentage
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            scrollPercentage = (scrollPosition / totalHeight) * 100;

            if (scrollPercentage >= 50) {
                showReviewPopup();
            }
        });


        // hire me

        document.addEventListener('DOMContentLoaded', (event) => {
            const button = document.getElementById('hireButton');
            
            button.addEventListener('mouseenter', () => {
                button.style.animation = 'none';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.animation = 'pulse 2s infinite';
            });
        });


        // contact form



       
        
       

    
