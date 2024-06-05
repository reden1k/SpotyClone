import { response } from "express";
import endpoint from "./Endpoints.js";
import { getItems, replaceOffset, replacePlaylistId } from "./Parser.js";
import WebSocket from 'ws';


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

export async function addAllTracks(totalSongsCount, songs, playlistId, token) {
    let from = 0;
    let endPoint = replacePlaylistId(endpoint.addSongs, playlistId);
    while(from <= totalSongsCount) {
        const uris = getUris(songs, from, from + 100);
        console.log(uris.uris.length)
        await HTTP('POST', endPoint, token, uris);
        from += 100;
        await sleep(100)
    }
}

export async function removeAllTracks(totalSongsCount, createdPlaylistSongs, playlistId, token) {
    let from = 0;
    let endPoint = replacePlaylistId(endpoint.removeSongs, playlistId);
    while(from <= totalSongsCount) {
        const tracks = getTracks(createdPlaylistSongs, from, from + 100);
        await HTTP('DELETE', endPoint, token, tracks);
        from += 100;
        await sleep(500)
    }
}

export async function getArtist(endpoint, token) {
    return await HTTP('GET', endpoint, token);
}

export async function HTTP(method, endpoint, token, data = null) {
    let result;
    let statusCode;
    if (!data) {
        await fetch(endpoint, {
            method,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((response) => {
            statusCode = response.status;
            if (!response.ok) {
                throw new Error(`Failed to send request: ${statusCode}`);
            }
            result = response.json();
            console.log('\x1b[32m%s\x1b[0m',`Response status: ${statusCode}`)
        })
        .catch(error => {
            console.error('\x1b[31m%s\x1b[0m','There has been a problem with your fetch operation:', error);
            const socket = new WebSocket('ws://localhost:3000');
            socket.onopen = () => {
            socket.send(JSON.stringify(errorHandler(statusCode)))
            socket.close();

            throw new Error(`Failed to send request: ${statusCode}`);
        };
        });
        return result;
    } else {
        return HTTPwithData(method, endpoint, token, data);
    }
}

async function HTTPwithData(method, endpoint, token, data) {
    let result;
    let statusCode;
    await fetch(endpoint, {
        method,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        statusCode = response.status;
        if (!response.ok) {
            throw new Error(`Failed to send request: ${statusCode}`);
        }
        result = response.json();
        console.log('\x1b[32m%s\x1b[0m',`Response status: ${statusCode}`)
    })
    .catch(error => {
        console.error('\x1b[31m%s\x1b[0m','There has been a problem with your fetch operation:', error);
        const socket = new WebSocket('ws://localhost:3000');
        socket.onopen = () => {
        socket.send(JSON.stringify(errorHandler(statusCode)))
        socket.close();

        throw new Error(`Failed to send request: ${statusCode}`);
    };
    });
    return result;
}

function errorHandler(statusCode) {
    switch (statusCode) {
        case 401:
            return { message: 'Failed to authorize', description: 'There was a problem getting the token', status: `: ${statusCode}`, type: 'error' }
        case 403: 
            return { message: 'Request denied', description: 'The request was rejected by the server, try using a VPN', status: `: ${statusCode}`, type: 'error' }    
        case 400:
            return { message: 'Bad request', description: `Sorry for the inconvenience, we're already fixing it!`, status: `: ${statusCode}`, type: 'error' }    
        default: 
            return { message: 'Something went wrong', description: 'There was an error in sending the request, we are trying to fix it!', status: statusCode === undefined ? '' : `: ${statusCode}`, type: 'error' }
    }
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

function sleep(ms) { //delay for requests
    return new Promise(resolve => setTimeout(resolve, ms));
}