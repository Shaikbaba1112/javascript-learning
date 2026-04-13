import { ProductCard } from './ProductCard.js';

export function ProductList(products, onAdd) {
  const container = document.createElement('div');
  container.className = 'products';

  products.forEach((p) => container.appendChild(ProductCard(p, onAdd)));

  return {
    el: container,
    filter(query) {
      const q = String(query || '').toLowerCase();
      Array.from(container.children).forEach((card) => {
        const name = (card.dataset.name || '').toLowerCase();
        card.style.display = name.includes(q) ? '' : 'none';
      });
    }
  };
}
