import { BASE_URL } from './info.js'; // calling the BASE_URL from info.js

fetch(`${BASE_URL}/random.php`) // Could også use: fetch(BASE_URL + '/random.php')
.then(response => response.json()) // The resonse has the json method that returns it into json
.then(data => {
    data = data.meals[0]; // so we dont need to write so much code
    console.log(data);

    // This is the official way -> but is more slow
    const article = document.createElement('article');
    const header = document.createElement('header');
    const h3 = document.createElement('h3');
    h3.innerText = data.strMeal;
    header.append(h3);
    article.append(header);
    
    const img = document.createElement('img');
    img.setAttribute('src', data.strMealThumb);
    article.append(img);

    const areaPill = document.createElement('p');
    areaPill.innerText = data.strArea;
    areaPill.classList.add('recipe-attribute', 'recipe-area');
    article.append(areaPill);
   
    const categoryPill = document.createElement('p');
    categoryPill.innerText = data.strArea;
    categoryPill.classList.add('recipe-attribute', 'recipe-category');
    article.append(categoryPill);

    // article.innerHTML = `
    //     <header>
    //         <h3>${data.strMeal}</h3>
    //     </header>
    //     <img src="${data.strMealThumb}">
    //     <p class="recipe-attribute recipe-area">${data.strArea}</p>
    //     <p class="recipe-attribute recipe-category">${data.strCategory}</p>
    // `;

    document.querySelector('#recipes-list').append(article);
})
.catch(error => console.log(error));