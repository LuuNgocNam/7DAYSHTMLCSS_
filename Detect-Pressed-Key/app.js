var eKey = document.querySelector('.card.key p:first-child');
var eLocation = document.querySelector('.card.location p:first-child');
var eWhich = document.querySelector('.card.which p:first-child');
var eCode = document.querySelector('.card.code p:first-child');
var alert = document.querySelector('.alert');
var box = document.querySelector('.box');

document.addEventListener('keydown', (e) => {
  alert.classList.add('hide');
  box.classList.remove('hide');
});
