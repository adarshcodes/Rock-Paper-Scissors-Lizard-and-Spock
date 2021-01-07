console.log("it's connnected!");


const btnModal = document.getElementById('rules');
const container = document.querySelector('.container');
const btnClose = document.querySelector('.close-btn');
const overlay = document.querySelector('.modal-overlay');

btnModal.addEventListener('click', function () {
    overlay.classList.add('open-modal');
    container.classList.add('container-blur');
});

btnClose.addEventListener('click', function () {
    overlay.classList.remove('open-modal');
    container.classList.remove('container-blur');
})