const api_key = "14fd413f5c32226016cc029b26e0b591";
const api_url = "https://api.themoviedb.org/3/movie/popular";
const container = document.querySelector(".content_wrapper");

async function getData() {
  try {
    const response = await fetch(`${api_url}?api_key=${api_key}`);
    const { results } = await response.json();
    console.log(results);
    return results;
  } catch (err) {
    console.log(`Error is ${err}`);
  }
}

async function createCard() {
  const movies = await getData();
  for (let i = 0; i < movies.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.classList.add("img", "poster");
    image.src = `https://image.tmdb.org/t/p/w300${movies[i].poster_path}`;

    const name = document.createElement("h2");
    name.textContent = movies[i].title;

    const releaseDate = document.createElement("span");
    releaseDate.classList.add("release_date");
    releaseDate.textContent = movies[i].release_date;

    const rating = document.createElement("span");

    const star = document.createElement("img");

    card.append(image, name, releaseDate, rating, star);
    container.append(card);
  }
}
createCard();
