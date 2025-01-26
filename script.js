let cart = [];
let cartButton = document.querySelector('.cart-btn');
let cartItemsList = document.getElementById('cart-items');
let totalPriceElement = document.getElementById('total-price');

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartDisplay();
}

function updateCartDisplay() {
  cartButton.textContent = `Carrinho (${cart.length})`;
  cartItemsList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  totalPriceElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function openCart() {
  document.getElementById('cart').style.display = 'block';
}

function closeCart() {
  document.getElementById('cart').style.display = 'none';
}

function sendCartToWhatsApp() {
  let message = 'Meu carrinho de compras:\n';
  cart.forEach(item => {
    message += `${item.name} - R$ ${item.price}\n`;
  });

  let total = cart.reduce((acc, item) => acc + item.price, 0);
  message += `Total: R$ ${total.toFixed(2)}`;
  
  // Substitua o número abaixo pelo número de WhatsApp do seu negócio
  let whatsappNumber = '5561983652801';
  let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  window.open(url, '_blank');
}

function startShopping() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('product-page').style.display = 'block';
}
