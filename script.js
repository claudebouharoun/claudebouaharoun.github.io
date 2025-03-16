// Add tap/click interaction for mobile
const container = document.querySelector('.container');

container.addEventListener('click', function () {
    container.classList.toggle('tap-active');
});
