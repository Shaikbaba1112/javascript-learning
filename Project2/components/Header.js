export function Header({ onSearch, cartCount = 0 }) {
  const header = document.createElement('header');
  header.className = 'app-header';
  header.innerHTML = `
    <div class="logo">Myntra</div>
    <nav>
      <a href="">Men</a>
      <a href="">Women</a>
      <a href="">Kids</a>
      <a href="">Beauty</a>
    </nav>
    <div class="right">
      <div class="search-box">
        <input type="text" id="searchInput" placeholder="Search for products">
      </div>
      <div class="cart">Cart: <span id="cartCount">${cartCount}</span></div>
    </div>
  `;

  const input = header.querySelector('#searchInput');
  input.addEventListener('input', (e) => onSearch && onSearch(e.target.value));

  return header;
}
