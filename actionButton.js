var actionButton = document.querySelectorAll('.actionButton');

for (let i = 0; i < actionButton.length; i++) {
actionButton[i].style.backgroundColor = 'rgb(87, 89, 114)';
};

actionButton[0].addEventListener('touchstart', () => {
  if (actionButton[1].style.backgroundColor === 'rgb(87, 89, 114)') {
    actionButton[0].style.backgroundColor = 'rgb(197, 80, 80)'
  }
});

actionButton[1].addEventListener('touchstart', () => {
  if (actionButton[0].style.backgroundColor === 'rgb(87, 89, 114)') {
    actionButton[1].style.backgroundColor = 'rgb(120, 188, 139)'
  }
});