function toggleAnimation() {
  var button = document.querySelector('.button-auth');
  var icon = document.querySelector('.icon-container');
  if (!button.classList.contains('animation-active')) {
      button.classList.toggle('animation-active');
      setTimeout(function() {
        button.classList.add('fade-out');
        icon.classList.add('move')
        setTimeout(() => {
          button.style.display = 'none'; 
        }, 500)
        showLoader()
      }, 2000); /* задержка в 4 секунды */
    }
}
  
function showLoader() {
  var loaderContainer = document.querySelector('.loader-container');
  var text = document.querySelector('.slide-in-text');
  var iconContainer = document.querySelector('.text-container.hidden');
  loaderContainer.style.display = 'block'; // Устанавливаем display: block
    setTimeout(() => {
      loaderContainer.classList.add('show');
      text.classList.add('slid-in')
      iconContainer.classList.toggle('hidden') // Добавляем класс для анимации
    }, 400);
}

function showTable() {
  const table = document.querySelector('.songs-list')
}