import { HTTP, getAllCreatedPlaylistSongs } from "./Requests.js";
import endpoint from './Endpoints.js'
import { replaceUserId, getId, getItems, getTotal } from "./Parser.js";

const playlistTemplate = {
    name: 'SpotyClone',
    description: 'SpotyClone',
    public: true
}

export class Playlist {
    constructor(id, songs, totalSongsCount, uri) {
        this.id = id;
        this.songs = songs;
        this.totalSongsCount = totalSongsCount;
        this.uri = uri;
    }

    getId() {
        return this.id;
    }

    getSongs() {
        return this.songs;
    }

    getTotalSongsCount() {
        return this.totalSongsCount;
    }

    getUri() {
        return this.uri;
    }

    setUri(uri) {
        this.uri = uri;
    }

    setTotalSongsCount(count) {
        this.totalSongsCount = count;
    }

    setSongs(songs) {
        this.songs = songs
    }
}

export async function createPlaylist(userId, token) {
    const id = getId(await HTTP('POST', replaceUserId(endpoint.createPlaylist, userId), token, playlistTemplate));

    return new Playlist(id, [], 0, null);
}

export async function getCreatedPlaylist(userPlaylists, token) {
    let i = 0;
    while(i <= userPlaylists.length) {
        const playlist = userPlaylists[i]
        if (playlist.name === 'SpotyClone' || playlist.description === 'SpotyClone') {
            const totalSongsCount = getTotal(playlist.tracks);
            const id = playlist.id;
            const uri = playlist.uri;
            const songs = await getAllCreatedPlaylistSongs(totalSongsCount, token, id);
            return new Playlist(id, songs, totalSongsCount, uri)
        }
    }
    console.log(`No such playlist`)
    return null;
}