function showSlide(id) {
  document.querySelectorAll('.slide').forEach(s =>
    s.classList.remove('active')
  );
  document.getElementById(id).classList.add('active');
}

const menuList = [
  { name: "Americano", price: 25000 },
  { name: "Latte", price: 28000 },
  { name: "Cappuccino", price: 30000 }
];

const cart = [];

function renderMenu() {
  const menuDiv = document.getElementById('menu-list');
  menuDiv.innerHTML = '';
  menuList.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-card';
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Rp ${item.price}</p>
      <button onclick="addToCart('${item.name}', ${item.price})">+</button>
    `;
    menuDiv.appendChild(div);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cart-list');
  const totalEl = document.getElementById('total');
  list.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rp ${item.price}`;
    list.appendChild(li);
  });
  totalEl.textContent = `Total: Rp ${total}`;
}

function checkout() {
  alert("Terima kasih sudah memesan di CoffeeBean!");
}

renderMenu();
