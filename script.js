const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("results");
const clearBtn = document.getElementById("clearBtn");

const travelRecommendations = [
    {
        country: "Canada",
        city: "Banff",
        title: "Rocky Mountain Escape in Banff",
        description:
            "Discover turquoise alpine lakes, scenic hiking trails, and wildlife-rich national parks. Banff is ideal for travelers who want outdoor adventure, mountain views, and cozy town charm in every season.",
        image: "images/banff-canada.jpg"
    },
    {
        country: "Japan",
        city: "Kyoto",
        title: "Cultural Journey Through Kyoto",
        description:
            "Explore historic temples, bamboo groves, and traditional tea houses in Japan's cultural heart. Kyoto offers a perfect mix of peaceful gardens, seasonal beauty, and authentic Japanese cuisine.",
        image: "images/kyoto-japan.jpg"
    },
    {
        country: "France",
        city: "Paris",
        title: "Classic Paris City Experience",
        description:
            "Enjoy iconic landmarks, world-class museums, and romantic riverside walks. Paris is perfect for art lovers, food enthusiasts, and travelers seeking elegant architecture and vibrant neighborhood culture.",
        image: "images/paris-france.jpg"
    },
    {
        country: "Brazil",
        city: "Rio de Janeiro",
        title: "Sun, Rhythm, and Views in Rio",
        description:
            "Experience golden beaches, lively samba culture, and panoramic viewpoints from Sugarloaf and Corcovado. Rio combines natural beauty, energetic nightlife, and unforgettable local hospitality.",
        image: "images/rio-brazil.jpg"
    },
    {
        country: "Egypt",
        city: "Cairo",
        title: "Ancient Wonders of Cairo",
        description:
            "Step into history with visits to the Pyramids of Giza, the Sphinx, and renowned museums. Cairo is a destination for travelers interested in archaeology, bustling bazaars, and rich Middle Eastern heritage.",
        image: "images/cairo-egypt.jpg"
    },
    {
        country: "Italy",
        city: "Rome",
        title: "Historic and Culinary Rome",
        description:
            "Walk through centuries of history at the Colosseum and Roman Forum, then enjoy authentic pasta and espresso in local piazzas. Rome offers a timeless blend of heritage, cuisine, and street life.",
        image: "images/rome-italy.jpg"
    }
];

function displayRecommendations(results) {
    if (!resultsContainer) {
        return;
    }

    resultsContainer.innerHTML = "";

    const cardsMarkup = results
        .map(
            (item) => `
            <article class="recommendation-card">
                <img src="${item.image}" alt="${item.city}, ${item.country}" loading="lazy" />
                <h3>${item.title}</h3>
                <p><strong>${item.city}, ${item.country}</strong></p>
                <p>${item.description}</p>
            </article>
        `
        )
        .join("");

    resultsContainer.innerHTML = cardsMarkup;
}

function clearDisplayedResults() {
    if (!resultsContainer) {
        return;
    }

    resultsContainer.innerHTML = "";
}

function showResults() {
    if (!searchInput || !resultsContainer) {
        return;
    }

    const inputValue = searchInput.value.trim();
    const keyword = inputValue.toLowerCase();

    if (!keyword) {
        resultsContainer.innerHTML = "<p>Please enter a country or city to get recommendations.</p>";
        return;
    }

    const matches = travelRecommendations.filter(
        (item) =>
            item.country.toLowerCase().includes(keyword) ||
            item.city.toLowerCase().includes(keyword)
    );

    if (matches.length > 0) {
        displayRecommendations(matches);
    } else {
        resultsContainer.innerHTML = `<p>No recommendations found for "${inputValue}". Try searching for Canada, Kyoto, Paris, Cairo, or Rome.</p>`;
    }
}

if (searchBtn) {
    searchBtn.addEventListener("click", showResults);
}

if (searchInput) {
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            showResults();
        }
    });
}

if (clearBtn && searchInput && resultsContainer) {
    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearDisplayedResults();
        searchInput.focus();
    });
}

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thank you for contacting us!");
    event.target.reset();
});
