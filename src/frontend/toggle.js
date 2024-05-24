function toggleAnimation() {
  var button = document.querySelector('.button-start');
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
        showTable()
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
  const list = document.querySelector('.list-container');
  const ul = document.querySelector('.tracks')
  if (!list.classList.contains('show') && !ul.classList.contains('show')) {
    setTimeout(() => {
      list.classList.add('show')
      ul.classList.add('show')
    }, 2000)
  }
}