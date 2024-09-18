class titleLooper {
    constructor(container, wrapper, interval) {

        this.container = container;
        this.wrapper = wrapper;
        this.slides = this.container.children;
        this.activeSlide = 0;
        this.originalSlideCount = this.slides.length;
        this.stepNumber = 0;
        this.loopTime = interval;
        this.animationDuration = interval / 2;

        this.init = () => {


            this.container.style.overflow = 'hidden';
            this.container.style.display = 'flex';
            this.container.style.position = 'absolute';

            this.container.style.top = (this.wrapper.getBoundingClientRect().height - this.container.getBoundingClientRect().height) / 2 + 'px';

            window.addEventListener('resize', () => {
                this.container.style.top = (this.wrapper.getBoundingClientRect().height - this.container.getBoundingClientRect().height) / 2 + 'px';
            })

            Array.from(this.slides).forEach((slide, index) => {
                slide.style.width = '100vw';
                slide.style.flexShrink = '0';
                slide.dataset.translate = '0';
                slide.style.transitionProperty = 'transform';
                slide.style.transitionDuration = this.animationDuration + 'ms';


                slide.children[0].style.transitionProperty = 'transform';
                slide.children[0].style.transitionDuration = this.animationDuration + 'ms';
                slide.children[0].style.display = `block`;

                if (index === this.activeSlide) {
                    slide.children[0].style.transform = `rotateY(0deg)`
                } else {
                    slide.children[0].style.transform = `rotateY(45deg)`
                }
            })

            setInterval(this.step, this.loopTime);
        }
        this.step = () => {
            if (this.stopPlay) {
                return;
            }
            console.log(this.activeSlide);

            Array.from(this.slides).forEach((slide, index) => {
                let slideTranslate = Number(slide.dataset.translate);
                slideTranslate -= 100;
                slide.dataset.translate = slideTranslate;
                slide.style.transform = `translateX(${slideTranslate}vw)`;
                if (index === this.activeSlide + 1) {
                    slide.children[0].style.transform = `rotate3d(0, 1, 0, 0deg)`
                } else if (index > this.activeSlide + 1) {
                    slide.children[0].style.transform = `rotateY(60deg)`
                } else {
                    slide.children[0].style.transform = `rotateY(-60deg)`
                }
                // console.log(this.slides[this.activeSlide])
            });
            ++this.activeSlide;

            setTimeout(() => {
                const copySlideIndex = this.stepNumber % this.originalSlideCount
                const newSlide = this.slides[copySlideIndex].cloneNode(true);
                this.container.append(newSlide);
                ++this.stepNumber;
            }, this.animationDuration)
        }

        document.addEventListener("visibilitychange", this.handleUserQuit);
        this.handleUserQuit = () => {
            this.stopPlay = (document.hidden);
        }
    }
}
const looperBg = document.querySelector('.js-hero-looper-bg');
looperBg.addEventListener('loadeddata', () => {
    const heroLooper = new titleLooper(document.querySelector('.js-hero-looper'), looperBg.parentElement, 3000);
    heroLooper.init();
})

looperBg.style.width = '100%';
looperBg.style.objectFit = 'fill';
looperBg.style.height = window.screen.width / 3 + 'px';

window.addEventListener('resize', () => {

    looperBg.style.height = window.screen.width / 3 + 'px';
})




class CustomSwiper {
    constructor(container, options) {
        this.container = container;
        this.wrapper = this.container.parentElement;
        this.slides = this.container.children;
        this.defaultLength = this.slides.length;
    
        const { activeSlide, btnPrev, btnNext, gap, autoplay, baseSlideSize, activeSlideSizeMultiplier, scroll, activeClass, baseClass } =
            options;
    
        this.activeSlide = 2;
        this.btnPrev = btnPrev;
        this.btnNext = btnNext;
        this.gap = gap;
        this.autoplay = autoplay;
        this.scroll = scroll;
        this.baseSlideSize = baseSlideSize * (window.screen.width / 1024);
        this.activeClass = activeClass;
        this.baseClass = baseClass;
        this.activeSlideSizeMultiplier = (activeSlideSizeMultiplier) ? activeSlideSizeMultiplier : 1;
        this.containerWidth = this.container.getBoundingClientRect().width;
    
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
            this.triggerScroll();

            this.setCooldown(this.autoplay);
            this.initAutoplay();
    
            window.addEventListener("resize", () => {
                if (this.active) {
                    this.resetSlides();
                    this.updateStyles();
                    this.triggerScroll();
                    this.initAutoplay();
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

            this.btnNext.style.top = (swiperHeight - buttonHeight) / 2 + 'px';
            this.btnPrev.style.top = (swiperHeight - buttonHeight) / 2 + 'px';
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
            console.log(scrollSize);

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
            // slide.style.transitionProperty = `background, opacity, transform`;
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
                    console.log(slide.style.transform);
                    slide.style.transform = 'translateX(0px)';
                    console.log(slide.style.transform);
                    slide.style.width = 'auto';
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
        e.stopPropagation();
        const scrollToElementId = link.getAttribute('href').slice(1);
        const scrollToElement = document.getElementById(scrollToElementId);
        scrollToElement.scrollIntoView({behavior : 'smooth'});
    })
}

//services 

function attachCardDetails() {
    let cards = document.querySelectorAll('.js-services-card');
    let cardDetails = document.querySelectorAll('.js-services-details');

    cards.forEach((card, index) => {
        if (window.screen.width >= 1200) {
            card.addEventListener('mouseenter', () => {
                cardDetails[index].setAttribute('open', 'true');
            });
            card.addEventListener('mouseleave', () => {
                const details = cardDetails[index]
                details.removeAttribute('open');
                console.log('mouseleave')
        
                // reset animation
                const animatedList = details.children[1];
                animatedList.remove();
                details.append(animatedList)
        
            })
        } else {
            card.addEventListener('hover', (event) => {
                event.preventDefault()
            })
            // card.addEventListener('click', handleCardTouch)
        }


    });
}
attachCardDetails();
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
      baseSlideSize: 300,
      gap: 20,
      activeSlideSizeMultiplier : 2,
      scroll : true,
      baseClass : 'vacancies--hide',
      activeClass : 'vacancies-slide--visible'
    }
  );
  vacanciesSwiper.init();

const vacanciesInputs = document.querySelectorAll('.js-vacancies-input');
for (let input of vacanciesInputs) {
    input.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}