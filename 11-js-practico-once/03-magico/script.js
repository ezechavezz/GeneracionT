const magiaDiv = document.getElementById('magia');
const image = magiaDiv.querySelector('img');

magiaDiv.addEventListener('mouseenter', function() {
    image.style.display = 'none';
});

magiaDiv.addEventListener('mouseleave', function() {
    image.style.display = 'block';
});
