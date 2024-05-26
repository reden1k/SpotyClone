import { Authorization } from '../backend/Authorization.js';
import { ipcRenderer, shell } from 'electron';

//REFACTOR CODE!!! (MAKE FUNCTION FOR ALL ANIMATIONS)

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button-start');
    const iconContainer = document.querySelector('.icon-container');

    button.addEventListener('click', (e) => {
      button.classList.toggle('animation-active');
      setTimeout(() => {
        button.classList.add('fade-out');
        setTimeout(() => {
          button.style.display = 'none'; 
        }, 500)
        showLoader();
      }, 2000)
      console.log(Authorization.getAuthorizationUrl())
      ipcRenderer.send('open-auth-window', (e, Authorization.getAuthorizationUrl()));
    })

    ipcRenderer.on('authorized', () => {
      setTimeout(() => {
        const loaderContainer = document.querySelector('.loader-container');
        const text = document.querySelector('.slide-in-text');
        loaderContainer.classList.remove('show')
        iconContainer.classList.add('move');
        setTimeout(() => {
          text.classList.add('slid-in');
        }, 500)
        showTable()
      }, 2000)
    })

    ipcRenderer.on('send-created-playlist', (e, playlist) => {
      const songs = playlist.songs;
      console.log(songs[0])
      for (let i = 0; i < songs.length; i += 1) {
        setTimeout(() => {
          addTrackInList(songs[i]);
        }, 250)
      }
    })
});

function addTrackInList(item) {
  const name = item.track.name;
  const artists = getArtists(item.track.artists);
  const logo = item.track.album.images[0];
  const ul = document.querySelector('.tracks');
  console.log(name, artists, logo)

  const li = document.createElement('li');
  
  const div = document.createElement('div');
  div.setAttribute('class','track');

  const img = document.createElement('img');
  img.setAttribute('class','logo');
  img.src = logo ? logo.url : 'source/icon.png';

  const details = document.createElement('div');
  details.setAttribute('class', 'details')


  const pName = document.createElement('p');
  pName.setAttribute('class', 'name');

  const pArtist = document.createElement('p');
  pArtist.setAttribute('class', 'artist');

  pName.textContent = name;
  pArtist.textContent = artists.join(', ');

  details.appendChild(pName);
  details.appendChild(pArtist)

  div.appendChild(img);
  div.appendChild(details)

  li.appendChild(div)

  ul.appendChild(li)
}

function showLoader() {
  var loaderContainer = document.querySelector('.loader-container');
  var text = document.querySelector('.slide-in-text');
  var iconContainer = document.querySelector('.text-container.hidden');
  loaderContainer.style.display = 'block'; // Устанавливаем display: block
    setTimeout(() => {
      loaderContainer.classList.add('show');
      iconContainer.classList.toggle('hidden') // Добавляем класс для анимации
    }, 400);
}

function showTable() {
  const list = document.querySelector('.list-container');
  const ul = document.querySelector('.tracks')
  if (!list.classList.contains('show') && !ul.classList.contains('show')) {
      list.classList.add('show')
      ul.classList.add('show')
  }
}

const getArtists = (array) => {
  const artists = [];
  if (array.length < 3) {
    return array.map((a) => a.name);
  }
  let i = 0;
  while (i <= 2) {
    artists.push(array[i].name);
    i += 1;
  }
  return artists;
}
