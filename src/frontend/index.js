import { stat } from 'fs';
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
        changeStatus('Making magic')
      }, 3000)
    })

    ipcRenderer.on('send-created-playlist', (e, playlist) => {
      changeStatus('Adding songs');
      const songs = playlist.songs;
      console.log(songs[0])
      for (let i = 0; i < songs.length; i += 1) {
          addTrackInList(songs[i]);
      }
      setTimeout(() => {
        addTracksListeners();
        showTable();
      }, 5000)
    })

    ipcRenderer.on('response-artist', (e, artist) => {
      console.log(artist)
    })

    ipcRenderer.on('throw-error', (e, error) => {
      setTimeout(() => {
        const iconContainer = document.querySelector('.icon-container');
        const loaderContainer = document.querySelector('.loader-container');
        const listContainer = document.querySelector('.list-container')
        const textStatus = document.querySelector('.status');
        textStatus.style.opacity = 0;
        iconContainer.style.opacity = 0;
        loaderContainer.style.opacity = 0;
        listContainer.style.opacity = 0;
        setTimeout(() => {
          listContainer.style.display = 'none';
          iconContainer.style.display = 'none';
          loaderContainer.style.display = 'none';
          textStatus.style.display = 'none';
          throwError(error)
        }, 1700)
      }, 4500)
      console.log(error)
    })
});

function addTrackInList(item) {
  const name = item.track.name;
  const artists = getCompactArtists(item.track.artists);
  const logo = item.track.album.images[0];
  const artistEndpoint = item.track.artists[0].href;
  const ul = document.querySelector('.tracks');
  console.log(name, artists, logo, artistEndpoint)

  const li = document.createElement('li');
  
  const div = document.createElement('div');
  div.setAttribute('class','track');
  div.setAttribute('data-artist-endpoint', artistEndpoint)

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
  const loaderContainer = document.querySelector('.loader-container');
  const status = document.querySelector('.status');
  loaderContainer.style.display = 'block';
  status.style.display = 'block'
    setTimeout(() => {
      loaderContainer.classList.add('fade-in');
      status.classList.add('fade-in')
    }, 400);
}

function showTable() {
  const list = document.querySelector('.list-container');
  const iconContainer = document.querySelector('.icon-container');
  const loaderContainer = document.querySelector('.loader-container');
  const text = document.querySelector('.slide-in-text');
  const statusText = document.querySelector('.status');
  loaderContainer.classList.remove('fade-in');
  statusText.classList.remove('fade-in');
  statusText.style.opacity = 0;
  setTimeout(() => {
    loaderContainer.style.display = 'none';
    statusText.style.display = 'none';
    iconContainer.classList.add('move');
    text.classList.add('slid-in')
  }, 600);

  setTimeout(() => {
    const ul = document.querySelector('.tracks')
    if (!list.classList.contains('fade-in') && !ul.classList.contains('fade-in')) {
    list.style.display = 'block';
    ul.style.display = 'block';
    setTimeout(() => {
      list.classList.add('fade-in')
      ul.classList.add('fade-in') 
    }, 100)
  }
  }, 1500)
}

function addTracksListeners() {
  const liArray = document.querySelectorAll('li');
      liArray.forEach((li) => {
        li.addEventListener('click', () => {
          const divTrack = li.querySelector('.track');
          const endPoint = divTrack.dataset.artistEndpoint;
          console.log(`You tapped on div with ${endPoint}`)
          ipcRenderer.send('send-endpoint', endPoint);
        })
      })
}

function throwError(error) {
  const body = document.querySelector('body')

  const errorContainer = document.createElement('div');
  errorContainer.setAttribute('class', 'error-container');

  const title = document.createElement('div');
  title.setAttribute('class', 'error-title');

  const description = document.createElement('div');
  description.setAttribute('class', 'error-description');

  title.textContent = `${error.message}: ${error.status}`;
  description.textContent = error.description;

  errorContainer.appendChild(title);
  errorContainer.appendChild(description);

  body.appendChild(errorContainer)

  setTimeout(() => {
    title.classList.add('fade-in');
    description.classList.add('fade-in')
    errorContainer.classList.add('fade-in')
  }, 10)
}

const getCompactArtists = (array) => {
  let artists = [];
  if (array.length < 3) {
    return array.map((a) => a.name);
  }
  let i = 0;
  while (i <= 2) {
    artists.push(array[i].name);
    i += 1;
  }
  if (artists.join(',').length > 36) {
    let k = 0;
    artists = []
    while (k < 2) {
      artists.push(array[k].name);
      k += 1;
    }
  }
  return artists;
}

function changeStatus(to) {
  const textElement = document.querySelector('.status');

  // Плавно скрыть текущий текст
  textElement.style.opacity = 0;

  // Изменить текст после завершения анимации скрытия
  setTimeout(() => {
      textElement.textContent = to;

      // Плавно показать новый текст
      textElement.style.opacity = 1;
  }, 500); // Время задержки совпадает с временем перехода в CSS
}
