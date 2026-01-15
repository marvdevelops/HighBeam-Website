// HighBeam Static Site - JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');

  function openMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu when clicking a link
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(function(link) {
    link.addEventListener('click', closeMobileMenu);
  });

  // Scroll animations
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkScroll() {
    animateElements.forEach(function(element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  }

  if (animateElements.length > 0) {
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on load
  }

  // Simple image gallery/carousel
  const galleries = document.querySelectorAll('.gallery');
  
  galleries.forEach(function(gallery) {
    const track = gallery.querySelector('.gallery-track');
    const slides = gallery.querySelectorAll('.gallery-slide');
    const prevBtn = gallery.querySelector('.gallery-prev');
    const nextBtn = gallery.querySelector('.gallery-next');
    
    if (!track || slides.length <= 1) return;
    
    let currentSlide = 0;
    
    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentSlide = index;
      track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        goToSlide(currentSlide - 1);
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        goToSlide(currentSlide + 1);
      });
    }
  });

  // Form validation (basic)
  const contactForm = document.querySelector('#contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = document.querySelector('#name');
      const email = document.querySelector('#email');
      const message = document.querySelector('#message');
      
      let isValid = true;
      
      if (name && !name.value.trim()) {
        isValid = false;
        name.style.borderColor = '#ef4444';
      } else if (name) {
        name.style.borderColor = '';
      }
      
      if (email && !email.value.trim()) {
        isValid = false;
        email.style.borderColor = '#ef4444';
      } else if (email && !isValidEmail(email.value)) {
        isValid = false;
        email.style.borderColor = '#ef4444';
      } else if (email) {
        email.style.borderColor = '';
      }
      
      if (message && !message.value.trim()) {
        isValid = false;
        message.style.borderColor = '#ef4444';
      } else if (message) {
        message.style.borderColor = '';
      }
      
      if (!isValid) {
        e.preventDefault();
      }
    });
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Active nav link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-links a, .mobile-menu a');
  
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    }
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
