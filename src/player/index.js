const button = document.querySelector('button');

const audio = document.querySelector('audio');
const progressBar = document.querySelector('.progress-bar');
const volumeControl = document.querySelector('.volume');
const current = document.querySelector('.current')
const durationTime = document.querySelector('.duration');

let isPlaying = false;

// Устанавливаем громкость по умолчанию и обновляем стиль прогресс-бара громкости
audio.volume = 0.3;
volumeControl.value = 0.3;
updateVolumeProgressBar(volumeControl.value);

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progressPercent = (currentTime / duration) * 100;
    // progressBar.value <= 10 ? progressBar.value = progressPercent - 1.7 : progressBar.value = progressPercent - 2;
    progressBar.value = progressPercent
    console.log(progressBar.value)
    progressBar.style.background = `linear-gradient(to right, white ${progressPercent + 1.7}%, gray ${progressPercent + 1.7}%)`;

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
    console.log(icon)
    if (status === 'stop') {
        icon.src = 'source/stop.png';
        button.dataset.status = 'start';
        audio.play();
    } else {
        icon.src = 'source/start.png';
        button.dataset.status = 'stop';
        audio.pause();
    }
    isPlaying = !isPlaying;
})