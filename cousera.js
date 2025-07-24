const sortBtn = document.getElementById('sort-btn');
const filterSection = document.querySelector('.mobile-filter-section');
const closeBtn = document.querySelector('.close-btn');

sortBtn.addEventListener('click', () => {
    filterSection.classList.toggle('active');
});