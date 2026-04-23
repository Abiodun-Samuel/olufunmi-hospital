(function () {
  'use strict';

  // ===== 1. PRELOADER =====
  var preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.classList.add('hidden');
        preloader.addEventListener('transitionend', function () {
          preloader.style.display = 'none';
        }, { once: true });
      }, 1500);
    });
  }

  // ===== 2. NAVIGATION =====
  var navbar = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileMenuClose = document.getElementById('mobileMenuClose');
  var mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');

  if (navbar) {
    function handleNavScroll() {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();
  }

  if (hamburger && mobileMenu) {
    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open main menu');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Close main menu' : 'Open main menu');
      document.body.style.overflow = isOpen ? 'hidden' : '';

      if (isOpen) {
        mobileLinks.forEach(function (link, index) {
          link.style.animationDelay = index * 60 + 'ms';
          link.classList.add('animate-in');
        });
      } else {
        mobileLinks.forEach(function (link) {
          link.classList.remove('animate-in');
          link.style.animationDelay = '0ms';
        });
      }
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMobileMenu();
      });
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    document.addEventListener('click', function (e) {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target) && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
        hamburger.focus();
      }
    });
  }

  // Active link highlighting
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu .nav-link').forEach(function (link) {
    var linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===== 3. SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      var targetPos = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    });
  });

  // ===== 4. BACK-TO-TOP =====
  var backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== 5. HERO PARTICLE CANVAS =====
  var heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas) {
    var ctx = heroCanvas.getContext('2d');
    var particles = [];
    var colors = ['rgba(255,255,255,0.6)', 'rgba(42,157,143,0.7)', 'rgba(201,168,76,0.6)'];

    function resizeCanvas() {
      heroCanvas.width = heroCanvas.offsetWidth;
      heroCanvas.height = heroCanvas.offsetHeight;
    }

    function drawCross(context, x, y, size) {
      context.fillRect(x - size / 2, y - size / 6, size, size / 3);
      context.fillRect(x - size / 6, y - size / 2, size / 3, size);
    }

    function createParticle() {
      return {
        x: Math.random() * heroCanvas.width,
        y: Math.random() * heroCanvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: 4 + Math.random() * 8,
        opacity: 0.2 + Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    }

    function initParticles() {
      particles = [];
      for (var i = 0; i < 80; i++) {
        particles.push(createParticle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
      particles.forEach(function (p) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.size) p.x = heroCanvas.width + p.size;
        if (p.x > heroCanvas.width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = heroCanvas.height + p.size;
        if (p.y > heroCanvas.height + p.size) p.y = -p.size;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        drawCross(ctx, p.x, p.y, p.size);
        ctx.restore();
      });
      requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    initParticles();
    animateParticles();

    window.addEventListener('resize', function () {
      resizeCanvas();
      initParticles();
    });
  }

  // ===== 6. HERO PARALLAX =====
  var hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function () {
      if (window.scrollY < hero.offsetHeight) {
        hero.style.transform = 'translateY(' + window.scrollY * 0.4 + 'px)';
      }
    }, { passive: true });
  }

  // ===== 7. TYPED.JS =====
  var typedEl = document.getElementById('hero-typed');
  if (typedEl && typeof Typed !== 'undefined') {
    new Typed('#hero-typed', {
      strings: [
        'World-Class Healthcare',
        'Nursing Education & Training',
        'International Partnerships',
        'Modern Medical Infrastructure'
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // ===== 8. COUNTUP STATS =====
  var statNumbers = document.querySelectorAll('.stat-number[data-target]');
  if (statNumbers.length) {
    function easeOutQuad(t) { return t * (2 - t); }

    var statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-target'));
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null;
        var duration = 2000;

        function step(timestamp) {
          if (!start) start = timestamp;
          var elapsed = timestamp - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = easeOutQuad(progress);
          var current = Math.floor(eased * target);
          el.textContent = current.toLocaleString() + suffix;
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = target.toLocaleString() + suffix;
          }
        }

        requestAnimationFrame(step);
        statObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(function (el) {
      statObserver.observe(el);
    });
  }

  // ===== 9. AOS INIT =====
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic'
    });
  }

  // ===== 10. COUNTDOWN TIMER =====
  var cdDays = document.getElementById('cd-days');
  var cdHours = document.getElementById('cd-hours');
  var cdMins = document.getElementById('cd-mins');
  var cdSecs = document.getElementById('cd-secs');

  if (cdDays && cdHours && cdMins && cdSecs) {
    var targetDate = new Date('2026-05-01T00:00:00');
    var prevValues = { days: -1, hours: -1, mins: -1, secs: -1 };

    function addFlip(el, newVal, key) {
      if (prevValues[key] !== newVal) {
        el.classList.remove('flip');
        void el.offsetWidth;
        el.classList.add('flip');
        el.textContent = newVal < 10 ? '0' + newVal : newVal;
        prevValues[key] = newVal;
        setTimeout(function () { el.classList.remove('flip'); }, 600);
      }
    }

    function updateCountdown() {
      var now = new Date();
      var diff = targetDate - now;

      if (diff <= 0) {
        var expiredMsg = document.getElementById('countdown-expired');
        if (expiredMsg) expiredMsg.style.display = 'block';
        var countdownEl = document.querySelector('.countdown');
        if (countdownEl) countdownEl.style.display = 'none';
        return;
      }

      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var secs = Math.floor((diff % (1000 * 60)) / 1000);

      addFlip(cdDays, days, 'days');
      addFlip(cdHours, hours, 'hours');
      addFlip(cdMins, mins, 'mins');
      addFlip(cdSecs, secs, 'secs');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ===== 11. SWIPER TESTIMONIALS =====
  var testimonialSwiper = document.querySelector('.testimonials-swiper');
  if (testimonialSwiper && typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-swiper', {
      loop: true,
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }
    });
  }

  // ===== 12. GALLERY LIGHTBOX =====
  var galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length) {
    var lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.innerHTML =
      '<button class="lightbox-close" aria-label="Close gallery"><i class="fas fa-times"></i></button>' +
      '<button class="lightbox-prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>' +
      '<img class="lightbox-img" src="" alt="Gallery image">' +
      '<button class="lightbox-next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>';
    document.body.appendChild(lightboxOverlay);

    var lightboxImg = lightboxOverlay.querySelector('.lightbox-img');
    var lightboxClose = lightboxOverlay.querySelector('.lightbox-close');
    var lightboxPrev = lightboxOverlay.querySelector('.lightbox-prev');
    var lightboxNext = lightboxOverlay.querySelector('.lightbox-next');
    var currentLightboxIndex = 0;
    var galleryImages = [];

    galleryItems.forEach(function (item) {
      var img = item.querySelector('img');
      if (img) galleryImages.push(img.src || img.dataset.src);
    });

    function openLightbox(index) {
      currentLightboxIndex = index;
      lightboxImg.src = galleryImages[index];
      lightboxOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightboxOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    function prevImage() {
      currentLightboxIndex = (currentLightboxIndex - 1 + galleryImages.length) % galleryImages.length;
      lightboxImg.src = galleryImages[currentLightboxIndex];
    }

    function nextImage() {
      currentLightboxIndex = (currentLightboxIndex + 1) % galleryImages.length;
      lightboxImg.src = galleryImages[currentLightboxIndex];
    }

    galleryItems.forEach(function (item, index) {
      item.addEventListener('click', function () { openLightbox(index); });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);

    lightboxOverlay.addEventListener('click', function (e) {
      if (e.target === lightboxOverlay) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightboxOverlay.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    });
  }

  // ===== 13. BUTTON RIPPLE =====
  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var rect = btn.getBoundingClientRect();
      var ripple = document.createElement('span');
      var size = Math.max(btn.clientWidth, btn.clientHeight) * 2;
      ripple.style.cssText = [
        'position:absolute',
        'border-radius:50%',
        'background:rgba(255,255,255,0.35)',
        'width:' + size + 'px',
        'height:' + size + 'px',
        'left:' + (e.clientX - rect.left - size / 2) + 'px',
        'top:' + (e.clientY - rect.top - size / 2) + 'px',
        'animation:rippleEffect 0.6s linear',
        'pointer-events:none'
      ].join(';');
      btn.appendChild(ripple);
      setTimeout(function () { ripple.remove(); }, 600);
    });
  });

  // ===== 14. FORM VALIDATION =====
  var validatedForms = document.querySelectorAll('.validated-form');
  if (validatedForms.length) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^(\+?[0-9\s\-\(\)]{7,20})$/;

    function validateField(input) {
      var group = input.closest('.form-group');
      if (!group) return true;
      var errorMsg = group.querySelector('.form-error-msg');
      var isRequired = input.hasAttribute('required');
      var value = input.value.trim();
      var valid = true;
      var message = '';

      if (isRequired && !value) {
        valid = false;
        message = 'This field is required.';
      } else if (value && input.type === 'email' && !emailRegex.test(value)) {
        valid = false;
        message = 'Please enter a valid email address.';
      } else if (value && input.type === 'tel' && !phoneRegex.test(value) && value.length > 5) {
        valid = false;
        message = 'Please enter a valid phone number.';
      }

      if (!valid) {
        input.classList.add('error');
        if (errorMsg) {
          errorMsg.textContent = message;
          errorMsg.classList.add('visible');
        }
      } else {
        input.classList.remove('error');
        if (errorMsg) errorMsg.classList.remove('visible');
      }

      return valid;
    }

    validatedForms.forEach(function (form) {
      var inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');
      var submitBtn = form.querySelector('[type="submit"]');
      var successMsg = form.querySelector('.form-success');
      var formAction = form.getAttribute('action') || '';

      inputs.forEach(function (input) {
        input.addEventListener('blur', function () { validateField(input); });
        input.addEventListener('input', function () {
          if (input.classList.contains('error')) validateField(input);
        });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var allValid = true;
        inputs.forEach(function (input) {
          if (!validateField(input)) allValid = false;
        });

        if (!allValid) {
          var firstError = form.querySelector('.form-input.error, .form-select.error, .form-textarea.error');
          if (firstError) firstError.focus();
          return;
        }

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.classList.add('loading');
          var originalHTML = submitBtn.innerHTML;
          submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';

          if (formAction && formAction.indexOf('formsubmit.co') !== -1) {
            var formData = new FormData(form);
            fetch(formAction, {
              method: 'POST',
              body: formData,
              headers: { 'Accept': 'application/json' }
            })
            .then(function (response) {
              submitBtn.disabled = false;
              submitBtn.classList.remove('loading');
              submitBtn.innerHTML = originalHTML;
              if (response.ok) {
                form.reset();
                if (successMsg) {
                  successMsg.classList.add('visible');
                  window.scrollTo({ top: successMsg.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
                  setTimeout(function () { successMsg.classList.remove('visible'); }, 8000);
                }
              } else {
                alert('There was a problem sending your message. Please email us directly.');
              }
            })
            .catch(function () {
              submitBtn.disabled = false;
              submitBtn.classList.remove('loading');
              submitBtn.innerHTML = originalHTML;
              alert('Connection error. Please email us directly at olufunmihospital@gmail.com or call +234 903 751 9585.');
            });
          } else {
            setTimeout(function () {
              submitBtn.disabled = false;
              submitBtn.classList.remove('loading');
              submitBtn.innerHTML = originalHTML;
              form.reset();
              if (successMsg) {
                successMsg.classList.add('visible');
                setTimeout(function () { successMsg.classList.remove('visible'); }, 8000);
              }
            }, 1200);
          }
        }
      });
    });
  }

  // ===== 15. PROCUREMENT CONDITIONAL FIELDS =====
  var supplierToggle = document.getElementById('supplier-toggle');
  var supplierFields = document.getElementById('supplier-fields');

  if (supplierToggle && supplierFields) {
    supplierToggle.addEventListener('change', function () {
      if (this.checked) {
        supplierFields.style.maxHeight = supplierFields.scrollHeight + 'px';
        supplierFields.style.opacity = '1';
      } else {
        supplierFields.style.maxHeight = '0';
        supplierFields.style.opacity = '0';
      }
    });
  }

  // ===== 16. SECTION TITLE UNDERLINE ANIMATION =====
  var sectionTitles = document.querySelectorAll('.section-title');
  if (sectionTitles.length) {
    var titleObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          titleObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    sectionTitles.forEach(function (title) {
      titleObserver.observe(title);
    });
  }

  // ===== 17. MOBILE MENU STAGGER =====
  // Handled in section 2 above — stagger delay set when hamburger opens

  // ===== 18. CARD TILT (DESKTOP ONLY) =====
  if (!window.matchMedia('(pointer: coarse)').matches) {
    var tiltCards = document.querySelectorAll('.card:not(.team-card), .procurement-card, .mvv-card');
    tiltCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;
        var mouseX = e.clientX - centerX;
        var mouseY = e.clientY - centerY;
        var tiltX = (mouseY / (rect.height / 2)) * 5;
        var tiltY = -(mouseX / (rect.width / 2)) * 5;
        card.style.transform = 'perspective(800px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateZ(4px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  // ===== 19. SCROLL PROGRESS BAR =====
  var scrollProgressBar = document.getElementById('scrollProgress');
  if (scrollProgressBar) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgressBar.style.width = pct + '%';
    }, { passive: true });
  }

  // ===== 20. LAZY IMAGE LOADING =====
  var lazyImages = document.querySelectorAll('img[data-src]');
  if (lazyImages.length) {
    var imageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.onload = function () { img.classList.add('loaded'); };
        imageObserver.unobserve(img);
      });
    }, { rootMargin: '100px' });

    lazyImages.forEach(function (img) {
      imageObserver.observe(img);
    });
  }

})();
