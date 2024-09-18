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
                Array.from(defaultCards).forEach((card) => {
                    this.container.prepend(card.cloneNode(true));
                    currentLength = currentLength + card.getBoundingClientRect().width + this.gap;
                });
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
