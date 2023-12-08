const vent = document.querySelector('#vent-desc');
const cond = document.querySelector('#cond-desc');
const ventBtn = document.querySelector('#vent-btn');
const condBtn = document.querySelector('#cond-btn');

ventBtn.addEventListener('click', () => {
    cond.classList.remove('active');
    condBtn.classList.remove('active');
    vent.classList.add('active');
    ventBtn.classList.add('active');
    console.log(cond, vent);
});

condBtn.addEventListener('click', () => {
    vent.classList.remove('active');
    ventBtn.classList.remove('active');
    cond.classList.add('active');
    condBtn.classList.add('active');
    console.log(cond, vent);
});
