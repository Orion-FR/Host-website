const allCircles = document.querySelectorAll('.Circle')
const allBoxes = document.querySelectorAll('.Box')

const controller = new ScrollMagic.Controller()

allBoxes.forEach(box => {
    for (let i = 0; i < allCircles.length; i++)
    {
        if (allCircles[i].getAttribute('data-anim') === box.getAttribute('data-anim'))
        {
            /* Création de l'animation / de la scène */
            let tween = gsap.from(box, {y: -50, opacity: 0, duration: 0.5})
            let scene = new ScrollMagic.Scene({
                triggerElement: allCircles[i],
                reverse: true
            })
            .setTween(tween)
            /* Pour tester l'animation */
            // .addIndicators()
            .addTo(controller)
        }
    }
})