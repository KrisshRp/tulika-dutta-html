/* ===================================
   Tulika Landing Page - Custom Scripts
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Services Tabs Carousel with Synchronized Navigation
    // ===================================
    
    if (document.querySelector('.services-tabs-new')) {
        const servicesTabs = document.querySelectorAll('#servicesTab .nav-link');
        const servicesTabsContainer = document.querySelector('.services-nav-tabs');
        const servicesTabPanes = document.querySelectorAll('#servicesTabContent .tab-pane');
        const prevBtn = document.getElementById('servicesPrevBtn');
        const nextBtn = document.getElementById('servicesNextBtn');
        
        let currentServiceIndex = 0;
        let autoCarouselInterval;
        let isAutoCarouselActive = true;
        let visibleTabsCount = getVisibleTabsCount();
        
        // Get number of visible tabs based on screen size
        function getVisibleTabsCount() {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 992) return 4; // Desktop
            if (screenWidth >= 768) return 2;  // Tablet
            return 1; // Mobile
        }
        
        // Calculate tab position and update transform
        function updateTabsPosition() {
            if (!servicesTabs[0]) return; // Safety check
            
            // Get actual measurements
            const tabElement = servicesTabs[0];
            const tabStyle = window.getComputedStyle(tabElement);
            const tabWidth = tabElement.offsetWidth;
            const tabMarginRight = parseInt(tabStyle.marginRight) || 0;
            const actualTabWidth = tabWidth + tabMarginRight + 15; // tab + margin + gap
            
            const containerElement = servicesTabsContainer.parentElement;
            const containerWidth = containerElement.offsetWidth;
            const totalTabsWidth = servicesTabs.length * actualTabWidth;
            
            // Calculate the position to center the active tab
            let targetPosition = 0;
            
            if (totalTabsWidth > containerWidth) {
                const centerOffset = (containerWidth / 2) - (actualTabWidth / 2);
                targetPosition = centerOffset - (currentServiceIndex * actualTabWidth);
                
                // Improved constraint logic - allow last tabs to show properly
                const maxPosition = 0;
                const minPosition = containerWidth - totalTabsWidth;
                
                // Special handling for last few tabs that can't center
                const lastTabsCount = Math.ceil(visibleTabsCount / 2);
                const isLastTab = currentServiceIndex >= (servicesTabs.length - lastTabsCount);
                
                if (isLastTab) {
                    // For last tabs, prioritize showing the tab over perfect centering
                    const minVisiblePosition = containerWidth - totalTabsWidth + (actualTabWidth * 3); // Show at least 10% of last tab
                    targetPosition = Math.min(Math.min(-1100, minVisiblePosition), Math.min(maxPosition, targetPosition));
                } else {
                    // Normal constraint for other tabs
                    targetPosition = Math.max(minPosition, Math.min(maxPosition, targetPosition));
                }
                // console.log(minPosition, maxPosition, targetPosition, containerWidth, totalTabsWidth, actualTabWidth, "min v position", containerWidth - totalTabsWidth + (actualTabWidth * 3));
                
            }
            
            servicesTabsContainer.style.transform = `translateX(${targetPosition}px)`;
        }
        
        // Show specific service tab and update position
        function showService(index, updatePosition = true) {
            // Validate index
            if (index < 0 || index >= servicesTabs.length) {
                console.warn('Invalid service index:', index);
                return;
            }
            
            // Remove active class from all tabs
            servicesTabs.forEach(tab => tab.classList.remove('active'));
            servicesTabPanes.forEach(pane => {
                pane.classList.remove('show', 'active');
            });
            
            // Add active class to current tab and pane
            const currentTab = servicesTabs[index];
            if (currentTab) {
                currentTab.classList.add('active');
                const targetPane = document.querySelector(currentTab.getAttribute('data-bs-target'));
                if (targetPane) {
                    targetPane.classList.add('show', 'active');
                }
            }
            
            currentServiceIndex = index;
            
            if (updatePosition) {
                // Small delay to ensure DOM updates are complete
                setTimeout(() => {
                    updateTabsPosition();
                }, 10);
            }
        }
        
        // Auto-carousel functionality
        function startAutoCarousel() {
            if (!isAutoCarouselActive) return;
            
            autoCarouselInterval = setInterval(() => {
                if (!isAutoCarouselActive) return;
                
                // Move to next service (loop back to 0 when reaching end)
                const nextIndex = (currentServiceIndex + 1) % servicesTabs.length;
                showService(nextIndex);
                
            }, 4000); // 4 seconds delay
        }
        
        function stopAutoCarousel() {
            isAutoCarouselActive = false;
            if (autoCarouselInterval) {
                clearInterval(autoCarouselInterval);
            }
        }
        
        // Manual tab click handlers
        servicesTabs.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                showService(index);
                stopAutoCarousel();
            });
        });
        
        // Previous button handler
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const prevIndex = currentServiceIndex > 0 ? currentServiceIndex - 1 : servicesTabs.length - 1;
                showService(prevIndex);
                stopAutoCarousel();
            });
        }
        
        // Next button handler
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const nextIndex = (currentServiceIndex + 1) % servicesTabs.length;
                showService(nextIndex);
                stopAutoCarousel();
            });
        }
        
        // Handle window resize with debouncing
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                visibleTabsCount = getVisibleTabsCount();
                // Recalculate position after resize
                setTimeout(() => {
                    updateTabsPosition();
                }, 50); // Small delay to ensure DOM has updated
            }, 150);
        });
        
        // Pause auto-carousel on hover
        const servicesSection = document.querySelector('.services-tabs-new');
        if (servicesSection) {
            servicesSection.addEventListener('mouseenter', () => {
                if (autoCarouselInterval) {
                    clearInterval(autoCarouselInterval);
                }
            });
            
            servicesSection.addEventListener('mouseleave', () => {
                if (isAutoCarouselActive) {
                    startAutoCarousel();
                }
            });
        }
        
        // Initialize
        function initialize() {
            // Ensure DOM is ready and elements are measured
            if (servicesTabs.length === 0 || !servicesTabs[0].offsetWidth) {
                setTimeout(initialize, 50);
                return;
            }
            
            updateTabsPosition();
            startAutoCarousel();
        }
        
        // Start initialization
        setTimeout(initialize, 100);
        
        console.log('Services tabs carousel with synchronized navigation initialized successfully');
    }

    // ===================================
    // Case Studies Carousel Initialization
    // ===================================
    
    if (document.querySelector('.case-studies-swiper-new')) {
        const caseStudiesSwiper = new Swiper('.case-studies-swiper-new', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.case-studies-swiper-new .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.case-studies-swiper-new .swiper-button-next',
                prevEl: '.case-studies-swiper-new .swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            }
        });
    }

    // ===================================
    // Testimonials Carousel Initialization
    // ===================================
    
    if (document.querySelector('.testimonials-swiper-new')) {
        const testimonialsSwiper = new Swiper('.testimonials-swiper-new', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonials-swiper-new .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.testimonials-swiper-new .swiper-button-next',
                prevEl: '.testimonials-swiper-new .swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            }
        });
    }

    // ===================================
    // Certificates Carousel Initialization
    // ===================================
    
    if (document.querySelector('.certificates-swiper-new')) {
        const certificatesSwiper = new Swiper('.certificates-swiper-new', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.certificates-swiper-new .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.certificates-swiper-new .swiper-button-next',
                prevEl: '.certificates-swiper-new .swiper-button-prev',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            }
        });
    }

    // ===================================
    // Blog Carousel Initialization
    // ===================================
    
    if (document.querySelector('.blog-swiper-new')) {
        const blogSwiper = new Swiper('.blog-swiper-new', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.blog-swiper-new .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.blog-swiper-new .swiper-button-next',
                prevEl: '.blog-swiper-new .swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            }
        });
    }

    // ===================================
    // Smooth Scroll Animation
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });

    // ===================================
    // Form Validation (Basic)
    // ===================================
    
    const contactForm = document.querySelector('.contact-form-new form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // Show success message (prototype only)
                alert('Thank you for your message! This is a prototype form.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // ===================================
    // Carousel Touch/Swipe Enhancement
    // ===================================
    
    // Add touch-friendly navigation for mobile devices
    document.querySelectorAll('.swiper').forEach(swiper => {
        swiper.addEventListener('touchstart', function() {
            // Pause autoplay on touch
            if (swiper.swiper && swiper.swiper.autoplay) {
                swiper.swiper.autoplay.stop();
            }
        });
        
        swiper.addEventListener('touchend', function() {
            // Resume autoplay after touch
            setTimeout(() => {
                if (swiper.swiper && swiper.swiper.autoplay) {
                    swiper.swiper.autoplay.start();
                }
            }, 3000);
        });
    });

    // ===================================
    // Console Log for Debugging
    // ===================================
    
    console.log('Tulika Landing Page - Custom scripts loaded successfully');
    
});

// ===================================
// Error Handling for Swiper
// ===================================

window.addEventListener('error', function(e) {
    if (e.message.includes('Swiper')) {
        console.warn('Swiper initialization error:', e.message);
        console.log('Falling back to static display');
    }
});

// ===================================
// Utility Functions
// ===================================

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation delay
function addAnimationDelay(elements, baseDelay = 100) {
    elements.forEach((element, index) => {
        element.style.animationDelay = `${baseDelay * index}ms`;
    });
}