const music =
    document.getElementById("backgroundMusic");

const musicControl =
    document.getElementById("musicControl");

const musicIcon =
    document.getElementById("musicIcon");


music.volume = 0.35;


window.startMusic = async function () {

    try {

        await music.play();

        musicControl.classList.add("playing");

        musicIcon.textContent = "♫";

    } catch (error) {

        console.log(
            "Musiqa avtomatik ishga tushmadi:",
            error
        );

    }

};


musicControl.addEventListener(
    "click",
    async () => {

        if (music.paused) {

            try {

                await music.play();

                musicControl.classList.add(
                    "playing"
                );

                musicIcon.textContent = "♫";

            } catch (error) {

                console.log(error);

            }

        } else {

            music.pause();

            musicControl.classList.remove(
                "playing"
            );

            musicIcon.textContent = "🔇";

        }

    }
);