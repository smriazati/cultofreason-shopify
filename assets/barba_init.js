function preventBarbaIntoShop() {
    const collections = document.querySelectorAll("a[href^='/collections/']");
    const products = document.querySelectorAll("a[href^='/products/']");
    const cart = document.querySelectorAll("a[href^='/cart']");
    const account = document.querySelectorAll("a[href^='/account']");

    collections.forEach(el => el.classList.add('prevent'));
    products.forEach(el => el.classList.add('prevent'));
    cart.forEach(el => el.classList.add('prevent'));
    account.forEach(el => el.classList.add('prevent'));
}

function setBodyClass(next) {
    const body = document.querySelector('body');
    const nextNamespace = next.namespace;

    const customPageTemplates = ['ingredients', 'contact']; // add new page template handles here 
    let templateType = nextNamespace;
    if (customPageTemplates.includes(nextNamespace)) {
        templateType = 'page';
    }

    body.className = "";
    body.classList.add(`template-${templateType}`)

}

function closeMobileMenu() {
    if (window.innerWidth > 800) { return }
    const header = document.getElementById('siteHeader');
    if (!header) { return }

    const expandedCls = 'expanded';
    const collapsedCls = 'collapsed';
    const isExpanded = header.classList.contains(expandedCls);

    if (isExpanded) {
        header.classList.remove(expandedCls);
        header.classList.add(collapsedCls);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    barba.init({
        transitions: [{
            name: 'default-transition',
            once(data) {
                gsap.set(data.next.container, {
                    opacity: 0,
                });
                preventBarbaIntoShop();
            },
            afterOnce(data) {
                gsap.to(data.next.container, {
                    opacity: 1,
                    duration: 1.1,
                });
            },
            leave(data) {
                gsap.to(data.current.container, {
                    opacity: 0,
                    ease: "power1.out",
                    duration: 0.3,
                    onComplete: function () { window.scrollTo(0, 0); },
                });
            },
            enter(data) {
                gsap.set(data.next.container, {
                    opacity: 0,
                });
                gsap.to(data.next.container, {
                    opacity: 1,
                    duration: 0.8
                });

            }
        }],
        prevent: ({ el }) => el.classList && el.classList.contains('prevent')
    });


    barba.hooks.enter((data) => {
        preventBarbaIntoShop();
    });

    barba.hooks.beforeEnter(({ current, next }) => {
        if (current.container) {
            setBodyClass(next);
        }
    });


    barba.hooks.beforeLeave(({ current, next }) => {
        closeMobileMenu();
    });

});