const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".sec_2",
            scrub: true,
            pin: true,
            start: "50% 50%",
            end: "+=150%"
        }
    })

    .from(".sec_2-div", {
        scale: 0.5
    })