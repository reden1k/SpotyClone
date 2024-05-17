export function getAllPlaylists() {
    return []
}

function getTracks(offset) {

}

export function isCreated(arrayOfPlaylists) {
    return false;
}

export function addAllTracks() {

}

export function removeAllTracks() {

}

export async function HTTP(method, endpoint, token, data = null) {
    let result;
    if (data) {
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
                throw new Error('Failed to send request:', response.status, response.statusText);
            }
        })
        .then((data) => {
            result = data;
        })
        .catch(error => {
            // Обрабатываем ошибку
            console.error('There has been a problem with your fetch operation:', error);
        });
    } else {
        await fetch(endpoint, {
            method,
            headers: {
                'Authorization': `Bearer ${token.trim()}`
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Failed to send request: ${response.status}`);
            }
        })
        .then((data) => {
            result = data;
        })
        .catch(error => {
            // Обрабатываем ошибку
            console.error('There has been a problem with your fetch operation:', error);
        });
    }
    return result;
}