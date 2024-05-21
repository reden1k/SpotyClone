import { HTTP, getAllPlaylists, getAllFavSongs } from "./Requests.js";
import endPoint from './Endpoints.js'
import { getId, getTotal } from "./Parser.js";

export class User {
    constructor(id, favSongsCount, playlistsCount, playlists, favSongs, isCreated, playlistId) {
        this.id = id;
        this.favSongsCount = favSongsCount;
        this.playlistsCount = playlistsCount;
        this.playlists = playlists;
        this.favSongs = favSongs;
        this.isCreated = isCreated
    }

    getId() {
        return this.id;
    }

    getFavSongsCount() {
        return this.favSongsCount;
    }

    getPlaylistsCount() {
        return this.playlistsCount;
    }

    getPlaylists() {
        return this.playlists;
    }

    getFavSongs() {
        return this.favSongs;
    }

    isCreatedPlaylist() {
        return this.isCreated
    }

    setPlaylists(playlists) {
        this.playlists = playlists;
    }
}

export async function createUser(token) {
    const id = getId(await HTTP('GET', endPoint.userProfile, token));
    const favSongsCount = getTotal(await HTTP('GET', endPoint.userTotalFavSongs, token));
    const playlistsCount = getTotal(await HTTP('GET', endPoint.userTotalPlaylists, token));
    const playlists = await getAllPlaylists(playlistsCount, token);
    const favSongs = await getAllFavSongs(favSongsCount, token);
    const isCreatedPlaylist = !playlists.every((p) => p.description !== 'SpotyClone');

    return new User(id, favSongsCount, playlistsCount, playlists, favSongs, isCreatedPlaylist);
}