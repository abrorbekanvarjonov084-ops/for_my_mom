document.addEventListener("DOMContentLoaded", () => {

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


    revealElements.forEach((element) => {

        observer.observe(element);

    });


    /*
        Kichik parallax effekti.
        Faqat desktop uchun.
    */

    const heroBackground =
        document.querySelector(".hero-background");


    window.addEventListener(
        "scroll",
        () => {

            if (
                window.innerWidth <= 700 ||
                !heroBackground
            ) {
                return;
            }


            const scrollY =
                window.scrollY;


            if (scrollY < window.innerHeight) {

                heroBackground.style.transform =
                    `scale(1.06)
                     translateY(${scrollY * 0.08}px)`;

            }

        },
        { passive: true }
    );

});