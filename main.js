let dateObj = new Date();
let year = dateObj.getUTCFullYear();
const API_KEY = "45b7de0cff084ad9b861d1b86d67c765"; 

async function getNewGames() {
    try {
        const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=${year}-07-01,${year}-12-31&ordering=-added`);
        const resParsed = await res.json();
        showTopGame(resParsed);
        return resParsed;
    } catch (error) {
        throw new Error(error);
    };
};

const sectionCards = document.getElementById('gamesCards');

function showTopGame(response) {
    for (let i = 0; i < response.results.length; i++) {

        // Create cards
        const gameCard = document.createElement("div");
        gameCard.classList.add("gameCard");
        sectionCards.append(gameCard);

        // Image
        const gameImg = document.createElement("img");
        gameImg.classList.add("gameImg");
        gameImg.src = response.results[i].background_image;
        gameCard.append(gameImg);

        // Details section (to add data into)
        const titleMeta = document.createElement("div");
        titleMeta.classList.add("titleMeta");
        gameCard.append(titleMeta);

        // Title
        const title = document.createElement("h3");
        title.classList.add("title");
        titleMeta.append(title);
        title.textContent = response.results[i].name;

        // Release Date
        const gameDate = document.createElement("p");
        gameDate.classList.add("gameDate");
        gameDate.innerHTML = response.results[i].released;
        gameCard.append(gameDate);

        // Genres
        const gameGenres = document.createElement("p");
        gameGenres.classList.add("gameGenres");
        gameGenres.innerHTML = response.results[i].genres[0].name;
        gameCard.append(gameGenres);

        // Screenshots
        const screenTxt = document.createElement("p");
        screenTxt.classList.add("screenTxt");
        screenTxt.textContent = "Screenshots:";
        const zoneImg = document.createElement("div");
        zoneImg.classList.add("zoneImg");
        const gameScreenshots = document.createElement("img");
        gameScreenshots.classList.add("gameScreenshots");
        gameScreenshots.setAttribute("src", response.results[i].short_screenshots[1].image);
        gameCard.append(screenTxt);
        gameCard.append(zoneImg);
        zoneImg.append(gameScreenshots);
    }
}

document.addEventListener('DOMContentLoaded', () => {
        getNewGames();
});