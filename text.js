let prices = [16.99, 11.99, 14.99]; let quantity = [1, 1, 1];
function increase(index) { quantity[index]++; document.getElementById("q" + index).innerHTML = quantity[index]; updateTotal(); }
function decrease(index) { if (quantity[index] > 1) { quantity[index]--; document.getElementById("q" + index).innerHTML = quantity[index]; updateTotal(); } }
function updateTotal() {
    let subtotal = 0;
    for (let i = 0; i < prices.length; i++) {
        let total = prices[i] * quantity[i];
        document.getElementById("t" + i).innerHTML = "$" + total.toFixed(2);
        subtotal += total;
    }

    document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);

    let shipping = 5;

    document.getElementById("grand").innerHTML = "$" + (subtotal + shipping).toFixed(2);
}
let trash = document.querySelectorAll(".fa-trash");
trash.forEach((btn, index) => { btn.addEventListener("click", function () { btn.parentElement.parentElement.remove(); prices[index] = 0; quantity[index] = 0; updateTotal(); }); });
document.querySelector(".checkout").addEventListener("click", function () { alert("Your order has been placed successfully!"); });
updateTotal();