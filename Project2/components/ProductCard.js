export function ProductCard(product, onAdd) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.name = product.name;
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <div class="card-content">
      <h4>${product.name}</h4>
      <div class="price">${product.price}</div>
      <button class="add-btn">Add to Cart</button>
    </div>
  `;

  card.querySelector('.add-btn').addEventListener('click', () => onAdd && onAdd(product));
  return card;
}
