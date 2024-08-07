// scrollTo
const scrollEl=document.querySelector('.badge03');

scrollEl.addEventListener('click',function(){
    gsap.to(window,.7,{
        scrollTo: 0
    });
});

// badge
const badgeEl=document.querySelectorAll('.badge');

window.addEventListener('scroll',_.throttle(function(){
    if(window.scrollY > 2500){
        gsap.to(badgeEl,.7,{
        opacity: 0,
        display: 'none'
    });
    } else {
        gsap.to(badgeEl,.7,{
        opacity: 1,
        display: 'block'
    });
    }
    },300));

    //scollMagic
    const spyEls=document.querySelectorAll('.scroll-spy');
    spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller())
});