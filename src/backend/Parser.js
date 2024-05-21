export function getId(json) {
    return json.id;
}

export function getTotal(json) {
    return json.total;
}

export function getItems(json) {
    return json.items;
}

export function getTracks(json) {
    return json.tracks
}

export function replacePlaylistId(endPoint, id) {
    return endPoint.replaceAll('{playlist_id}', id);
}

export function replaceUserId(endPoint, id) {
    return endPoint.replaceAll('{user_id}', id);
}

export function replaceOffset(endPoint, to) {
    return `${endPoint.substring(0, (endPoint.indexOf('offset=') + 7) )}${to}`
}