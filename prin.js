function searchBook() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        let title = card.querySelector("h3")
            .innerText
            .toLowerCase();

        if (title.includes(input)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}

let hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {

    heart.addEventListener("click", function () {

        this.classList.toggle("fa-regular");
        this.classList.toggle("fa-solid");

        if (this.classList.contains("fa-solid")) {
            this.style.color = "red";
        } else {
            this.style.color = "#555";
        }

    });

});


let pages = document.querySelectorAll(".page");

pages.forEach(page => {

    page.addEventListener("click", function () {

        pages.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

    });

});


let categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        categoryButtons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

    });

});


let cart = 0;

document.querySelector(".fa-cart-shopping")
    .addEventListener("click", function () {

        cart++;

        alert("Items in Cart: " + cart);

    });