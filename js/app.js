document.addEventListener("DOMContentLoaded", () => {

    const preloader =
        document.getElementById("preloader");

    const startScreen =
        document.getElementById("startScreen");

    const startButton =
        document.getElementById("startButton");

    const mainContent =
        document.getElementById("mainContent");

    const musicControl =
        document.getElementById("musicControl");


    document.body.classList.add("no-scroll");


    window.addEventListener("load", () => {

        setTimeout(() => {

            preloader.classList.add("hidden");

        }, 1000);

    });


    startButton.addEventListener("click", () => {

        startScreen.classList.add("hide");

        mainContent.classList.remove("site-hidden");

        musicControl.classList.add("active");

        document.body.classList.remove("no-scroll");

        if (window.startMusic) {
            window.startMusic();
        }

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    });

});