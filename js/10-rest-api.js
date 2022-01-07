// Using Pixabay
import ApiFetch from './modules/fetch-pics.js';
const apiFetch = new ApiFetch;

const ref = {
    submitBtn: document.querySelector(".inputForm"),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    image: document.querySelector(".pics-list"),
}

ref.submitBtn.addEventListener('submit', onSubmit);
ref.loadMoreBtn.addEventListener('click', onLoadMore)
let page = 1;
let qtty = 1;

function onSubmit(evt) {
    evt.preventDefault();
    
    qtty = evt.currentTarget.elements.query.value;
    page = 1;
    ref.image.innerHTML = "";

    apiFetch.doFetch(page)
        .then(x => placePics(x, qtty)).catch("error");
}

function onLoadMore() {
    page += 1;
    apiFetch.doFetch(page)
    .then(x => placePics(x, qtty)).catch("error");
 }

function placePics(x, n) {
    for (let i = 1; i <= n; i += 1) {
            renderPicture(x.hits[i].previewURL);
        }
 }

function renderPicture(url) {
    ref.image.insertAdjacentHTML ('afterbegin', `<li><img src=${url} /></li>`);
}
// function pokemonFetch(n) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${n}`).then(resp => resp.json());
// }

// function renderPokemon(data) {
//     const markup = pokemonCardTpl(data)
//     console.log(data.name);
// }

// function errorMess(err) {
//     console.log("error");
// }

// pokemonFetch(2).then(renderPokemon).catch(errorMess);



