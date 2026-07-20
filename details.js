
let books = [

    {
        title: "Atomic Habits",
        author: "James Clear",
        price: "$11.99",
        image: "images/image.png",
        description: "Small habits lead to remarkable results. Atomic Habits teaches you how tiny daily improvements lead to amazing results."
    },

    {
        title: "The Power of Habit",
        author: "Charles Duhigg",
        price: "$15.99",
        image: "images/image2.png",
        description: "The Power of Habit explains how habits work and how to change them."
    },

    {
        title: "Deep Work",
        author: "Cal Newport",
        price: "$13.99",
        image: "images/image3.png",
        description: "Deep Work teaches you how to focus deeply and become more productive."
    },

    {
        title: "Think Again",
        author: "Adam Grant",
        price: "$14.99",
        image: "images/image4.png",
        description: "Think Again encourages you to rethink your opinions and keep learning."
    },

    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: "$17.99",
        image: "images/image5.png",
        description: "The Alchemist is a timeless novel about dreams and following your destiny."
    }

];

let mainImage = document.getElementById("mainImage");

let bookTitle = document.getElementById("bookTitle");

let bookAuthor = document.getElementById("bookAuthor");

let bookPrice = document.getElementById("bookPrice");

let bookDescription = document.getElementById("bookDescription");

function changeBook(index) {

    mainImage.style.opacity = "0";


    setTimeout(() => {


        mainImage.src = books[index].image;

        bookTitle.innerHTML = books[index].title;

        bookAuthor.innerHTML = books[index].author;

        bookPrice.innerHTML = books[index].price;

        bookDescription.innerHTML = books[index].description;


        mainImage.style.opacity = "1";


    }, 300);


}

let detailsBtns = document.querySelectorAll(".detailsBtn");


detailsBtns.forEach((btn) => {


    btn.addEventListener("click", function () {


        let index = this.parentElement.getAttribute("data-index");


        changeBook(index);


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    });


});

let cartBtn = document.querySelector(".cartBtn");

let cartCount = document.getElementById("cartCount");


let count = 0;


cartBtn.onclick = function () {


    count++;


    cartCount.innerHTML = count;



    let message = document.createElement("div");


    message.innerHTML = "✅ Book Added To Cart";


    message.className = "successMessage";


    document.body.appendChild(message);



    setTimeout(() => {


        message.remove();


    }, 2000);


};
let wish = document.querySelector(".wish");


wish.onclick = function () {


    if (wish.innerHTML.includes("Add")) {


        wish.innerHTML = "❤️ Added to Wishlist";


    }

    else {


        wish.innerHTML = "🤍 Add to Wishlist";


    }


};

mainImage.style.transition = "0.3s";