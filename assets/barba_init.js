function preventBarbaIntoShop() {
    const els = document.querySelectorAll("a[href^='/collections/']");
    // console.log('preventing barba in shop... ', els);
    els.forEach(el => el.classList.add('prevent'));
    const els2 = document.querySelectorAll("a[href^='/products/']");
    // console.log('preventing barba in shop... ', els);
    els2.forEach(el => el.classList.add('prevent'));
    const els3 = document.querySelectorAll("a[href^='/cart']");
    // console.log('preventing barba in shop... ', els);
    els3.forEach(el => el.classList.add('prevent'));

    const els4 = document.querySelectorAll("a[href^='/account']");
    els4.forEach(el => el.classList.add('prevent'));

}

function initializeQuoteSlider(newDoc) {
    // check for slider 
    const slider = newDoc.querySelector('.quotes-slider');
    if (slider) {
        $('.quotes-slider').slick({
            centerMode: false,
            infinite: true,
            fade: true,
            centerPadding: '60px',
            slidesToShow: 1,
            adaptiveHeight: true
        });

        // get arrows
        const prev = newDoc.querySelector('.slick-prev');
        const next = newDoc.querySelector('.slick-next');

        prev.innerHTML = '←';
        next.innerHTML = '→';
    }
}

/* page TRANSITIONS */
function pageTransitionAnimateFrom(elem) {
    //console.log('gsap set animation')
    gsap.set(elem,
        {
            backgroundColor: '#FFF',
            color: '#ADABAB',
            opacity: 1
        });
}
function pageTransitionAnimateTo(elem) {
    // console.log('gsap to animation')
    gsap.to(elem,
        {
            backgroundColor: '#ADABAB',
            color: '#FFF',
            opacity: 1
        })
}

function pageTransitionAnimateTo2(elem) {
    // console.log('gsap to animation')
    gsap.to(elem,
        {
            backgroundColor: '#FFF',
            color: '#ADABAB',
            opacity: 1
        })
}

function homePageScrollColorChange(previousdivheight) {
    // console.log('hi gsap color change')
    const ref = document.querySelector('.gsap-bg-color-change');
    const endOffset = 150;
    const startSooner = 0;
    // console.log('ref', ref);

    if (ref && gsap && ScrollTrigger) {
        //console.log('everything exists, starting up animation conditions');
        const elem = ref;
        // console.log('element offset top', elem.offsetTop);
        // console.log('previous div height?', previousdivheight);
        let startPt;
        let endPt;

        if (window.innerWidth > 750) {
            startPt = (elem.offsetTop - previousdivheight) - startSooner;
            endPt = (startPt + elem.offsetHeight + startSooner) - endOffset;
        } else {
            startPt = ((elem.offsetTop - previousdivheight) + ref.offsetHeight) - 300;
            endPt = ((startPt + elem.offsetHeight + startSooner));
        }
        // console.log(startPt, endPt);

        pageTransitionAnimateFrom(elem);
        ScrollTrigger.create({
            trigger: elem,
            // markers: true,
            start: startPt,
            end: endPt,
            onEnter: function () { pageTransitionAnimateTo(elem) },
            onEnterBack: function () { pageTransitionAnimateTo(elem) },
            onLeave: function () { pageTransitionAnimateTo2(elem) },
            onLeaveBack: function () { pageTransitionAnimateTo2(elem) }
        });
    }
}

function corporatePageTextSwapAnimation() {
    const atRef1 = document.getElementById('at-1');
    const atRef2 = document.getElementById('at-2');
    const atRef3 = document.getElementById('at-3');
    if (atRef1) {
        gsap.set('#at-1',
            {
                display: 'none',
                opacity: 0
            });

    }
    if (atRef2) {
        gsap.set('#at-2',
            {
                display: 'none',
                opacity: 0
            });
    }

    if (atRef3) {
        gsap.set('#at-3',
            {
                display: 'none',
                opacity: 0
            });
    }

    const fadeInDuration = 1.5;
    const fadeOutDuration = 0.5;
    var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });
    if (atRef1) {
        tl.to("#at-1", { display: 'inline', opacity: 1, duration: fadeInDuration });
        tl.to("#at-1", { display: 'none', opacity: 0, duration: fadeOutDuration });
    }
    if (atRef2) {
        tl.to("#at-2", { display: 'inline', opacity: 2, duration: fadeInDuration });
        tl.to("#at-2", { display: 'none', opacity: 0, duration: fadeOutDuration });
    }
    if (atRef3) {
        tl.to("#at-3", { display: 'inline', opacity: 1, duration: fadeInDuration });
        tl.to("#at-3", { display: 'none', opacity: 0, duration: fadeOutDuration });
    }

}

function addContactPageNewsletter(newDoc) {
    const inlineNewsletterHTML = `<div class="fd-ef-5fac562d76d8d645a6cf181f">
    <div class="ff__root">
      <div class="ff__container">
        <form class="flodesk-newsletter ff__form" action="https://form.flodesk.com/submit" method="post" data-form="fdv2">
          <div class="ff__fields">
            <input type="text" name="name" value="" style="display: none" />
            <input type="hidden" name="submitToken" value="7d19c5c0002af513ad672dd553d6b30cfa401d59aa209d4a993c20ed053ebd35f38ff76f608bd72913c5fcd3f04ee6ea8a9c9530d5734e64223757cdf65e4283368287a4e66831f5154a8749c764bf96036d980ea3b6113b5eccd2e1ee76b70c" />
            <div class="ff__grid">
                <input class="fd-form-control ff__control newsletter-email" type="text" name="email" placeholder="Email address">
                <button type="submit" class="fd-btn ff__button newsletter-submit" data-form-el="submit">
                  <span>→</span>
                </button>
            </div>
          </div>
          <div class="fd-success ff__success" data-form-el="success">
            <p>Thank you for subscribing!</p>
          </div>
          <div class="fd-error ff__error" data-form-el="error"></div>
        </form>
      </div>
    </div>
    
    <img height="1" width="1" style="display:none" src="https://t.flodesk.com/utm.gif?r=5fac562d76d8d645a6cf181f" />
    </div>`

    const contactFormNewsletter = newDoc.querySelector('#contact-page-newsletter');
    // console.log(contactFormNewsletter);
    if (contactFormNewsletter) {
        // console.log('hi')
        contactFormNewsletter.innerHTML = inlineNewsletterHTML;
    }
}

function isContactFormSubmitted() {
    //console.log(newDoc);
    const container = document.querySelector('.contact-form-container');
    const success = container.querySelector(".form-message--success");
    if (success) {
        const hiddenClass = 'visually-hidden'
        const desc = container.querySelector(".description");
        desc.classList.add(hiddenClass);

        const formElements = container.querySelector('form').elements;
        console.log(formElements);
        formElements.forEach(f => {
            f.classList.add(hiddenClass);
        });

        const formLabels = container.querySelectorAll('form label');
        formLabels.forEach(f => {
            f.classList.add(hiddenClass);
        });
    }
}

// // initialize barba
document.addEventListener("DOMContentLoaded", function () {
    //   // Handler when the DOM is fully loaded


    barba.init({
        //   views: [{
        //       namespace: 'index',
        //       beforeEnter(data) {
        //         homePageScrollColorChange(data.current.container.offsetHeight);
        //       },
        //       beforeOnce(data) {
        //         //console.log('here we go', data)
        //       }
        //     }, {
        //       namespace: 'corporate',
        //       beforeEnter(data) {
        //         initializeQuoteSlider(data.next.container);
        //         corporatePageTextSwapAnimation();
        //       }
        //    }, {
        //       namespace: 'story',
        //       beforeEnter(data) {

        //       }
        //   }, {
        //       namespace: 'giveadamn',
        //       beforeEnter(data) {

        //       }
        //   }, {
        //       namespace: 'page',
        //       beforeEnter(data) {

        //       }
        //   }, {
        //       namespace: 'contact',
        //       once() {
        //         document.body.style.backgroundColor = '#D0CEC9'
        //         //console.log(document);
        //         // console.log('once')
        //       },
        //       beforeEnter(data) {
        //         document.body.style.backgroundColor = '#D0CEC9';
        //         // console.log('before enter contact');
        //         addContactPageNewsletter(data.next.container);
        //         isContactFormSubmitted();
        //         instafeedApp();
        //       },
        //       afterEnter() {
        //         // console.log('after enter contact');
        //       },
        //       beforeLeave() {
        //         document.body.style.backgroundColor = '#fff'
        //       }
        //   }],
        transitions: [{
            name: 'default-transition',
            once(data) {
                // console.log('once', data);
                gsap.set(data.next.container, {
                    opacity: 0,
                });
                window.scrollTo(0, 0);
                preventBarbaIntoShop();
            },
            afterOnce(data) {
                // console.log('after once', data);
                gsap.to(data.next.container, {
                    opacity: 1,
                    duration: 1.1,
                });
            },
            leave(data) {
                gsap.to(data.current.container, {
                    opacity: 0,
                    ease: "power1.out",
                    duration: 1
                });
            },
            enter(data) {

                gsap.set(data.next.container, {
                    opacity: 0,
                });
                gsap.to(data.next.container, {
                    opacity: 1,
                    duration: 1.1
                });

            }
        }],
        prevent: ({ el }) => el.classList && el.classList.contains('prevent')
    });


    barba.hooks.enter((data) => {
        window.scrollTo(0, 0);
        preventBarbaIntoShop();
    });

    barba.hooks.beforeEnter(({ current, next }) => {
        if (current.container) {
            // console.log(current, next);
            const customPageTemplates = ['ingredients'];
            const body = document.querySelector('body');
            body.className = ""; // clear all classes

            const nextNamespace = next.namespace;
            let templateName = nextNamespace;
            if (customPageTemplates.includes(nextNamespace)) {
                templateName = 'page';
            }
            body.classList.add(`template-${templateName}`)

            // console.log(body.classList);
        }
    });

});