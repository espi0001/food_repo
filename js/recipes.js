import { BASE_URL } from './info.js'; // calling the BASE_URL from info.js

const MAX_RECIPIES = 8;

// we create a fragment
const fragment = document.createDocumentFragment();

// we start a loop
for (let index = 0; index < MAX_RECIPIES; index++) {
    
    // we fetch and we have to await fetch because there would be to many request 
    await fetch(`${BASE_URL}/random.php`) // Could også use: fetch(BASE_URL + '/random.php')
    .then(response => response.json()) // The response has the json method that returns it into json
    .then(data => {
        data = data.meals[0]; // so we dont need to write so much code
        console.log(data);

        const mealCard = document.querySelector('#recipe-card').content.cloneNode(true);

        mealCard.querySelector('h3').innerText = data.strMeal;

        const thumbnail = mealCard.querySelector('img');
        thumbnail.setAttribute('src', data.strMealThumb);
        thumbnail.setAttribute('alt', data.strMeal);

        mealCard.querySelector('.recipe-area').innerText = data.strArea;
        mealCard.querySelector('.recipe-category').innerText = data.strCategory;

        // we need to have the fragment so we donøt append 8 times 
        fragment.append(mealCard);

    })
    .catch(error => console.log(error));
}
document.querySelector('#recipes-list').append(fragment);