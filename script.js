let card = document.getElementsByClassName("card");
let card_link = document.getElementsByClassName("card-link");
let body = document.body;
let btn = document.getElementById("btn");
let sticker_container = document.getElementsByClassName("sticker-container");

btn.addEventListener("click", function() {
    body.classList.toggle("dark-body");
    for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle("dark-card");
    }
    for (let i = 0; i < card_link.length; i++) {
        card_link[i].classList.toggle("dark-card-link");
    }
    sticker_container.classList.toggle("dark-sticker-container");
});

