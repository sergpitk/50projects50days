const progress = document.getElementById('progress');
const prev = document.getElementById('prev') as HTMLButtonElement;
const next = document.getElementById('next') as HTMLButtonElement ;
const circles= document.querySelectorAll('.circle');

let currentActiveCircle = 1;

next.addEventListener( 'click', () => {
    currentActiveCircle ++;
    if (currentActiveCircle > circles.length) {
        currentActiveCircle = circles.length;
    }
    updateDom();
});

prev.addEventListener( 'click', () => {
    currentActiveCircle --;
    if (currentActiveCircle < 1) {
        currentActiveCircle = 1;
    }
    updateDom();
});

function updateDom ()
{
    circles.forEach( (circle,  idx) => {
        if (idx < currentActiveCircle) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    if (progress) {
        progress.style.width = String(((actives.length - 1) / (circles.length - 1)) * 100) + '%' ;
    }


    next.disabled = currentActiveCircle === circles.length;
    prev.disabled = currentActiveCircle === 1;
}
