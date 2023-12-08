const callBackModal = document.querySelector('.modal--call-back');
const callBackBtn = document.querySelector('#callBackBtn');
const callBackCloseBtn = document.querySelector('#callBackCloseBtn');

callBackBtn.addEventListener('click', () => {
    callBackModal.classList.toggle('modal--show');
    callBackCloseBtn.focus();
});

callBackCloseBtn.addEventListener('click', () => {
    callBackModal.classList.toggle('modal--show');
});

const requestModal = document.querySelector('.modal--request');
const requestModalClose = document.querySelector('#requestModalClose');
const leaveRequestBtn = document.querySelector('#leaveRequestBtn');
const fillOutRequestBtn = document.querySelector('#fillOutRequestBtn');

leaveRequestBtn.addEventListener('click', () => {
    requestModal.classList.toggle('modal--show');
    requestModalClose.focus();
});

fillOutRequestBtn.addEventListener('click', () => {
    requestModal.classList.toggle('modal--show');
    requestModalClose.focus();
});

requestModalClose.addEventListener('click', () => {
    requestModal.classList.toggle('modal--show');
});
