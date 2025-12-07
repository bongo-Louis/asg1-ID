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
    if (quantityInput && dateInput) {
        const quantity = parseInt(quantityInput.value) || 1;
        const date = dateInput.value || 'Not Selected';
        const total = quantity * pricePerTicket;
        
        if (summaryQuantity) summaryQuantity.textContent = quantity;
        if (summaryDate) summaryDate.textContent = date;
        if (summaryTotal) summaryTotal.textContent = '$' + total.toFixed(2);
    }
}

if (quantityInput) quantityInput.addEventListener('change', updateSummary);
if (dateInput) dateInput.addEventListener('change', updateSummary);

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

// Song switcher
const songEmbeds = document.querySelectorAll('.song-embed');
const dots = document.querySelectorAll('.dot');
const songTitle = document.getElementById('songTitle');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const songs = ['song1', 'song2', 'song3'];
const titles = ['World is Mine', 'Tell Your World', 'Senbonzakura'];
let currentIndex = 0;

function showSong(index) {
    songEmbeds.forEach(embed => embed.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    document.getElementById(songs[index]).classList.add('active');
    document.querySelector(`[data-song="${songs[index]}"]`).classList.add('active');
    if (songTitle) songTitle.textContent = titles[index];
    currentIndex = index;
}

if (prevBtn) {
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + songs.length) % songs.length;
        showSong(currentIndex);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % songs.length;
        showSong(currentIndex);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        showSong(index);
    });
});