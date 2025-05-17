const api_key = "14fd413f5c32226016cc029b26e0b591";
const api_url = "https://api.themoviedb.org/3/movie/popular";
const container = document.querySelector(".content_wrapper");

async function getData() {
  try {
    const response = await fetch(`${api_url}?api_key=${api_key}`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

//const movies = getData().then((result) =>
//result.map((movie) => console.log(movie)),
//);

async function createElements() {}
