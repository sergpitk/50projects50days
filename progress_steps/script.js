var progress = document.getElementById('progress');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var circles = document.querySelectorAll('.circle');
var currentActiveCircle = 1;
next.addEventListener('click', function () {
    currentActiveCircle++;
    if (currentActiveCircle > circles.length) {
        currentActiveCircle = circles.length;
    }
    updateDom();
});
prev.addEventListener('click', function () {
    currentActiveCircle--;
    if (currentActiveCircle < 1) {
        currentActiveCircle = 1;
    }
    updateDom();
});
function updateDom() {
    circles.forEach(function (circle, idx) {
        if (idx < currentActiveCircle) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active');
        }
    });
    var actives = document.querySelectorAll('.active');
    if (progress) {
        progress.style.width = String(((actives.length - 1) / (circles.length - 1)) * 100) + '%';
    }
    next.disabled = currentActiveCircle === circles.length;
    prev.disabled = currentActiveCircle === 1;
}
