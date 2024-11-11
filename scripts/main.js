
class CustomSwiper {
    constructor(container, options) {
        this.container = container;
        this.wrapper = this.container.parentElement;
        this.slides = this.container.children;
        this.defaultLength = this.slides.length;
    
        const { activeSlide, btnPrev, btnNext, gap, autoplay, baseSlideSize, activeSlideSizeMultiplier, scroll, activeClass, baseClass, breakpoints } =
            options;
    
        this.activeSlide = 2;
        this.btnPrev = btnPrev;
        this.btnNext = btnNext;
        this.gap = gap;
        this.autoplay = autoplay;
        this.scroll = scroll;
        this.breakpoints = breakpoints;

        this.activeClass = activeClass;
        this.baseClass = baseClass;
        this.activeSlideSizeMultiplier = (activeSlideSizeMultiplier) ? activeSlideSizeMultiplier : 1;
        this.containerWidth = this.container.getBoundingClientRect().width;
    
        this.updateSlideSizes = () => {

            this.baseSlideSize = baseSlideSize * (window.screen.width / 1024);

            if (this.breakpoints) {
                for (let [breakpoint, modifier] of Object.entries(this.breakpoints)) {
                    if (window.screen.width <= breakpoint) {
                        this.baseSlideSize = baseSlideSize * (window.screen.width / modifier);
                        break;
                    }
                }
            }

        }

        this.updateSlideSizes();

        window.addEventListener('resize', () => {
            this.placeButtons();
        })

        this.init = () => {

            this.active = true;
            this.container.style.display = "flex";
            this.oldContainerWidth = this.container.style.width;
            this.container.style.width = '100vw';
    
            btnPrev.addEventListener("click", () => {
                if (! this.scrollIsActive) {
                    this.stepDown();
                    this.setCooldown(this.autoplay * 4)
                }

            });
            btnNext.addEventListener("click", () => {
                if (! this.scrollIsActive) {
                    this.stepUp();
                    this.setCooldown(this.autoplay * 4)
                }

            });
    
            
            if (this.activeSlide + 3 >= this.slides.length) {
                this.extend("after");
            } else if (this.activeSlide - 2 <= 0) {
                this.extend("before");
            }

            this.resetSlides();
            this.updateStyles();
            this.placeButtons();
            this.triggerScroll();

            this.setCooldown(this.autoplay);
            this.initAutoplay();
    
            window.addEventListener("resize", () => {
                if (this.active) {
                    this.updateSlideSizes();
                    this.resetSlides();
                    this.updateStyles();
                    this.triggerScroll();
                    this.initAutoplay();
                    this.placeButtons();
                }

            });

            const init = new Event('init');
            this.container.dispatchEvent(init);

            Array.from(this.slides).forEach((slide) => {
                slide.style.transitionProperty = `background, opacity, transform`;
                slide.style.transitionDuration = '500ms';
            })
        };
    
        this.placeButtons = () => {

        
            const swiperHeight = this.container.children[this.activeSlide].getBoundingClientRect().height;
            const buttonHeight = this.btnPrev.getBoundingClientRect().height;

            this.btnNext.style.top = (swiperHeight) / 2 + 'px';
            this.btnPrev.style.top = (swiperHeight) / 2 + 'px';
        }

        this.triggerScroll = () => {
            if (!this.scroll) {
                return;
            }
            if (window.screen.width <= 1200) {
            Array.from(this.slides).forEach((slide) => {
                slide.style.transition = "transform";
                slide.style.transitionDuration = "0.5s";
            });
            this.wrapper.addEventListener("touchstart", this.handleTouchstart);
            this.wrapper.addEventListener("touchend", this.handleTouchend);
            this.scrollIsActive = true;
            } else {
            Array.from(this.slides).forEach((slide) => {
                slide.style.transitionDuration = "0";
            });
            this.wrapper.removeEventListener("touchstart", this.handleTouchstart);
            this.wrapper.removeEventListener("touchend", this.handleTouchend);
            this.scrollIsActive = false;
            }
        };
        this.handleTouchstart = (event) => {
            this.touchStart = true;
            this.oldX = event.touches[0].clientX;
            this.wrapper.addEventListener("touchmove", this.handleTouchmove);
        };
        this.handleTouchmove = (event) => {
            if (this.touchStart) {
            this.newX = event.touches[0].clientX;
            }
        };
        this.handleTouchend = (event) => {
            this.wrapper.removeEventListener("touchmove", this.handleTouchmove);
            this.touchStart = false;
            const scrollSize = Math.abs(this.newX - this.oldX) / window.screen.width;

            if (scrollSize && scrollSize >= 0.2) {
                if (this.newX <= this.oldX) {
                    this.stepUp();
                    } else {
                    this.stepDown();
                    }
            }


        };
    
        this.resetSlides = () => {
            const containerWidth = window.screen.width;
            this.activeSlideSize = this.baseSlideSize * this.activeSlideSizeMultiplier;
            if (this.activeSlideSize >= containerWidth * 0.9) {
                this.activeSlideSize = containerWidth * 0.9;
            }
    
            this.centerSlidesHorizontally();
        };
        this.centerSlidesHorizontally = () => {
            let initialTranslate;
            let centerOffset;
            const containerWidth = window.screen.width;
    
            Array.from(this.slides).forEach((slide, index) => {
            centerOffset = (containerWidth - this.activeSlideSize) / 2;
            this.centerOffset = centerOffset;
            initialTranslate = -(this.baseSlideSize + this.gap) * this.activeSlide + centerOffset;
            slide.style.transform = `translateX(${initialTranslate}px)`;
            slide.dataset.translate = initialTranslate;
            });
        };
    
        this.stepUp = () => {

            Array.from(this.slides).forEach((slide, index) => {
            slide.dataset.translate =
                Number(slide.dataset.translate) - this.gap - this.baseSlideSize;
            slide.style.transform = `translateX(${slide.dataset.translate}px)`;
            });
    
            ++this.activeSlide;
    
            this.updateStyles();
    
            if (this.activeSlide + 3 >= this.slides.length) {
            this.extend("after");
            }
            
            const step = new Event('step');
            this.container.dispatchEvent(step);
        };
        this.stepDown = () => {

            if (this.activeSlide - 3 <= 0) {
            this.extend("before");
            setTimeout(this.stepDown, 50);
            } else {
            Array.from(this.slides).forEach((slide, index) => {
                slide.dataset.translate =
                Number(slide.dataset.translate) + this.gap + this.baseSlideSize;
                slide.style.transform = `translateX(${slide.dataset.translate}px)`;
            });
            --this.activeSlide;
            this.updateStyles();

            const step = new Event('step');
            this.container.dispatchEvent(step);
            }
        };
        this.extend = (direction) => {

            if (direction === "before") {
                Array.from(this.slides).reverse().forEach((slide) => {
                    slide.classList.remove("transition");
                    slide.classList.remove('duration-500');
                    slide.style.transition = ``;
                    slide.style.transitionProperty = ``;
                    slide.style.transitionDuration = '';
                    const newSlide = slide.cloneNode(true);
                    this.container.prepend(newSlide);
                    ++this.activeSlide;
                });
                this.resetSlides();
                Array.from(this.slides).forEach((slide) => {
                    setTimeout(() => {
                    slide.style.transitionProperty = `background, opacity, transform`;
                    slide.style.transitionDuration = '500ms';
                    }, 50);
                });
            } else {
                Array.from(this.slides).forEach((slide, index) => {
                    const newSlide = slide.cloneNode(true);
                    this.container.append(newSlide);
                });
            }

            const extend = new Event('extend');
            this.container.dispatchEvent(extend);
        };
        this.updateStyles = () => {
            Array.from(this.slides).forEach((slide, index) => {
            slide.style.transitionProperty = `background-color, opacity, transform`;
            // slide.style.transitionDuration = '500ms';
            if (index == this.activeSlide) {
                slide.style.width = this.activeSlideSize + "px";
                slide.style.minWidth = this.activeSlideSize + "px";
                if (this.activeClass) {
                    slide.classList.add(this.activeClass)
                }
                if (this.baseClass) {
                    slide.classList.remove(this.baseClass);
                }
            } else {
                slide.style.width = this.baseSlideSize + "px";
                slide.style.minWidth = this.baseSlideSize + "px";
                if (this.activeClass) {
                    slide.classList.remove(this.activeClass)
                }
                if (this.baseClass) {
                    slide.classList.add(this.baseClass);
                }
            }
            slide.style.flexShrink = 0;
            });
        };

        //autoplay module
        this.setCooldown = function(timeout) {
            if (this.cooldown) {
                clearTimeout(this.cooldownTimeout)
            }
            this.cooldown = true;
            const cooldownTimeout = setTimeout(() => {
                this.cooldown = false
            }, timeout);
            this.cooldownTimeout = cooldownTimeout
            

        }
        this.initAutoplay = function() {

            if (!this.autoplay) {
                return
            }

            if (! this.startedAutoplay) {
                const autoplayInterval = setInterval(() => {
                    if (!this.cooldown) {
                        this.stepUp()
                    }
                }, this.autoplay);
                this.autoplayInterval = autoplayInterval;
            }

            this.startedAutoplay = true;
            document.addEventListener("visibilitychange", this.handleUserQuit);
        }
        this.handleUserQuit = () => {
            this.setCooldown(this.autoplay);
            const alwaysCooldown = setInterval(() => {
                this.setCooldown(this.autoplay)
            }, this.autoplay);
            if (!document.hidden) {
                clearInterval(alwaysCooldown);
            }
        }
        this.removeSwiper = () => {
            this.active = false;
            clearInterval(this.autoplayInterval);
            this.container.style.width = '100%';
            Array.from(this.slides).forEach((slide, index) => {
                if (index  >= this.defaultLength) {
                    slide.remove()
                } else {
                    slide.dataset.translate = '';
                    slide.style.transform = 'translateX(0px)';
                    slide.style.width = 'auto';
                    slide.style.minWidth = 'min-content';
                    slide.style.flexBasis = '0';
                    slide.style.flexGrow = '1';
                    slide.classList.remove(this.activeClass);
                }
            })
        }
    }
}

//scrollTop btn
const scrollTopBtn = document.querySelector('.js-scrolltop-btn');
scrollTopBtn.addEventListener("click", function() { 
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); 
  }); 

//anchors fix
const anchorLinks = document.querySelectorAll('.js-anchor-link');

for (let link of anchorLinks) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const scrollToElementId = link.getAttribute('href').slice(1);
        const scrollToElement = document.getElementById(scrollToElementId);
        scrollToElement.scrollIntoView({behavior : 'smooth'});
    })
}

//services 

function attachCardDetails(options = {
    isIncludeIntervals : false,
}) {
    let cards = document.querySelectorAll('.js-services-card');
    let cardDetails = document.querySelectorAll('.js-services-details');
    const isIncludeIntervals = options.isIncludeIntervals;

    autoShowIntervals = [];

    cards.forEach((card, index) => {

        const showDetailsTemporarily = (timeout) => {

            if (window.screen.width > 1200) {
                cardDetails[index].setAttribute('open', 'true');
                card.classList.add('services-card--active');
                setTimeout(() => {
                    const details = cardDetails[index];
                    details.removeAttribute('open');
                    card.classList.remove('services-card--active');
    
                    const animatedList = details.children[1];
                    animatedList.remove();
                    details.append(animatedList)
                }, timeout)
            }

        }

        if (window.screen.width >= 1200 && isIncludeIntervals) {
            const autoShowTimeout = setTimeout(() => {
                showDetailsTemporarily(3000)
                const autoShowDetailsInterval = setInterval(() => {
                    showDetailsTemporarily(3000)
                }, 3000 * cards.length);
                autoShowIntervals.push(autoShowDetailsInterval);
            }, 3000 * index)
        }

        if (window.screen.width >= 1200) {
            card.addEventListener('mouseenter', () => {
                cardDetails[index].setAttribute('open', 'true');
                cardDetails.forEach((cardDetail, detailsIndex) => {
                    if (detailsIndex !== index) {
                        cardDetail.removeAttribute('open');
                        cardDetail.parentElement.classList.remove('services-card--active')
                    }
                })
                autoShowIntervals.forEach((interval) => {
                    clearInterval(interval);
                })
                
            });
            card.addEventListener('mouseleave', () => {
                const details = cardDetails[index]
                details.removeAttribute('open');
        
                // reset animation
                const animatedList = details.children[1];
                animatedList.remove();
                details.append(animatedList);

                details.parentElement.classList.remove('services-card--active')
        
            })
        } else {
            card.addEventListener('hover', (event) => {
                event.preventDefault()
            })
            // card.addEventListener('click', handleCardTouch)
        }
    });

    window.addEventListener('resize', () => {
        if (window.screen.width <= 1200) {
            autoShowIntervals.forEach((interval) => {
                clearInterval(interval);
            });
        }
    })

}
attachCardDetails({isIncludeIntervals : true});
window.addEventListener('resize', () => {
    attachCardDetails();
})
let servicesSwiperIsSetup = false;
let servicesSwiper;

function setupServicesSwiper() {
    servicesSwiper = new CustomSwiper(
        document.querySelector(".js-services-container"),
        {
            btnPrev: document.querySelector(".js-services-btn-prev"),
            btnNext: document.querySelector(".js-services-btn-next"),
            baseSlideSize: 450,
            gap: 0,
            activeSlideSizeMultiplier : 1,
            scroll : false,
            activeClass : 'services-card--active',
            autoplay : false,
            breakpoints : {
                800 : 700,
            }
        }
    );
    servicesSwiper.container.addEventListener('extend', () => {
        attachCardDetails();
    })
    servicesSwiper.container.addEventListener('step', () => {
        Array.from(servicesSwiper.slides).forEach((slide, index) => {
            if (index === servicesSwiper.activeSlide) {
                slide.children[1].setAttribute('open', 'true')
            } else {
                slide.children[1].removeAttribute('open')
            }
        })
    })
    servicesSwiper.container.addEventListener('init', () => {
        Array.from(servicesSwiper.slides).forEach((slide, index) => {
            if (index === servicesSwiper.activeSlide) {
                slide.children[1].setAttribute('open', 'true')
            } else {
                slide.children[1].removeAttribute('open')
            }
        })
    })
    servicesSwiper.init();

    setTimeout(() => {
        servicesSwiper.initAutoplay()
    }, 1000);

    servicesSwiperIsSetup = true;
}
function removeServicesSwiper() {
    servicesSwiper.removeSwiper();
    servicesSwiperIsSetup = false;
    Array.from(servicesSwiper.slides).forEach((card) => {
        const cardDetails = card.children[1];
        cardDetails.removeAttribute('open')
    })
}

if (window.screen.width <= 1200) {
    setupServicesSwiper();
}
window.addEventListener('resize', () => {
    if (! servicesSwiperIsSetup && window.screen.width <= 1200) {
        setupServicesSwiper()
    } else if (servicesSwiperIsSetup && window.screen.width > 1200) {
        removeServicesSwiper()
    }
})

//vacancies
const vacanciesSwiper = new CustomSwiper(
    document.querySelector(".js-vacancies-swiper"),
    {
      btnPrev: document.querySelector(".js-vacancies-btn-prev"),
      btnNext: document.querySelector(".js-vacancies-btn-next"),
      baseSlideSize: 200,
      gap: 20,
      activeSlideSizeMultiplier : 2.4,
      scroll : true,
      baseClass : 'vacancies--hide',
      activeClass : 'vacancies-slide--visible',
      breakpoints : {
        1400 : 700,
        1000 : 400,
        480 : 200,
    }
    }
  );


vacanciesSwiper.placeButtons = function() {

    const activeSlide = this.slides[this.activeSlide];

    const swiperHeight = activeSlide.getBoundingClientRect().height;
    const buttonHeight = this.btnPrev.getBoundingClientRect().height;
    const buttonWidth = this.btnPrev.getBoundingClientRect().width

    this.btnNext.style.top = (swiperHeight) / 2 + 'px';
    this.btnPrev.style.top = (swiperHeight) / 2 + 'px';

    let btnOffsetFromCenter;

    if (window.screen.width >= 1000) {
        btnOffsetFromCenter = 100
    } else if (window.screen.width >= 800) {
        btnOffsetFromCenter = 80
    } else {
        btnOffsetFromCenter = activeSlide.getBoundingClientRect().left - buttonWidth - 30
    }
}

vacanciesSwiper.placeButtons = vacanciesSwiper.placeButtons.bind(vacanciesSwiper);

vacanciesSwiper.init();

const vacanciesInputs = document.querySelectorAll('.js-vacancies-input');
for (let input of vacanciesInputs) {
    input.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}

//parnters

class Looper {
    constructor(container, options) {

        this.container = container;

        this.defaultCards = Array.from(container.children).reverse();
        let { gap, direction, duration, initialOffset } = options;
        if (!gap) {
            gap = Number(container.style.gap.replace(/px$/, ''));
        }
        if (gap) {
            this.container.style.gap = gap + 'px'
        }
        this.gap = gap;
        this.loopDirection = (direction === 'right') ? 'right' : 'left';
        this.updateDuration = () => {
            this.duration = duration * (window.screen.width / 4000);
        }
        this.initialOffset = (initialOffset) ? initialOffset : 0;

        const containerWidth = this.container.getBoundingClientRect().width;
        if (!this.initialOffset || this.initialOffset > containerWidth) {
            this.initialOffset = 0;
        }
        if (this.loopDirection === 'left' && this.initialOffset > 0) {
            this.initialOffset = this.initialOffset - containerWidth;
        }

        this.translateDistance = container.getBoundingClientRect().width + this.gap + this.initialOffset;

        this.createCards = function() {

            const defaultCards = this.defaultCards;
            const ww = window.screen.width;

            let currentLength = Array.from(defaultCards).reduce((accumulator, element) => {
                return accumulator += element.getBoundingClientRect().width + gap
            }, 0) - gap;

            while (currentLength < (window.screen.width * 8)) {
                if (this.loopDirection !== 'right') {
                    Array.from(defaultCards).reverse().forEach((card) => {
                        this.container.prepend(card.cloneNode(true));
                        currentLength = currentLength + card.getBoundingClientRect().width + this.gap;
                    });
                } else {
                    Array.from(defaultCards).forEach((card) => {
                        this.container.prepend(card.cloneNode(true));
                        currentLength = currentLength + card.getBoundingClientRect().width + this.gap;
                    });
                }

            }

            const finalContainerWidth = this.container.getBoundingClientRect().width
            if (this.loopDirection === 'right') {
                this.container.style.right = finalContainerWidth - ww + 'px';
            }
        }

        this.init = function() {

            this.updateDuration();
            this.createCards();

            const translateFunction = (this.loopDirection === 'right') ? `translateX(${this.translateDistance}px)` : `translateX(-${this.translateDistance}px)`;

            this.container.animate([
                {transform : `translateX(${this.initialOffset}px)`},
                {transform : translateFunction}
            ], {
                duration: this.duration,
                iterations: Infinity
            });

        }

        this.reset = function() {

            this.container.innerHTML = '';
            this.defaultCards = Array.from(this.defaultCards).reverse()
            this.defaultCards.forEach((element) => {
                this.container.append(element);
            });
            this.container.getAnimations().forEach((anim) => {
                anim.cancel();
            })
        }

        window.addEventListener('resize', () => {

            if (this.resizeTimeout) {
                return
            }
            const resizeTimeout = setTimeout(() => {
                this.reset();
                this.init();
                this.resizeTimeout = null;
            }, 100);
            this.resizeTimeout = resizeTimeout

        }) 
    }

}

const cardContainers = document.querySelectorAll('.js-partners-card-row');

window.onload = () => {
    cardContainers.forEach((container, index) => {
        let looper;
        if (index === 0) {
            looper = new Looper(container, {gap : 20, direction : 'left', duration : 240000});
        } else if (index === 1) {
            looper = new Looper(container, {gap : 20, direction : 'right', duration : 250000, initialOffset : 20});
        } else if (index === 2) {
            looper = new Looper(container, {gap : 20, direction : 'right', duration : 355000, initialOffset : -20});
        }
        looper.init();
    });
}

//burger

const burger = document.querySelector('.js-burger-menu');
const burgerBtn = document.querySelector('.js-burger-btn');
const burgerCloseBtn = document.querySelector('.js-burger-close-btn');

const burgerLinkWrappers = Array.from(document.querySelectorAll('.js-burger-link')).map((link) => link.parentElement);

class BurgerMenu {
    constructor(element, breakpoint, btnsList) {

        this.menu = element;
        this.isShowing = false;


        this.toggle = (clickEvent) => {

            if (clickEvent) {
                clickEvent.stopPropagation();
            }

            if (this.menu.style.display === 'flex') {
                this.menu.style.display = 'none';
                this.isShowing = false;
                window.removeEventListener('click', this.handleClickout)
            } else {
                this.menu.style.display = 'flex';
                this.isShowing = true;
                setTimeout(() => {
                    window.addEventListener('click', this.handleClickout)
                }, 100)
            }
            console.log('toggle burger')
        }

        for (let btn of btnsList) {
            btn.addEventListener('click', this.toggle);
        }
        window.addEventListener('resize', () => {
            if (window.screen.width >= breakpoint && this.isShowing) {
                this.toggle()
            }
        })

        this.handleClickout = (event) => {
            if ((! event.composedPath().includes(this.menu)) && this.isShowing) {
                this.toggle(event);
                window.removeEventListener('click', this.handleClickout)
            }
        }

    }
}

let bm = new BurgerMenu(burger, 1024, [burgerBtn, burgerCloseBtn, ...burgerLinkWrappers]);

//projects

class doubleSwiper {
    constructor(container, options) {

        this.slideSizes = {
            1920 : 700,
            1400 : 550,
            1024 : 400,
            720 : 300,
            480 : 250
        }

        const {loop, activeSlide, navigation, gap, nextBtn, prevBtn, autoplay, baseSlideSize, baseSlideHeight} = options
        this.container = container;
        container.style.gap = (gap && typeof gap === 'number') ? gap + 'px' : '0px';
        this.slides = container.children;
        this.gap = parseInt(container.style.gap);
        this.navigation = (navigation && typeof navigation == 'boolean') ? true : false;
        if (navigation && prevBtn && nextBtn) {
            this.navigation.nextBtn = nextBtn;
            this.navigation.prevBtn = prevBtn
        }
        this.activeSlide = (activeSlide && typeof activeSlide == 'number') ? activeSlide : 1;
        this.loop = (loop && typeof loop === 'boolean') ? true : false;
        this.autoplay = (autoplay && typeof autoplay === 'number') ? autoplay : false;

        this.nextBtn = nextBtn;
        this.prevBtn = prevBtn;
        this.playtime = 500;
        this.cooldown = false;
        this.delayOn = false;
        this.activeSlideSize = this.baseSlideSize * this.activeSlideSizeMultiplier;
        this.baseSlideHeight = baseSlideHeight;

        //basic methods
        this.resetSwiper = () => {

            this.layoutMobile = (window.screen.width <= 1000);

            this.updateSlideSizes();

            this.centerSlides();

            this.updateSlideStyles();

            setTimeout(() => {

                this.triggerScroll();
    
                Array.from(this.slides).forEach((slide) => {
                    slide.style.transitionProperty = `background, opacity, transform, height`;
                    slide.style.transitionDuration = '500ms';
                })
            }, 100)


    
        }

        this.setCooldown = function() {
            this.cooldown = true;
            setTimeout(() => {
                this.cooldown = false
            }, this.playtime)
        }



        //modules setup
        this.init = function() {

            this.container.style.display = 'flex';

            if (this.activeSlide <= 2) {
                this.extend('before')
            }
            if (this.activeSlide >= this.slides.length - 2) {
                this.extend('after')
            }

            this.resetSwiper();
            this.setCooldown();

            window.addEventListener('resize', this.resetSwiper)

            this.prevBtn.addEventListener('click', () => {
                this.stepDown();
                this.delayAutoplay();
            })
            this.nextBtn.addEventListener('click', () => {
                this.stepUp();
                this.delayAutoplay();
            })

            this.triggerScroll();

            this.initAutoplay();
        }

        //navigation
        this.stepUp = () => {

            if (this.cooldown) {
                return
            }
            this.setCooldown();

            const preservedHeight = this.container.getBoundingClientRect().height;
            this.container.style.height = preservedHeight + 'px';
        
            setTimeout(() => {
                this.container.style.height = 'auto';
            }, 500)

            Array.from(this.slides).forEach((slide, index) => {
                let translate = Number(slide.dataset.translate);
                const prevSlide = (this.slides[index - 1]) ? this.slides[index - 1] : this.slides[this.slides.length - 1];
                const nextSlide = (this.slides[index + 1]) ? this.slides[index + 1] : this.slides[0];
                const prevSlideWidth = prevSlide.getBoundingClientRect().width;
                const nextSlideWidth = nextSlide.getBoundingClientRect().width

                if (this.layoutMobile) {
                    if (this.activeSlide + 1 === index) {
                        translate = translate - this.gap - this.activeSlideSize + (this.activeSlideSize - nextSlideWidth);
                    } else {
                        translate = translate - this.gap - prevSlideWidth;
                    }
                } else {
                    if (this.activeSlide + 1 === index || this.activeSlide + 2 === index) {
                        translate = translate - this.gap - nextSlideWidth;
                    } else {
                        translate = translate - this.gap - prevSlideWidth;
                    }
                }

                slide.setAttribute('data-translate', translate.toString());
                slide.style.transform = `translateX(${translate}px)`;
            })

            ++this.activeSlide;

            this.centerSlidesVertically();
            this.updateSlideStyles();

            if (this.activeSlide === this.slides.length - 3) {
                this.extend('after')
            }
        }
        this.stepDown =() => {

            if (this.cooldown) {
                return
            }
            if (this.activeSlide <= 2) {
                this.extend('before');
                setTimeout(this.stepDown, 50);
                return;
            }

            this.setCooldown();



            const preservedHeight = this.container.getBoundingClientRect().height;
            this.container.style.height = preservedHeight + 'px';
        
            setTimeout(() => {
                this.container.style.height = 'auto';
            }, 500)

            Array.from(this.slides).forEach((slide, index) => {
                let translate = Number(slide.dataset.translate);
                const prevSlide = (this.slides[index - 1]) ? this.slides[index - 1] : this.slides[this.slides.length - 1];
                const nextSlide = (this.slides[index + 1]) ? this.slides[index + 1] : this.slides[0]

                    if (this.activeSlide - 1 === index || (this.activeSlide === index && (! this.layoutMobile))) {
                        translate = translate + this.gap + prevSlide.getBoundingClientRect().width;
                    } else {
                        translate = translate + this.gap + nextSlide.getBoundingClientRect().width;
                    }


                slide.setAttribute('data-translate', translate.toString());
                slide.style.transform = `translateX(${translate}px)`;
            })

            --this.activeSlide;

            this.centerSlidesVertically();
            this.updateSlideStyles();


        }

        //initial slide positioning
        this.centerSlides = () => {
            this.centerSlidesHorizontally();
            this.centerSlidesVertically();
        }
        this.centerSlidesHorizontally = () => {
            let initialTranslate;
            let centerOffset;
            const containerWidth = window.screen.width;

            if (!this.layoutMobile) {
                Array.from(this.slides).forEach((slide, index) => {
                    centerOffset = (containerWidth - (this.activeSlideSize * 2 + this.gap)) / 2;
                    this.centerOffset = centerOffset;
                    initialTranslate = - (this.baseSlideSize + this.gap) * (this.activeSlide) + centerOffset
                    slide.style.transform = `translateX(${initialTranslate}px)`;
                    slide.dataset.translate = initialTranslate;
                });
            } else {
                Array.from(this.slides).forEach((slide, index) => {
                    centerOffset = (containerWidth - this.activeSlideSize) / 2;
                    this.centerOffset = centerOffset;
                    initialTranslate = - (this.baseSlideSize + this.gap) * (this.activeSlide) + centerOffset
                    slide.style.transform = `translateX(${initialTranslate}px)`;
                    slide.dataset.translate = initialTranslate;
    
                });
            }
        };
        this.centerSlidesVertically = () => {
            const activeSlide = this.slides[this.activeSlide];
            const activeImage = activeSlide.children[0];

            setTimeout(() => {
                const activeImageHeight = activeImage.getBoundingClientRect().height;
                const btnHeight = this.prevBtn.getBoundingClientRect().height;

                this.prevBtn.style.top = (activeImageHeight / 2) + 'px'
                this.nextBtn.style.top = (activeImageHeight / 2) + 'px'

                Array.from(this.slides).forEach((slide, index) => {

                    const isActiveSlide = (this.activeSlide === index || (this.activeSlide + 1 === index && (! this.layoutMobile)))

                    let baseSlideHeight;
                    let baseSlideTopOffset;

                    baseSlideHeight = this.slides[this.slides.length - 1].children[0].getBoundingClientRect().height;

                    baseSlideTopOffset = activeImageHeight / 2 - baseSlideHeight / 2 + 'px';

                    slide.dataset.topOffset = baseSlideTopOffset;

                    if (! isActiveSlide) {
                        slide.style.top = slide.dataset.topOffset;
                    }
                })
            }, 500)
        }

        //active and base slide styling
        this.updateSlideStyles = () => {

            Array.from(this.slides).forEach((slide, index) => {
                if (this.activeSlide === index || (this.activeSlide + 1 === index && (! this.layoutMobile))) {
                    slide.style.width = this.activeSlideSize + 'px';
                    slide.children[0].style.width = this.activeSlideSize + 'px';
                    slide.children[0].style.height = this.activeSlideSize / 1.5 + 'px';
                    slide.style.top = '0px';
                    slide.style.opacity = '1';
                    slide.classList.add('slide--active');
                    slide.children[1].style.opacity = 1;
                } else {
                    slide.style.width = this.baseSlideSize + 'px';
                    slide.classList.remove('slide--active');
                    slide.style.position = 'relative';
                    slide.style.top = slide.dataset.topOffset;
                    slide.style.opacity = '0.5';
                    slide.children[1].style.opacity = 0;
                    slide.children[0].style.width = this.baseSlideSize + 'px';
                    slide.children[0].style.height = this.baseSlideSize / 1.5 + 'px';

                }
            })
        }
        this.updateSlideSizes = () => {

            for (let [breakpoint, slideSize] of Object.entries(this.slideSizes)) {
                if (window.screen.width >= breakpoint) {
                    this.activeSlideSize = slideSize
                }
            }
            this.baseSlideSize = this.activeSlideSize / 2

            // if (window.screen.width <= 1400) {
            //     this.baseSlideSize = window.screen.width / 4;
            //     this.activeSlideSizeMultiplier = 2.5;
            //     this.activeSlideSize = this.baseSlideSize * this.activeSlideSizeMultiplier;
            // } else {
            //     this.baseSlideSize = window.screen.width / 8;
            //     this.activeSlideSizeMultiplier = 2.5;
            //     this.activeSlideSize = this.baseSlideSize * this.activeSlideSizeMultiplier;
            // }

        }

        //loop module
        this.extend = function(direction) {

                let translateLast = Number(this.slides[this.slides.length - 1].dataset.translate);
                let translateFirst = Number(this.slides[0].dataset.translate);
    
                if (direction === 'after') {

                    Array.from(this.slides).forEach((slide, index) => {
                        const newSlide = slide.cloneNode(true);
                        newSlide.style.width = this.baseSlideSize + 'px';
                        newSlide.dataset.translate = translateLast;
                        newSlide.style.transform = `translateX(${newSlide.dataset.translate}px)`;
                        this.container.append(newSlide);
                    })
                } else {
                    Array.from(this.slides).reverse().forEach((slide, index) => {
                        const newSlide = slide.cloneNode(true);
                        newSlide.style.width = this.baseSlideSize + 'px';
                        this.container.prepend(newSlide);
                        this.activeSlide += 1;
                    });
                    let centerOffset = this.centerOffset;
                    while (centerOffset >= this.baseSlideSize) {
                        centerOffset -= this.baseSlideSize;
                    }

                    //prevent transform animation for smooth extending
                    Array.from(this.slides).forEach((slide, index) => {
                        slide.classList.remove('duration-500');
                        slide.classList.remove('transition-all');
                        slide.classList.remove('transition');
                        slide.style.transitionDuration = '0s';
                        this.centerSlides();
                        setTimeout(() => {
                            slide.style.transitionDuration = '500ms'
                            slide.classList.add('duration-500');
                            slide.classList.add('transition');
                        }, 50)
                    })
                }


        }

        //scroll module
        this.triggerScroll = () => {
            if (window.screen.width <= 1200) {
                this.container.parentElement.addEventListener('touchstart', this.handleTouchstart)
                this.container.parentElement.addEventListener('touchend', this.handleTouchend)
            } else {
                this.container.parentElement.removeEventListener('touchstart', this.handleTouchstart)
                this.container.parentElement.removeEventListener('touchend', this.handleTouchend)
            }
        }
        this.handleTouchstart = (event) => {

            this.touchStart = true;
            this.oldX = event.touches[0].clientX;
            this.container.parentElement.addEventListener('touchmove', this.handleTouchmove)
        }
        this.handleTouchmove = (event) => {
            if (this.touchStart) {
                this.newX = event.touches[0].clientX;
            }
        }
        this.handleTouchend = (event) => {

            this.container.parentElement.removeEventListener('touchmove', this.handleTouchmove);
            this.touchStart = false;

            if (this.newX <= this.oldX) {
                this.stepUp()
            } else {
                this.stepDown();
            }
        }

        //autoplay module
        this.initAutoplay = function() {
    
            if (!this.autoplay) {
                return
            }
            if (! this.startedAutoplay) {
                setInterval(() => {
                    if (!this.delayOn) {
                        this.stepUp()
                    }
                }, this.autoplay);
            }

            this.startedAutoplay = true;
            document.addEventListener("visibilitychange", this.handleUserQuit);
        }
        this.delayAutoplay = () => {

            if (! this.autoplay) {
                return;
            }
            if (this.clickTimeout) {
                clearTimeout(this.clickTimeout);
            }

            this.delayOn = true;

            const clickTimeout = setTimeout(() => {
                this.delayOn = false;
            }, this.autoplay * 2);

            this.clickTimeout = clickTimeout;
        }
        this.handleUserQuit = () => {
            this.setCooldown();
            const alwaysCooldown = setInterval(() => {
                this.setCooldown()
            }, this.playtime);
            if (!document.hidden) {
                clearInterval(alwaysCooldown);
            }
        }
    }
}

const btnPrev = document.querySelector('.js-btn-prev');
const btnNext = document.querySelector('.js-btn-next');

const projectsSwiper = new doubleSwiper(document.querySelector('.js-projects-swiper'), {loop : false, activeSlide : 1, gap : 20, prevBtn : btnPrev, nextBtn : btnNext, autoplay : false});
projectsSwiper.init();

//form
//pass vacancy name to email

const forms = document.querySelectorAll('.wpcf7-form');
const vacancyElements = document.querySelectorAll('.js-vacancies-slide');
Array.from(forms).forEach((form, index) => {
    if (vacancyElements[index]) {
        const vacancyName = vacancyElements[index].children[0].children[0].textContent;
        form.addEventListener('submit', function() {
            const vacancyElement = document.querySelectorAll('.js-vacancies-name-in-form')[index];
            if (vacancyElement && vacancyName) {
                vacancyElement.value = vacancyName
            }
        }, { capture: true });
    }
});

const discussBtn = document.querySelector('.js-projects-under-swiper-btn');
setTimeout(() => {
    discussBtn.style.width = projectsSwiper.activeSlideSize + 'px';
}, 100)
window.addEventListener('resize', () => {
    setTimeout(() => {
        discussBtn.style.width = projectsSwiper.activeSlideSize + 'px';
    }, 100)
})