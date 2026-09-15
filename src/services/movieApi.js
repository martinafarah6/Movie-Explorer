const API_URL = "https://api.themoviedb.org/3/discover/movie";

const options = {
    method: "GET",
    headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
    },
};
const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western"
};

export const getMovies = async () => {
    const response = await fetch(API_URL, options);

    if (!response.ok) {
        throw new Error("Failed to load movies");
    }

    const data = await response.json();
    return data;
};

export const getGenreNames = (genreIds) => {
    return genreIds.map((id) => genreMap[id]);
};

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

export async function searchMovies(query) {
    const response = await fetch(
        `${SEARCH_URL}?query=${encodeURIComponent(query)}`,
        options
    );

    if (!response.ok) {
        throw new Error("Failed to search movies");
    }

    return response.json();
}
