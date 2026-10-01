document.addEventListener("DOMContentLoaded", () => {

    const items =
        document.querySelectorAll(
            ".gallery-item"
        );

    const modal =
        document.getElementById(
            "imageModal"
        );

    const modalImage =
        document.getElementById(
            "modalImage"
        );

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );

    const closeButton =
        document.getElementById(
            "modalClose"
        );


    items.forEach((item) => {

        item.addEventListener(
            "click",
            () => {

                const image =
                    item.dataset.image;

                const title =
                    item.dataset.title;


                modalImage.src = image;

                modalImage.alt = title;

                modalTitle.textContent =
                    title;


                modal.classList.add(
                    "open"
                );

                document.body.classList.add(
                    "no-scroll"
                );

            }
        );

    });


    function closeModal() {

        modal.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    closeButton.addEventListener(
        "click",
        closeModal
    );


    modal.addEventListener(
        "click",
        (event) => {

            if (
                event.target === modal
            ) {
                closeModal();
            }

        }
    );


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {
                closeModal();
            }

        }
    );

});