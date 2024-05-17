//all functions of app right here!
import { getAllPlaylists, HTTP } from "./Requests.js"
const endPoints = {
    //endpoints with normal name of  keys
    userProfile: 'https://api.spotify.com/v1/me', //GET
    userSavedTracks: 'https://api.spotify.com/v1/me/tracks?limit=50&offset=0', //GET
}
const httpMethod = {
    POST: 'POST',
    DELETE: 'DELETE',
    GET: 'GET',
    PUT: 'PUT'
}
export default function execute(token) {
    console.log(HTTP(httpMethod.GET, endPoints.userProfile, token));
}