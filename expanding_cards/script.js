var panels = document.querySelectorAll('.panel');
panels.forEach(function (panel) {
    panel.addEventListener('click', function () {
        var active = document.querySelector('.active');
        if (active) {
            active.classList.remove('active');
        }
        panel.classList.add('active');
    });
});
