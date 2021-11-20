// dropdown code 

class Dropdown {
    constructor(container) {
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    init() {
        this.trigger.addEventListener('click', () => {
                this.trigger.classList.toggle('active');
                this.content.classList.toggle('active');
        })
    }
}


const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach( dropdown => {
    const drop = new Dropdown(dropdown);
    drop.init();
})


// end of dropdown

/* ==========  display mobile navigation ============ */

const toggle = document.querySelector('.toggle');
const mobileNav = document.querySelector('.mobile-nav')
const cancelBtn = document.querySelector('.cancelBtn');

toggle.addEventListener('click', e => {
    mobileNav.classList.toggle('show-mobile')
})

cancelBtn.addEventListener('click', e => {
    mobileNav.classList.remove('show-mobile')
})


/* ==========   end of display mobile navigation ============ */