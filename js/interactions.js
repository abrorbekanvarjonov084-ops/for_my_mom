document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       RANDOM WISHES
    ====================================== */

    const wishes = [

        "Ayajon, qalbingizdagi mehr hech qachon kamaymasin.",

        "Har bir darsingiz ortidan yaxshi xotira, har bir kuningiz ortidan chiroyli tabassum qolsin.",

        "Siz o‘rgatgan har bir bola kelajakda yaxshi inson bo‘lib ulg‘aysin.",

        "Ko‘zlaringiz doimo quvonchdan porlab tursin.",

        "Mehnatingiz qadrlansin, qalbingiz esa doimo xotirjam bo‘lsin.",

        "Siz bergan mehr yuzlab kichik qalblarda yaxshi xotira bo‘lib qolsin.",

        "Har tongingiz yaxshi xabar bilan, har kechangiz xotirjamlik bilan yakunlansin.",

        "Sog‘ligingiz mustahkam, umringiz uzoq va kunlaringiz fayzli bo‘lsin.",

        "Ona sifatida bergan mehringiz, ustoz sifatida bergan bilimingiz uchun rahmat.",

        "Sizga eng chiroyli kunlar, eng samimiy tabassumlar va eng yaxshi tilaklarni tilayman.",

        "Qalbingizdagi yaxshilik o‘zingizga ming karra bo‘lib qaytsin.",

        "Sizning kulgingiz uyimizdagi eng chiroyli ovozlardan biri bo‘lib qolaversin."

    ];


    const wishText =
        document.getElementById(
            "wishText"
        );

    const wishNumber =
        document.getElementById(
            "wishNumber"
        );

    const wishButton =
        document.getElementById(
            "wishButton"
        );


    let currentWish = 0;


    wishButton.addEventListener(
        "click",
        () => {

            currentWish =
                (currentWish + 1)
                % wishes.length;


            wishText.style.opacity = "0";

            wishText.style.transform =
                "translateY(12px)";


            setTimeout(() => {

                wishText.textContent =
                    wishes[currentWish];

                wishNumber.textContent =
                    String(
                        currentWish + 1
                    ).padStart(2, "0");


                wishText.style.opacity = "1";

                wishText.style.transform =
                    "translateY(0)";

            }, 250);

        }
    );


    /* ======================================
       LETTER
    ====================================== */

    const envelope =
        document.getElementById(
            "envelope"
        );

    const openLetter =
        document.getElementById(
            "openLetter"
        );


    openLetter.addEventListener(
        "click",
        () => {

            envelope.classList.toggle(
                "open"
            );


            if (
                envelope.classList.contains(
                    "open"
                )
            ) {

                openLetter.innerHTML =
                    `
                    <span>Xatni yopish</span>
                    <span>♡</span>
                    `;

            } else {

                openLetter.innerHTML =
                    `
                    <span>Xatni ochish</span>
                    <span>♡</span>
                    `;

            }

        }
    );


    /* ======================================
       SMOOTH INTERNAL LINKS
    ====================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });

});