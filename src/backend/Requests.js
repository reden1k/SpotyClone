import endpoint from "./Endpoints.js";
import { getItems, replaceOffset, replacePlaylistId, replaceUserId } from "./Parser.js";

// const playlistTemplate = {
//     name: 'SpotyClone',
//     description: 'SpotyClone',
//     public: true
// }

export async function getAllPlaylists(totalPlaylistsCount, token) { //for send request and optimizing code i can use this function like a callback inside HTTP func.
    let offset = 0;
    let endPoint = endpoint.userPlaylistsOffset;
    let playlists = [];
    while(offset < totalPlaylistsCount) {
        const currentPlaylists = getItems(await HTTP('GET', endPoint, token));
        playlists = playlists.concat(currentPlaylists);
        offset += 50;
        endPoint = replaceOffset(endPoint, offset);
    }
    return playlists;
}

export async function getAllFavSongs(totalSongsCount, token) {
    let offset = 0;
    let endPoint = endpoint.userFavSongsOffset;
    let songs = [];
    while(offset <= totalSongsCount) {
        const currentSongs = getItems(await HTTP('GET', endPoint, token));
        songs = songs.concat(currentSongs);
        offset += 50;
        endPoint = replaceOffset(endPoint, offset);
    }
    return songs;
}

export async function getAllCreatedPlaylistSongs(totalSongsCount, token, playlistId) {
    let offset = 0;
    let endPoint = replacePlaylistId(endpoint.userPlaylistOffset, playlistId);
    let songs = [];
    while(offset <= totalSongsCount) {
        const currentSongs = getItems(await HTTP('GET', endPoint, token));
        songs = songs.concat(currentSongs);
        offset += 50;
        endPoint = replaceOffset(endPoint, offset);
    }
    return songs;
}

// export function isCreated(playlists) {
//     return !playlists.every((p) => p.description !== 'SpotyClone');
// }

export async function addAllTracks(totalSongsCount, songs, playlistId, token) {
    let from = 0;
    let endPoint = replacePlaylistId(endpoint.addSongs, playlistId);
    while(from <= totalSongsCount) {
        const uris = getUris(songs, from, from + 100);
        console.log(uris.uris.length)
        await HTTP('POST', endPoint, token, uris);
        from += 100;
    }
}

export async function removeAllTracks(totalSongsCount, createdPlaylistSongs, playlistId, token) {
    let from = 0;
    let endPoint = replacePlaylistId(endpoint.removeSongs, playlistId);
    while(from <= totalSongsCount) {
        const tracks = getTracks(createdPlaylistSongs, from, from + 100);
        await HTTP('DELETE', endPoint, token, tracks);
        from += 100;
    }
}

// export function createPlaylist(token, userId) {
//     HTTP('POST', replaceUserId(endpoint.createPlaylist, userId), token, playlistTemplate);
// }

export async function HTTP(method, endpoint, token, data = null) {
    let result;
    if (!data) {
        await fetch(endpoint, {
            method,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to send request: ${response.status}`);
            }
            result = response.json();
            console.log('\x1b[32m%s\x1b[0m',`Response status: ${response.status}`)
        })
        .catch(error => {
            console.error('\x1b[31m%s\x1b[0m','There has been a problem with your fetch operation:', error);
        });
        return result;
    } else {
        return HTTPwithData(method, endpoint, token, data);
    }
}

async function HTTPwithData(method, endpoint, token, data) {
    let result;
    await fetch(endpoint, {
        method,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to send request: ${response.status}`);
        }
        result = response.json();
        console.log('\x1b[32m%s\x1b[0m',`Response status: ${response.status}`)
    })
    .catch(error => {
        console.error('\x1b[31m%s\x1b[0m','There has been a problem with your fetch operation:', error);
    });
    return result;
}

function getUris(array, from, to) {
    const uris = {
        uris: []
    };
    to = to > array.length ? array.length : to;
    while (from < to) {
        const item = array[from];
        const uri = item.track.uri;
        uris.uris.push(uri);
        from += 1;
    }
    return uris;
}

function getTracks(array, from, to) {
    const tracks = {
        tracks: []
    };
    to = to > array.length ? array.length : to;
    while (from < to) {
        const item = array[from];
        const uri = item.track.uri;
        tracks.tracks.push({ uri, });
        from += 1;
    }
    return tracks;
}

// export function getCreatedPlaylistId(playlists) {
//     let i = 0;
//     while(i <= playlists.length) {
//         const playlist = playlists[i]
//         if (playlist.name === 'SpotyClone' || playlist.description === 'SpotyClone') {
//             return playlist.id;
//         }
//         console.log(`No such playlist`)
//         return null;
//     }
// }