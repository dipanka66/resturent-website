const nav = document.querySelector('.navbar')
fetch('/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})



// Menu Script
// Menu script start
let cart = [];

    function addToCart(name, price, quantityId) {
      const quantity = document.getElementById(quantityId).value;
      const item = { name, price, quantity: parseInt(quantity) };

      const existingItem = cart.find(cartItem => cartItem.name === name);
      if (existingItem) {
        existingItem.quantity += parseInt(quantity);
      } else {
        cart.push(item);
      }

      renderCart();
    }

    function removeFromCart(name) {
      cart = cart.filter(cartItem => cartItem.name !== name);
      renderCart();
    }

    function renderCart() {
      const cartTableBody = document.getElementById('cart-table').getElementsByTagName('tbody')[0];
      cartTableBody.innerHTML = '';

      let totalPrice = 0;
      cart.forEach(item => {
        const row = cartTableBody.insertRow();
        row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.price * item.quantity}</td>
          <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        totalPrice += item.price * item.quantity;
      });

      document.getElementById('total-price').innerText = totalPrice;
    }

    function placeOrder() {
      if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
      }

      // Simulate placing an order (e.g., sending data to a server)
      alert('Order placed successfully!');

      // Clear the cart
      cart = [];
      renderCart();
    }

    // Menu script end


let popup = document.getElementById('popup')

function openPopup(){
  popup.classList.add('open-popup')
}
function openPopup(){
  popup.classList.remove('close-popup')
}

const form = document.getElementById('dateForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const response = await fetch('', {
    method: 'POST',
    body: formData
  });
  const result = await response.text();
  document.getElementById('response').innerText = result;
});

