let text = document.getElementById('text');
let w2 = document.getElementById('W2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    w2.style.top = value * 0.5 + 'px';

});