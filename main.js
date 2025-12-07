const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const closeBtn = document.getElementById('closeBtn');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', function() {
    navMenu.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// Order form sync
const quantityInput = document.getElementById('quantity');
const dateInput = document.getElementById('date');
const summaryQuantity = document.getElementById('summaryQuantity');
const summaryDate = document.getElementById('summaryDate');
const summaryTotal = document.getElementById('summaryTotal');
const addToCartBtn = document.querySelector('.cta-secondary');

const pricePerTicket = 50;

function updateSummary() {
    const quantity = parseInt(quantityInput.value) || 1;
    const date = dateInput.value || 'Not Selected';
    const total = quantity * pricePerTicket;
    
    summaryQuantity.textContent = quantity;
    summaryDate.textContent = date;
    summaryTotal.textContent = '$' + total.toFixed(2);
}

quantityInput.addEventListener('change', updateSummary);
dateInput.addEventListener('change', updateSummary);

if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const cardnumber = document.getElementById('cardnumber').value.replace(/\s/g, '');
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!name || !email || !cardnumber || !expiry || !cvv) {
            alert('Please fill in all fields.');
            return;
        }
        
        if (!/^\d{16}$/.test(cardnumber)) {
            alert('Invalid card number. Please enter 16 digits.');
            return;
        }
        
        if (!/^\d{2}\/\d{2}$/.test(expiry)) {
            alert('Invalid expiry date. Use MM/YY format.');
            return;
        }
        
        if (!/^\d{3}$/.test(cvv)) {
            alert('Invalid CVV. Please enter 3 digits.');
            return;
        }
        
        alert('Order added to cart!');
    });
}