const panels = document.querySelectorAll('.panel');
panels.forEach( (panel) => {
    panel.addEventListener('click', () => {
        const active = document.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        panel.classList.add('active');
    });
});
