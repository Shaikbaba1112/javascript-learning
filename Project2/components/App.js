import { Header } from './Header.js';
import { ProductList } from './ProductList.js';
import { Cart } from './Cart.js';

const products = [
  {
    name: 'T-Shirt',
    price: 499,
    img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Jeans',
    price: 999,
    img: 'https://images.unsplash.com/photo-1714729382668-7bc3bb261662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGplYW5zfGVufDB8fDB8fHww'
  },
  {
    name: 'Shoes',
    price: 1499,
    img: 'https://media.istockphoto.com/id/626469336/photo/big-collection-of-different-sport-shoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=gh9wlsDYqq0SoA76DKxSue49pDOoxt4rc5U-13n1dv8='
  },
  {
    name: 'Jacket',
    price: 1999,
    img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww'
  }
];

function mountApp() {
  const headerMount = document.getElementById('app-header');
  const productListMount = document.getElementById('productList');

  const cart = Cart(0);

  const header = Header({
    cartCount: cart.getCount(),
    onSearch(query) { productList.filter(query); }
  });

  // ensure headerMount replaced
  headerMount.replaceWith(header);

  const productList = ProductList(products, (product) => {
    cart.add();
  });

  productListMount.replaceWith(productList.el);

  // subscribe to cart updates to update the visible count
  cart.subscribe((count) => {
    const span = document.getElementById('cartCount');
    if (span) span.textContent = count;
  });
}

document.addEventListener('DOMContentLoaded', mountApp);
