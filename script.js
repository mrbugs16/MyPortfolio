

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.createElement('button');
    themeButton.textContent = 'Cambiar tema'
    document.body.appenChild(themeButton);

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mnode');
    });
});