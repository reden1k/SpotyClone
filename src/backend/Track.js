function addTrackInList(item) {
    const name = item.track.name;
    const artists = item.track.artists.map((e) => e.name);
    const logo = item.track.album.images[0];
    const ul = document.querySelector('tracks');

    const div = document.createElement('div');
    track.setAttribute('track');

    const img = document.createElement('img');
    img.setAttribute('logo');

    const details = document.createElement('div');
    const pName = document.createElement('p');
    const pArtist = document.createElement('p')

    pName.textContent = name;
    pArtist.textContent = artists.join(',');

    details.appendChild(pName);
    details.appendChild(pArtist)

    div.appendChild(img);
    div.appendChild(details)

    ul.appendChild(div)
}