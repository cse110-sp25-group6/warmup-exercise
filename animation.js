window.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const button = document.getElementById('dealButton');

    button.addEventListener('click', () => {
        card.classList.add('dealing');
    });

    card.addEventListener('click', () => {
        if (card.classList.contains('dealing')) {
            card.classList.toggle('flipped');
        }
    });
});
