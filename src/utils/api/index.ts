const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=07110192b3fd8b432cc796b4c48dd507";

export const imageUrl = 'https://image.tmdb.org/t/p/w200/'

function request(endpoint: string, method = "GET", data = null) {
    const config = {
        method,
        headers: {
            "Content-type": "application/json"
        }
    };

    const url = `${API_URL}${endpoint}${API_KEY}`;
    return fetch(url, config).then((response) => {
        return response.json();
    });
}

function get(endpoint: string) {
    return request(endpoint);
}

export default {
    get
};
