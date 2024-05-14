export default {
    //endpoints with normal name of  keys
    userProfile: 'https://api.spotify.com/v1/me', //GET
    userSavedTracks: 'https://api.spotify.com/v1/me/tracks?limit=50&offset=0', //GET
    userTotalPlaylists: 'https://api.spotify.com/v1/me/playlists', //GET
    userTotalFavSongs: 'https://api.spotify.com/v1/me/tracks', //GET
    userPlaylistsOffset: 'https://api.spotify.com/v1/me/playlists?limit=50&offset=0', //GET
    userFavSongsOffset: 'https://api.spotify.com/v1/me/tracks?limit=50&offset=0', //GET
    createPlaylist: 'https://api.spotify.com/v1/users/{user_id}/playlists', //POST
    addSongs: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks', //POST
    removeSongs: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks', //DELETE
    playlistSongs : 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks', // ET
    userPlaylistOffset: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks?limit=50&offset=0', //GET
}