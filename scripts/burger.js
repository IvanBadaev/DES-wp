const burger = document.querySelector('.js-burger-menu');
const burgerBtn = document.querySelector('.js-burger-btn');
const burgerCloseBtn = document.querySelector('.js-burger-close-btn');
const burgerLinks = document.querySelectorAll('.js-burger-link')

class BurgerMenu {
    constructor(element, breakpoint, btnsList, burgerLinks) {

        this.menu = element;
        this.showing = false;


        this.toggle = () => {
            if (this.menu.style.display === 'flex') {
                this.menu.style.display = 'none';
                this.showing = false;
                window.removeEventListener('click', this.handleClickout)
            } else {
                this.menu.style.display = 'flex';
                this.showing = true;
                setTimeout(() => {
                    window.addEventListener('click', this.handleClickout)
                }, 100)
            }
        }

        for (let btn of btnsList) {
            btn.addEventListener('click', this.toggle);
        }
        for (let link of burgerLinks) {
            link.addEventListener('click', this.toggle)
        }
        window.addEventListener('resize', () => {
            if (window.screen.width >= breakpoint && this.showing) {
                this.toggle()
            }
        })

        this.handleClickout = (event) => {
            if ((! event.composedPath().includes(this.menu)) && this.showing) {
                this.toggle();
                window.removeEventListener('click', this.handleClickout)
            }
        }

    }
}

let bm = new BurgerMenu(burger, 1024, [burgerBtn, burgerCloseBtn], burgerLinks);


