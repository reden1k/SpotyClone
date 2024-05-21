import { HTTP, getAllCreatedPlaylistSongs } from "./Requests.js";
import endpoint from './Endpoints.js'
import { replaceUserId, getId, getItems, getTotal } from "./Parser.js";

const playlistTemplate = {
    name: 'SpotyClone',
    description: 'SpotyClone',
    public: true
}

export class Playlist {
    constructor(id, songs, totalSongsCount) {
        this.id = id;
        this.songs = songs;
        this.totalSongsCount = totalSongsCount;
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

    setTotalSongsCount(count) {
        this.totalSongsCount = count;
    }

    setSongs(songs) {
        this.songs = songs
    }
}

export async function createPlaylist(userId, token) {
    const id = getId(await HTTP('POST', replaceUserId(endpoint.createPlaylist, userId), token, playlistTemplate));
    const songs = await getAllCreatedPlaylistSongs(token, id);

    return new Playlist(id, songs, 0);
}

export async function getCreatedPlaylist(userPlaylists, token) {
    let i = 0;
    while(i <= userPlaylists.length) {
        const playlist = userPlaylists[i]
        if (playlist.name === 'SpotyClone' || playlist.description === 'SpotyClone') {
            const totalSongsCount = getTotal(playlist.tracks);
            const id = playlist.id;
            const songs = await getAllCreatedPlaylistSongs(totalSongsCount, token, id);
            return new Playlist(id, songs, totalSongsCount)
        }
    }
    console.log(`No such playlist`)
    return null;
}