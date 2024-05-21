function toggleAnimation() {
  var button = document.querySelector('.button-auth');
  var icon = document.querySelector('.icon');
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
  loaderContainer.style.display = 'block'; // Устанавливаем display: block
    setTimeout(() => {
      loaderContainer.classList.add('show'); // Добавляем класс для анимации
    }, 400);
}

function showTable() {
  const table = document.querySelector('.songs-list')
}