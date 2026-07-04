document.addEventListener("DOMContentLoaded", () => {

    console.log("Iniciou");

    const loader = document.getElementById("loader");

    setTimeout(() => {

        console.log("Escondendo");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 800);

    }, 3000);

});