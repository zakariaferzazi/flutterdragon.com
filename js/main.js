// ============================================
// Mobile Menu Toggle
// ============================================

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

// ============================================
// Dark Mode Toggle
// ============================================

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  if (themeToggle) {
    themeToggle.textContent = '☀️';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update button icon
    if (body.classList.contains('dark-mode')) {
      themeToggle.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  });
}

// ============================================
// Active Navigation Link
// ============================================

const setActiveNav = () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href');
    
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      item.classList.add('active');
    }
  });
};

// Set active nav on page load
setActiveNav();

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// Fade-in Animation on Scroll
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.app-card, .value-card');
  animateElements.forEach(el => observer.observe(el));
});

// ============================================
// App Store/Play Store Link Handler
// ============================================

const handleAppLinks = () => {
  const appLinks = document.querySelectorAll('.app-link');
  
  appLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Check if it's a placeholder link
      if (href === '#' || href === '') {
        e.preventDefault();
        alert('This app is coming soon! Stay tuned for updates.');
      }
    });
  });
};

// Initialize app link handlers
document.addEventListener('DOMContentLoaded', handleAppLinks);

// ============================================
// Current Year for Footer
// ============================================

const updateCopyrightYear = () => {
  const yearElement = document.querySelector('.current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};

updateCopyrightYear();

// ============================================
// Email Protection (Anti-spam)
// ============================================

const protectEmail = () => {
  const emailLinks = document.querySelectorAll('[data-email]');
  
  emailLinks.forEach(link => {
    const user = link.dataset.emailUser;
    const domain = link.dataset.emailDomain;
    
    if (user && domain) {
      const email = `${user}@${domain}`;
      link.href = `mailto:${email}`;
      if (link.textContent.includes('[at]')) {
        link.textContent = email;
      }
    }
  });
};

// Initialize email protection
document.addEventListener('DOMContentLoaded', protectEmail);

// ============================================
// Performance: Lazy Load Images
// ============================================

if ('loading' in HTMLImageElement.prototype) {
  // Browser supports lazy loading
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src || img.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ============================================
// Analytics Helper (Optional)
// ============================================

const trackEvent = (category, action, label) => {
  // If you integrate Google Analytics or similar
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': category,
      'event_label': label
    });
  }
  
  console.log(`Analytics: ${category} - ${action} - ${label}`);
};

// Example usage: Track app link clicks
document.querySelectorAll('.app-link').forEach(link => {
  link.addEventListener('click', () => {
    const appName = link.closest('.app-card')?.querySelector('h3')?.textContent || 'Unknown App';
    const platform = link.textContent.includes('App Store') ? 'iOS' : 'Android';
    trackEvent('App Links', 'Click', `${appName} - ${platform}`);
  });
});

// ============================================
// Accessibility: Skip to Main Content
// ============================================

const skipLink = document.querySelector('.skip-to-content');
if (skipLink) {
  skipLink.addEventListener('click', (e) => {
    e.preventDefault();
    const mainContent = document.querySelector('main') || document.querySelector('.container');
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      mainContent.removeAttribute('tabindex');
    }
  });
}

// ============================================
// Form Validation (If contact forms are added)
// ============================================

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// ============================================
// Console Message
// ============================================

console.log('%c👋 Welcome to FlutterDragon.com!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with ❤️ by an independent developer', 'color: #10b981; font-size: 12px;');
