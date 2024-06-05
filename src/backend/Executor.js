//all functions of app right here!
import { getAllPlaylists, addAllTracks, removeAllTracks, getAllCreatedPlaylistSongs, getArtist } from "./Requests.js"
import { createUser } from "./User.js";
import { createPlaylist, getCreatedPlaylist } from "./Playlist.js";
import WebSocket from 'ws';
let user;

export async function execute(token) {
    user = user ?? await createUser(token);
    let playlist;
    console.log(user.getFavSongsCount())
    if (!user.isCreatedPlaylist()) {
        playlist = await createPlaylist(user.getId(), user.getToken())
        user.setPlaylists(await getAllPlaylists(user.getPlaylistsCount(), user.getToken()));
        await addAllTracks(user.getFavSongsCount(), user.getFavSongs(), playlist.getId(), user.getToken());
        playlist.setSongs(await getAllCreatedPlaylistSongs(user.getFavSongsCount(), user.getToken(), playlist.getId()))
    } else {
        playlist = await getCreatedPlaylist(user.getPlaylists(), user.getToken())
        await removeAllTracks(playlist.getTotalSongsCount(), playlist.getSongs(), playlist.getId(), user.getToken());
        await addAllTracks(user.getFavSongsCount(), user.getFavSongs(), playlist.getId(), user.getToken());
    }
    const socket = new WebSocket('ws://localhost:3000');
    socket.onopen = () => {
        socket.send(JSON.stringify({ createdPlaylist: playlist, type: 'songs' }))
        socket.close()
    };
}

export async function artistEndpointHandler(endPoint, track) { //ACCEPTING AND RESPONSING BACK
    let artist;
    try {
        artist = await getArtist(endPoint, user.getToken())
        const socket = new WebSocket('ws://localhost:3000');
        socket.onopen = () => {
        socket.send(JSON.stringify({ artist, track, type: 'artist' }))
        socket.close();
    }
    } catch (e) {
        const socket = new WebSocket('ws://localhost:3000');
        socket.onopen = () => {
        socket.send(JSON.stringify({ artist: null, track, type: 'no-artist' }))
        socket.close();
    }
    }
}