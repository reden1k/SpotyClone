import { Authorization } from '../backend/Authorization.js';
import { ipcRenderer, shell } from 'electron';

let isThrowedError = false;
let isThrowedErrorPreview = false;
let statusAnimationActive = false;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button-start');

    button.addEventListener('click', (e) => {
      button.classList.toggle('animation-active');
      setTimeout(() => {
        button.classList.add('fade-out');
        setTimeout(() => {
          button.style.display = 'none'; 
        }, 500)
        showLoader();
      }, 2000)
      // console.log(Authorization.getAuthorizationUrl())
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
        createCopyButton(`https://open.spotify.com/playlist/${playlist.uri.split(':')[2]}`);
      }, 5000)
    })

    ipcRenderer.on('throw-error', (e, error) => {
      if (!isThrowedError) {
        setTimeout(() => {
          const iconContainer = document.querySelector('.icon-container');
          const loaderContainer = document.querySelector('.loader-container');
          const listContainer = document.querySelector('.list-container')
          const textStatus = document.querySelector('.status');
          const container = document.querySelector('.container');
          const copyButton = document.querySelector('.button-copy');
          textStatus.style.opacity = 0;
          iconContainer.style.opacity = 0;
          loaderContainer.style.opacity = 0;
          listContainer.style.opacity = 0;
          copyButton ? copyButton.style.opacity = 0 : null;
          setTimeout(() => {
            container.style.display = 'none';
            copyButton ? copyButton.style.display = 'none' : null;
            throwError(error)
          }, 1000)
        }, 4500)
        isThrowedError = true;
      }
      console.log(error)
    })
});

function addTrackInList(item) {
  const name = item.track.name;
  const artists = getCompactArtists(item.track.artists);
  const logo = item.track.album.images[0];
  const previewUrl = item.track['preview_url'];
  const ul = document.querySelector('.tracks');
  console.log(name, artists, logo, previewUrl)

  const li = document.createElement('li');
  li.classList.add('track-list-item')
  
  const div = document.createElement('div');
  div.setAttribute('class','track');
  div.setAttribute('data-track-preview', previewUrl)

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

function createCopyButton(linkToPlaylist) {
  const btn = document.createElement('button');
  btn.classList.add('button-copy');
  btn.textContent = 'Copy link';

  const copiedSpan = document.createElement('span');
  copiedSpan.textContent = 'Copied';
  
  btn.appendChild(copiedSpan);

  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(linkToPlaylist);
    if (!btn.classList.contains('animation-active')) {
        btn.classList.add('animation-active')
        statusAnimationActive = true;
        setTimeout(() => {
            statusAnimationActive = false;
            btn.classList.remove('animation-active')
        }, 5000);
    }
})
  document.body.appendChild(btn);

  setTimeout(() => {
    btn.classList.add('fade-in')
  }, 1700)
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
          const name = li.querySelector('.name').textContent;
          const artists = li.querySelector('.artist').textContent.split(', ');
          const logo = li.querySelector('.logo').src;
          const divTrack = li.querySelector('.track');
          const previewUrl = divTrack.dataset.trackPreview;
          console.log(`You tapped on div with ${previewUrl}`)
          if (previewUrl !== 'null') {
            const track = {
              name, 
              artists,
              logo,
              previewUrl,
            }
            createPopup(track);
            makePlayerWork();
          } else if (!isThrowedErrorPreview) {
            isThrowedErrorPreview = true;
            tempCreateNoPreviewError();
          }
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

  title.textContent = `${error.message}${error.status}`;
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

function getCompactTrackName(name) {
  if (name.length > 22) {
    return `${name.slice(0, 19)}...`;
  }
  return name;
}

function changeStatus(to) {
  const textElement = document.querySelector('.status');

  
  textElement.style.opacity = 0;

  
  setTimeout(() => {
      textElement.textContent = to;

      
      textElement.style.opacity = 1;
  }, 500); 
}

function createPopup(track) {
  const popup = document.createElement('div');
  popup.setAttribute('class', 'popup');

  const audioPlayerContainer = document.createElement('div');
  audioPlayerContainer.setAttribute('class', 'audio-player-container');

  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'image-container');

  // const background = document.createElement('img');
  // background.setAttribute('class', 'background-player');

  const gradientOverlay = document.createElement('div');
  gradientOverlay.setAttribute('class', 'gradient-overlay');

  const trackLogo = document.createElement('img');
  trackLogo.setAttribute('class', 'track-logo');
  trackLogo.src = track.logo;

  const trackName = document.createElement('div');
  trackName.setAttribute('class', 'track-name');
  trackName.textContent = getCompactTrackName(track.name);

  const artists = document.createElement('ul');
  artists.setAttribute('class', 'artists');

  track.artists.map((e) => {
    const li = document.createElement('li');
    li.classList.add('artist');
    
    const a = document.createElement('a');
    a.classList.add('link-to-artist');
    a.href = '';
    a.textContent = e;

    li.appendChild(a);

    artists.appendChild(li)
  })

  const player = document.createElement('div');
  player.classList.add('player');

  const audio = document.createElement('audio');
  audio.src = track.previewUrl;

  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.setAttribute('data-status', 'stop');

  const btnIcon = document.createElement('img');
  btnIcon.classList.add('btn-icon');
  btnIcon.src = 'assets/start.png'

  const playerInfo = document.createElement('div');
  playerInfo.classList.add('player-info');

  const currentTime = document.createElement('div');
  currentTime.classList.add('current');
  currentTime.classList.add('time');
  currentTime.textContent = '0:00';

  const progressContainer = document.createElement('div');
  progressContainer.classList.add('progress-container');

  const inputProgressBar = document.createElement('input');
  inputProgressBar.classList.add('progress-bar');
  inputProgressBar.setAttribute('type', 'range');
  inputProgressBar.setAttribute('min', 0);
  inputProgressBar.setAttribute('max', 100);
  inputProgressBar.setAttribute('value', 0);

  const durationTime = document.createElement('div');
  durationTime.classList.add('duration');
  durationTime.classList.add('time');
  durationTime.textContent = '0:29';

  const volumeContainer = document.createElement('div');
  volumeContainer.classList.add('volume-container');

  const inputVolume = document.createElement('input');
  inputVolume.classList.add('volume');
  inputVolume.setAttribute('type', 'range');
  inputVolume.setAttribute('min', 0);
  inputVolume.setAttribute('max', 1);
  inputVolume.setAttribute('step', 0.1);
  inputVolume.setAttribute('value', 1);

  // imageContainer.appendChild(background);
  imageContainer.appendChild(gradientOverlay);

  progressContainer.appendChild(inputProgressBar);
  volumeContainer.appendChild(inputVolume);

  playerInfo.appendChild(currentTime);
  playerInfo.appendChild(progressContainer);
  playerInfo.appendChild(durationTime);
  playerInfo.appendChild(volumeContainer);

  btn.appendChild(btnIcon);

  player.appendChild(audio);
  player.appendChild(btn);
  player.appendChild(playerInfo)

  audioPlayerContainer.appendChild(imageContainer);
  audioPlayerContainer.appendChild(trackLogo);
  audioPlayerContainer.appendChild(trackName);
  audioPlayerContainer.appendChild(artists);
  audioPlayerContainer.appendChild(player);

  popup.appendChild(audioPlayerContainer);

  popup.addEventListener('click', (e) => {
    if (popup.classList.contains('show') && e.target === popup) {
        popup.classList.remove('show');
        setTimeout(() => {
            popup.remove()
        },400)
    }
})

setTimeout(() => {
  popup.classList.add('show')
}, 10)

  document.body.appendChild(popup);
}

function makePlayerWork() {
  const button = document.querySelector('.btn');

const audio = document.querySelector('audio');
const progressBar = document.querySelector('.progress-bar');
const volumeControl = document.querySelector('.volume');
const current = document.querySelector('.current')
const durationTime = document.querySelector('.duration');

let isPlaying = false;

// Устанавливаем громкость по умолчанию и обновляем стиль прогресс-бара громкости
audio.volume = 0.1;
volumeControl.value = 0.1;
updateVolumeProgressBar(volumeControl.value);

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent
    progressBar.style.background = `linear-gradient(to right, white ${progressPercent + 1.7}%, gray ${progressPercent + 1.7}%)`; // should be fix for cleanest progress bar

    // Обновление времени отображения
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);

    current.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
    durationTime.textContent =  `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`
});

progressBar.addEventListener('input', () => {
    const duration = audio.duration;
    const newTime = (progressBar.value / 100) * duration;
    audio.currentTime = newTime;
    const val = progressBar.value;
    progressBar.style.background = `linear-gradient(to right, white ${val}%, gray ${val}%)`;
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
    updateVolumeProgressBar(volumeControl.value);
});

function updateVolumeProgressBar(value) {
    let val = value * 100 ;
    val === 10 ? val += 7 : val
    volumeControl.style.background = `linear-gradient(to right, white ${val}%, gray ${val}%)`;
}

button.addEventListener('click', (e) => {
    const status = button.dataset.status;
    const icon = e.target;
    if (status === 'stop') {
        icon.src = 'assets/stop.png';
        button.dataset.status = 'start';
        audio.play();
    } else {
        icon.src = 'assets/start.png';
        button.dataset.status = 'stop';
        audio.pause();
    }
    isPlaying = !isPlaying;
})
}

function tempCreateNoPreviewError() {
  const errorPreviewMessage = document.createElement('div');
  errorPreviewMessage.classList.add('error-preview-message');

  const errorIcon = document.createElement('img');
  errorIcon.classList.add('error-icon');
  errorIcon.src = 'assets/error.png'

  const errorP = document.createElement('p');
  errorP.classList.add('error-text');
  errorP.textContent = 'No preview here :('

  errorPreviewMessage.appendChild(errorIcon);
  errorPreviewMessage.appendChild(errorP);

  document.body.appendChild(errorPreviewMessage)

  setTimeout(() => {
    errorPreviewMessage.classList.add('show');
  }, 10)

  setTimeout(() => {
    errorPreviewMessage.classList.remove('show');
  }, 2500)

  setTimeout(() => {
    errorPreviewMessage.remove();
    isThrowedErrorPreview = false;
  }, 3000)
}