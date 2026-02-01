let cart = 0;
function addToCart(){
    cart++;
    document.getElementById("cartCount").textContent = cart;
}

const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function(){
    const value = this.value.toLowerCase();
    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(value) ? "block": "none";
    });
});