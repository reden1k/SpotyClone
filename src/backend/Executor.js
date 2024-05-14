//all functions of app right here!
import { getAllPlaylists, HTTP, addAllTracks, removeAllTracks, getAllCreatedPlaylistSongs } from "./Requests.js"
import { createUser } from "./User.js";
import { createPlaylist, getCreatedPlaylist } from "./Playlist.js";
let user;
export default async function execute(token) {
    user = user ?? await createUser(token);
    let playlist;
    if (!user.isCreatedPlaylist()) {
        playlist = await createPlaylist(user.getId(), token)
        user.setPlaylists(await getAllPlaylists(user.getPlaylistsCount(), token));
        await addAllTracks(user.getFavSongsCount(), user.getFavSongs(), playlist.getId(), token);
    } else {
        playlist = await getCreatedPlaylist(user.getPlaylists(), token)
        await removeAllTracks(playlist.getTotalSongsCount(), playlist.getSongs(), playlist.getId(), token);
        await addAllTracks(user.getFavSongsCount(), user.getFavSongs(), playlist.getId(), token);
    }
}