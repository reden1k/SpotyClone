function toggleAnimation() {
    const button = document.querySelector('.button-auth');
    if (!button.classList.contains('animation-active')) {
      button.classList.toggle('animation-active');
    }
  }