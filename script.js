const recipes = [
    {
        id: 0,
        title: "Classic Spaghetti Carbonara",
        image: "image/spaghetti_carbonara.png",
        imageAlt: "Spaghetti Carbonara",
        description: "A traditional Italian pasta dish that's quick and delicious.",
        ingredients: [
            "200g spaghetti",
            "100g pancetta or bacon",
            "2 large eggs",
            "50g grated Parmesan cheese",
            "Black pepper",
            "Salt"
        ],
        steps: [
            "Cook spaghetti in salted boiling water until al dente.",
            "Fry pancetta in a pan until crispy.",
            "Whisk eggs and Parmesan in a bowl.",
            "Drain pasta, reserving some water.",
            "Mix pasta with pancetta, then add egg mixture off heat.",
            "Add reserved pasta water if needed for creaminess.",
            "Season with black pepper and serve immediately."
        ]
    },
    {
        id: 1,
        title: "Chicken Stir-Fry",
        image: "image/chicken_stirfry.png",
        imageAlt: "Chicken Stir-Fry",
        description: "A quick and healthy Asian-inspired dish.",
        ingredients: [
            "400g chicken breast, sliced",
            "2 cups mixed vegetables (broccoli, bell peppers, carrots)",
            "2 tbsp soy sauce",
            "1 tbsp oyster sauce",
            "2 cloves garlic, minced",
            "1 tbsp vegetable oil",
            "Salt and pepper"
        ],
        steps: [
            "Heat oil in a wok or large pan over high heat.",
            "Add chicken and stir-fry until cooked through.",
            "Add garlic and vegetables, stir-fry for 3-4 minutes.",
            "Add soy sauce and oyster sauce, mix well.",
            "Cook for another 2 minutes until vegetables are tender-crisp.",
            "Season with salt and pepper to taste.",
            "Serve hot with rice."
        ]
    },
    {
        id: 2,
        title: "Chocolate Chip Cookies",
        image: "image/choco_cookies.png",
        imageAlt: "Chocolate Chip Cookies",
        description: "Classic homemade cookies that are soft and chewy.",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        steps: [
            "Preheat oven to 375°F (190°C).",
            "Mix flour, baking soda, and salt in a bowl.",
            "Cream butter and sugars until light and fluffy.",
            "Beat in eggs and vanilla.",
            "Gradually add dry ingredients to wet mixture.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons onto ungreased baking sheets.",
            "Bake for 9-11 minutes until golden brown.",
            "Cool on baking sheet for 2 minutes, then transfer to wire rack."
        ]
    }
];

// Current state
let currentPage = 'home';
let currentRecipe = null;
let currentStep = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Navigation
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    currentPage = pageId;

    if (pageId === 'recipes') {
        displayRecipes();
    }
}

function showRecipeDetail(recipeId) {
    currentRecipe = recipes.find(r => r.id === recipeId);
    const detailContent = document.getElementById('recipeDetailContent');
    detailContent.innerHTML = `
        <div class="recipe-banner">
            <img src="${currentRecipe.image}" alt="${currentRecipe.title}">
        </div>
        <h1>${currentRecipe.title}</h1>
        <p>${currentRecipe.description}</p>
        <div class="ingredients-list">
            <h2>Ingredients</h2>
            <ul>
                ${currentRecipe.ingredients.map(ing => `<li onclick="toggleIngredient(this)">${ing}</li>`).join('')}
            </ul>
        </div>
        <div class="instructions-list">
            <h2>Instructions</h2>
            <ol>
                ${currentRecipe.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
    `;
    updateFavoriteButton();
    showPage('recipe-detail');
}

function displayRecipes() {
    const grid = document.getElementById('recipeGrid');
    grid.innerHTML = recipes.map(recipe => `
        <div class="recipe-card" onclick="showRecipeDetail(${recipe.id})">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            ${favorites.includes(recipe.id) ? '<span class="favorite-indicator">★</span>' : ''}
        </div>
    `).join('');
}

// Story Mode
function startStoryMode() {
    currentStep = 0;
    showStep();
    showPage('story-mode');
}

function showStep() {
    const storyContent = document.getElementById('storyContent');
    const totalSteps = currentRecipe.steps.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;

    storyContent.innerHTML = `
        <h1>${currentRecipe.title} - Story Mode</h1>
        <div class="story-step active">
            <h2>Step ${currentStep + 1}</h2>
            <p>${currentRecipe.steps[currentStep]}</p>
        </div>
    `;

    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('prevStep').disabled = currentStep === 0;
    document.getElementById('nextStep').textContent = currentStep === totalSteps - 1 ? 'Finish' : 'Next';
}

function nextStep() {
    if (currentStep < currentRecipe.steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        showPage('recipe-detail');
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
}

// Ingredients interaction
function toggleIngredient(element) {
    element.classList.toggle('checked');
}

// Favorites
function toggleFavorite() {
    const index = favorites.indexOf(currentRecipe.id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(currentRecipe.id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton();
    displayRecipes(); // Update the recipes list to show favorite indicators
}

function updateFavoriteButton() {
    const btn = document.getElementById('favoriteBtn');
    const isFavorited = favorites.includes(currentRecipe.id);
    btn.textContent = isFavorited ? 'Remove from Favorites' : 'Add to Favorites';
    btn.classList.toggle('favorited', isFavorited);
}

// Contact form
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});