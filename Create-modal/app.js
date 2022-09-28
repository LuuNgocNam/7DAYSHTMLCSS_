var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer button');

function toggeLModaL(e) {
  console.log(e.target);
  modal.classList.toggle('hide');
}

btnOpen.addEventListener('click', toggeLModaL);
btnClose.addEventListener('click', toggeLModaL);
iconClose.addEventListener('click', toggeLModaL);
modal.addEventListener('click', function (e) {
  if (e.target == e.currentTarget) {
    toggeLModaL();
  }
});
