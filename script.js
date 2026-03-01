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
        ],
        stepImages: [
            "image/spaghetti_carbonara.png",
            "image/spaghetti_carbonara.png",
            "image/spaghetti_carbonara.png",
            "image/spaghetti_carbonara.png",
            "image/spaghetti_carbonara.png",
            "image/spaghetti_carbonara.png",
            "image/spaghetti_carbonara.png"
        
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
        ],
        stepImages: [
            "image/chicken_stirfry.png",
            "image/chicken_stirfry.png",
            "image/chicken_stirfry.png",
            "image/chicken_stirfry.png",
            "image/chicken_stirfry.png",
            "image/chicken_stirfry.png",
            "image/chicken_stirfry.png"

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
        ],
        stepImages: [
            "image/choco_cookies.png",
            "image/choco_cookies.png",
            "image/choco_cookies.png",
            "image/choco_cookies.png",
            "image/choco_cookies.png",
            "image/choco_cookies.png",
            "image/choco_cookies.png",
            "image/choco_cookies.png",
            "image/choco_cookies.png"
        ]
    },

    {
        id: 3,
        title: "Beef Tacos",
        image: "image/beef_tacos.png",
        imageAlt: "Beef Tacos",
        description: "Quick weeknight tacos with seasoned ground beef.",
        ingredients: [
            "1 lb ground beef",
            "1 tbsp taco seasoning",
            "1/4 cup water",
            "8 taco shells or tortillas",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheese",
            "Sour cream (optional)"
        ],     
        steps: [
            "Brown ground beef in a skillet; drain excess grease.",
            "Add taco seasoning and water; simmer 2–3 minutes.",
            "Warm taco shells or tortillas.",
            "Assemble tacos with beef and toppings.",
            "Serve immediately."
        ],
        stepImages: [
            "image/beef_tacos.png",
            "image/beef_tacos.png",
            "image/beef_tacos.png",
            "image/beef_tacos.png",
            "image/beef_tacos.png"
        ]
    },

    {
        id: 4,
        title: "Fluffy Pancakes",
        image: "image/fluffy_pancake.png",
        imageAlt: "Fluffy Pancakes",
        description: "Soft, fluffy pancakes perfect for breakfast.",
        ingredients: [
            "1 1/2 cups all-purpose flour",
            "3 1/2 tsp baking powder",
            "1 tbsp sugar",
            "1/2 tsp salt",
            "1 1/4 cups milk",
            "1 egg",
            "3 tbsp melted butter",
            "1 tsp vanilla (optional)"
    ],
        steps: [
            "Whisk flour, baking powder, sugar, and salt in a bowl.",
            "Whisk milk, egg, melted butter (and vanilla) in another bowl.",
            "Combine wet into dry; mix just until combined (don’t overmix).",
            "Cook 1/4 cup batter on a lightly greased pan over medium heat.",
            "Flip when bubbles form; cook until golden.",
            "Serve with syrup or fruit."
    ],
        stepImages: [
            "image/fluffy_pancake.png",
            "image/fluffy_pancake.png",
            "image/fluffy_pancake.png",
            "image/fluffy_pancake.png",
            "image/fluffy_pancake.png",
            "image/fluffy_pancake.png"
    ]
    },

    {
        id: 5,
        title: "Caesar Salad",
        image: "image/caesar_salad.png",
        imageAlt: "Caesar Salad",
        description: "Crisp romaine with creamy Caesar dressing and croutons.",
        ingredients: [
            "2 heads romaine lettuce, chopped",
            "1/2 cup croutons",
            "1/4 cup grated Parmesan",
            "1/3 cup Caesar dressing",
            "Black pepper"
    ],
        steps: [
            "Wash and chop romaine; pat dry.",
            "Toss romaine with Caesar dressing.",
            "Top with croutons, Parmesan, and black pepper.",
            "Serve chilled."
    ],
        stepImages: [
            "image/caesar_salad.png",
            "image/caesar_salad.png",
            "image/caesar_salad.png",
            "image/caesar_salad.png"
    ]
    },

    {
        id: 6,
        title: "Vegetable Omelette",
        image: "image/vegetable_omelette.png",
        imageAlt: "Vegetable Omelette",
        description: "A quick and healthy breakfast packed with fresh vegetables.",
        ingredients: [
            "3 eggs",
            "1/4 cup bell peppers, diced",
            "1/4 cup onions, diced",
            "1/4 cup spinach",
            "2 tbsp milk",
            "Salt",
            "Black pepper",
            "1 tbsp butter"
    ],
        steps: [
            "Whisk eggs, milk, salt, and pepper in a bowl.",
            "Heat butter in a pan over medium heat.",
            "Sauté vegetables for 2-3 minutes.",
            "Pour egg mixture over vegetables.",
            "Cook until edges set, then fold in half.",
            "Cook another minute until done.",
            "Serve warm."
    ],
        stepImages: [
            "image/vegetable_omelette.png",
            "image/vegetable_omelette.png",
            "image/vegetable_omelette.png",
            "image/vegetable_omelette.png",
            "image/vegetable_omelette.png",
            "image/vegetable_omelette.png",
            "image/vegetable_omelette.png"
    ]
    },

    {
        id: 7,
        title: "Margherita Pizza",
        image: "image/margherita_pizza.png",
        imageAlt: "Margherita Pizza",
        description: "Classic Italian pizza topped with tomato sauce, mozzarella, and basil.",
        ingredients: [
            "1 pizza dough",
            "1/2 cup tomato sauce",
            "200g fresh mozzarella",
            "Fresh basil leaves",
            "1 tbsp olive oil",
            "Salt"
        ],
        steps: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough on a floured surface.",
            "Spread tomato sauce evenly over dough.",
            "Add sliced mozzarella.",
            "Bake for 10-12 minutes until crust is golden.",
            "Top with fresh basil and drizzle olive oil.",
            "Slice and serve."
        ],
        stepImages: [
            "image/margherita_pizza.png",
            "image/margherita_pizza.png",
            "image/margherita_pizza.png",
            "image/margherita_pizza.png",
            "image/margherita_pizza.png",
            "image/margherita_pizza.png",
            "image/margherita_pizza.png"
        ]
    },

    {
        id: 8,
        title: "Banana Smoothie",
        image: "image/banana_smoothie.png",
        imageAlt: "Banana Smoothie",
        description: "A creamy and refreshing smoothie perfect for breakfast or snacks.",
        ingredients: [
            "2 ripe bananas",
            "1 cup milk",
            "1/2 cup yogurt",
            "1 tbsp honey",
            "1/2 tsp vanilla extract",
            "Ice cubes (optional)"
        ],
        steps: [
            "Peel and slice bananas.",
            "Add bananas, milk, yogurt, honey, and vanilla to blender.",
            "Blend until smooth.",
            "Add ice cubes if desired and blend again.",
            "Pour into glasses.",
            "Serve chilled."
        ],
        stepImages: [
            "image/banana_smoothie.png",
            "image/banana_smoothie.png",
            "image/banana_smoothie.png",
            "image/banana_smoothie.png",
            "image/banana_smoothie.png",
            "image/banana_smoothie.png"
        ]
    },

    {
    id: 9,
    title: "Creamy Tomato Soup",
    image: "image/creamy_tomato_soup.png",
    imageAlt: "Creamy Tomato Soup",
    description: "A warm and comforting tomato soup with a creamy texture.",
    ingredients: [
        "2 tbsp olive oil",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "800g canned crushed tomatoes",
        "2 cups vegetable broth",
        "1/2 cup heavy cream",
        "Salt",
        "Black pepper"
    ],
    steps: [
        "Heat olive oil in a pot over medium heat.",
        "Sauté onion until soft.",
        "Add garlic and cook for 1 minute.",
        "Stir in crushed tomatoes and broth.",
        "Simmer for 15 minutes.",
        "Blend until smooth.",
        "Stir in cream, season, and serve warm."
    ],
    stepImages: [
        "image/creamy_tomato_soup.png",
        "image/creamy_tomato_soup.png",
        "image/creamy_tomato_soup.png",
        "image/creamy_tomato_soup.png",
        "image/creamy_tomato_soup.png",
        "image/creamy_tomato_soup.png",
        "image/creamy_tomato_soup.png"
    ]
    }
]

let currentPage = 'home';
let currentRecipe = null;
let currentStep = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    currentPage = pageId;

    if (pageId === 'recipes') {
        displayRecipes();
    } else if (pageId === 'favorites') {
        displayFavorites();
    }
}

function showRecipeDetail(recipeId) {
    currentRecipe = recipes.find(r => r.id === recipeId);
    const detailContent = document.getElementById('recipeDetailContent');

    detailContent.innerHTML = `
    <div class="recipe-template">
        <div class="recipe-top">
            <div class="recipe-titleblock">
                <h1>${currentRecipe.title}</h1>
                <div class="recipe-subtitle">${currentRecipe.description}</div>
            </div>
            <div class="recipe-meta">
            </div>
        </div>
        <img class="recipe-photo" src="${currentRecipe.image}" alt="${currentRecipe.title}">
        <div class="recipe-bottom">
            <div class="recipe-col ingredients">
                <h2>Ingredients</h2>
                <ul>
                    ${currentRecipe.ingredients.map(ing => `<li onclick="toggleIngredient(this)">${ing}</li>`).join('')}
                </ul>
            </div>
            <div class="recipe-col directions">
                <h2>Directions</h2>
                <ol>
                    ${currentRecipe.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        </div>
    </div>
    `;
    updateFavoriteButton();
    showPage('recipe-detail');
    const storyBtn = document.getElementById('storyBtn');
    storyBtn.classList.add('pulse-btn');
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

function displayFavorites() {
    const grid = document.getElementById('favoritesGrid');
    const noFavorites = document.getElementById('noFavorites');

    const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

    if (favoriteRecipes.length === 0) {
        grid.style.display = 'none';
        noFavorites.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        noFavorites.style.display = 'none';
        grid.innerHTML = favoriteRecipes.map(recipe => `
            <div class="recipe-card" onclick="showRecipeDetail(${recipe.id})">
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <span class="favorite-indicator">★</span>
            </div>
        `).join('');
    }
}

function startStoryMode() {
    const storyBtn = document.getElementById('storyBtn');
    storyBtn.classList.remove('pulse-btn');
    currentStep = 0;
    showStep();
    showPage('story-mode');
}

function showStep() {
    const storyContent = document.getElementById('storyContent');
    const totalSteps = currentRecipe.steps.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;
    const stepImage = currentRecipe.stepImages[currentStep];

    storyContent.innerHTML = `
        <h1>${currentRecipe.title} - Story Mode</h1>
        <div class="story-step active">
            <h2>Step ${currentStep + 1}</h2>
            ${stepImage ? `<img class="step-image" src="${stepImage}" alt="Step ${currentStep + 1}">` : ''}
            <p>${currentRecipe.steps[currentStep]}</p>
        </div>
    `;
        const stepElement = document.querySelector('.story-step');
        stepElement.classList.remove('slide');
        void stepElement.offsetWidth; 
        stepElement.classList.add('slide');

    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('prevStep').disabled = currentStep === 0;
    
    const nextBtn = document.getElementById('nextStep');
    if (currentStep === totalSteps - 1) {
        nextBtn.textContent = 'Finish';
        nextBtn.style.backgroundColor = '#27ae60';
        nextBtn.style.color = 'white';
        nextBtn.style.border = 'none';
        nextBtn.style.padding = '10px 16px';
        nextBtn.style.borderRadius = '8px';
    } else {
        nextBtn.textContent = 'Next';
        nextBtn.style.backgroundColor = '';
        nextBtn.style.color = '';
        nextBtn.style.border = '';
        nextBtn.style.padding = '';
        nextBtn.style.borderRadius = '';
    }
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

function toggleIngredient(element) {
    element.classList.toggle('checked');
}

function showFavoriteMessage(text) {
    const msg = document.getElementById('favoriteMessage');
    if (!msg) return;

    msg.textContent = text;
    msg.classList.remove('show');
    msg.classList.remove('shake');
    void msg.offsetWidth;
    msg.classList.add('show');
    msg.classList.add('shake');

    clearTimeout(window._favTimer);
    window._favTimer = setTimeout(() => {
        msg.classList.remove('show');
        msg.classList.remove('shake');
    }, 2000);
}

function toggleFavorite() {
    const index = favorites.indexOf(currentRecipe.id);

    if (index > -1) {
        favorites.splice(index, 1);
        showFavoriteMessage("Removed from favorites");
    } else {
        favorites.push(currentRecipe.id);
        showFavoriteMessage("Added to favorites");
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton();
    displayRecipes();
    if (currentPage === 'favorites') {
        displayFavorites();
    }
}

function updateFavoriteButton() {
    const btn = document.getElementById('favoriteBtn');
    const isFavorited = favorites.includes(currentRecipe.id);
    btn.textContent = isFavorited ? 'Remove from Favorites' : 'Add to Favorites';
    btn.classList.toggle('favorited', isFavorited);
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    this.reset();
});

document.addEventListener('DOMContentLoaded', function () {
    showPage('home');
});