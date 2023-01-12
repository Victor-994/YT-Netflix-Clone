const keys = '81365b0c1d59df88fb3d42006701df98'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${keys}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${keys}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${keys}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${keys}&language=en-US&query=horror&page=1&include_adult=false`,
    requestAction: `https://api.themoviedb.org/3/search/movie?api_key=${keys}&language=en-US&query=action&page=1&include_adult=false`,
    requestRomance: `https://api.themoviedb.org/3/search/movie?api_key=${keys}&language=en-US&query=romance&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${keys}&language=en-US&page=1`
}

export default requests;