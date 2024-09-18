class doubleSwiper {
    constructor(container, options) {

        const {loop, activeSlide, navigation, gap, nextBtn, prevBtn, autoplay, baseSlideSize} = options
        this.container = container;
        container.style.gap = (gap && typeof gap === 'number') ? gap + 'px' : '0px';
        this.slides = container.children;
        this.gap = parseInt(container.style.gap);
        this.navigation = (navigation && typeof navigation == 'boolean') ? true : false;
        if (navigation && prevBtn && nextBtn) {
            this.navigation.nextBtn = nextBtn;
            this.navigation.prevBtn = prevBtn
        }
        this.activeSlide = (activeSlide && typeof activeSlide == 'number') ? activeSlide : 0;
        this.loop = (loop && typeof loop === 'boolean') ? true : false;
        this.autoplay = (autoplay && typeof autoplay === 'number') ? autoplay : false;

        this.nextBtn = nextBtn;
        this.prevBtn = prevBtn;
        this.playtime = 500;
        this.cooldown = false;
        this.delayOn = false;
        this.activeSlideSize = this.baseSlideSize * this.activeSlideSizeMultiplier;

        //basic methods
        this.resetSwiper = () => {

            this.layoutMobile = (window.screen.width <= 1400)

            this.updateSlideSizes();

            this.centerSlides();

            this.updateSlideStyles();

            this.triggerScroll();


        }

        this.setCooldown = function() {
            this.cooldown = true;
            setTimeout(() => {
                this.cooldown = false
            }, this.playtime)
        }



        //modules setup
        this.init = function() {

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

            if (this.activeSlide <= 2) {
                this.extend('before')
            } else if (this.activeSlide === this.slides.length - 4) {
                this.extend('after')
            }

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
                        translate = translate - this.gap + nextSlideWidth - prevSlideWidth;
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
            this.updateSlideStyles();

            if (this.activeSlide === this.slides.length - 3) {
                this.extend('after')
            }
        }
        this.stepDown =() => {

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
            this.updateSlideStyles();

            if (this.activeSlide <= 2) {
                this.extend('before')
            }
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
            if (!this.activeSlideImageHeight) {
                const activeSlideImageHeight = this.slides[this.activeSlide].children[0].clientHeight;
                this.activeSlideImageHeight = activeSlideImageHeight;
            }
            Array.from(this.slides).forEach((slide, index) => {
                const top = (this.activeSlideImageHeight / 6) + 'px';
                if (index !== this.activeSlide) {
                    slide.style.top = top
                }
                slide.dataset.top = top;

            })
        }

        //active and base slide styling
        this.updateSlideStyles = () => {
            Array.from(this.slides).forEach((slide, index) => {
                if (this.activeSlide === index || (this.activeSlide + 1 === index && (! this.layoutMobile))) {
                    slide.style.width = this.activeSlideSize + 'px';
                    slide.style.top = '0px';
                    slide.style.opacity = '1';
                    slide.classList.add('slide--active');
                    slide.children[1].style.opacity = 1;
                } else {
                    slide.style.width = this.baseSlideSize + 'px';
                    slide.style.position = 'relative';
                    slide.style.top = slide.dataset.top;
                    slide.style.opacity = '0.5';
                    slide.children[1].style.opacity = 0;

                }
            })
        }
        this.updateSlideSizes = () => {
            if (window.screen.width <= 1400) {
                this.baseSlideSize = window.screen.width / 4;
                this.activeSlideSizeMultiplier = 2;
                this.activeSlideSize = this.baseSlideSize * this.activeSlideSizeMultiplier;
            } else {
                this.baseSlideSize = window.screen.width / 8;
                this.activeSlideSizeMultiplier = 2.5;
                this.activeSlideSize = this.baseSlideSize * this.activeSlideSizeMultiplier;
            }
        }

        //loop module
        this.extend = function(direction) {

            setTimeout(() => {
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
                    Array.from(this.slides).forEach((slide, index) => {
                        const newSlide = slide.cloneNode(true);
                        newSlide.style.width = this.baseSlideSize + 'px';
                        this.container.prepend(newSlide);
                        this.activeSlide += 1;
                    })
                    let centerOffset = this.centerOffset;
                    while (centerOffset >= this.baseSlideSize) {
                        centerOffset -= this.baseSlideSize;
                    }
                    Array.from(this.slides).forEach((slide, index) => {
                        slide.classList.remove('duration-500');
                        slide.classList.remove('transition-all');
                        this.centerSlides();
                        setTimeout(() => {
                            slide.classList.add('duration-500');
                            slide.classList.add('transition-all');
                        }, 50)
                    })
                }

            }, 500)



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

const projectsSwiper = new doubleSwiper(document.querySelector('.js-projects-swiper'), {loop : false, activeSlide : 3, gap : 20, prevBtn : btnPrev, nextBtn : btnNext, autoplay : false});
projectsSwiper.init();