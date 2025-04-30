const loadPetsByCategory = async (categoryName = "") => {
  const loader = document.getElementById("loader");
  const container = document.getElementById("petCardsContainer");
  loader.classList.remove("hidden");
  container.innerHTML = "";

  let url = "https://openapi.programming-hero.com/api/peddy/pets";
  if (categoryName) {
    url = `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    const pets = data.pets || [];

    setTimeout(() => {
      loader.classList.add("hidden");

      if (pets.length === 0) {
        container.innerHTML = `
          <div class="col-span-3 text-center w-full">
            <img src="images/no-data.webp" alt="No pets found" class="mx-auto w-64" />
            <p class="text-lg font-semibold mt-4 text-white">No pets available in this category.</p>
          </div>
        `;
      } else {
        DisplayPets(pets);
      }
    }, 2000);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

// Show pets in card view
const DisplayPets = (pets) => {
  const container = document.getElementById("petCardsContainer");
  container.innerHTML = "";

  pets.forEach((pet) => {
    const card = document.createElement("div");
    card.className = "card bg-base-100 w-full shadow-sm";
    card.innerHTML = `
      <figure><img src="${pet.image}" alt="${pet.pet_name}" /></figure>
      <div class="card-body">
        <h2 class="card-title">${pet.pet_name}</h2>
        <p><i class="fa-brands fa-slack"></i> Breed: ${pet.breed}</p>
        <p><i class="fa-solid fa-calendar-days"></i> Birth: ${pet.date_of_birth}</p>
        <p><i class="fa-solid fa-venus-mars"></i> Gender: ${pet.gender}</p>
        <p><i class="fa-solid fa-dollar-sign"></i> Price: $${pet.price}</p>
        <div class="card-actions justify-around spech">
          <button class="btn like-btn"><i class="fa-solid fa-thumbs-up"></i></button>
          <button class="btn adopt-btn">Adopt</button>
          <button class="btn detail-btn">Details</button>
        </div>
      </div>
    `;

    // Like functionality
    card.querySelector(".like-btn").addEventListener("click", () => {
      const likeDiv = document.getElementById("likeImages");
      const img = document.createElement("img");
      img.src = pet.image;
      img.className = "w-24 h-24 rounded";
      likeDiv.appendChild(img);
    });

    // Adopt functionality
    card.querySelector(".adopt-btn").addEventListener("click", (e) => {
      e.target.disabled = true;
      e.target.textContent = "Processing...";
      setTimeout(() => {
        e.target.textContent = "Thank You!";
      }, 3000);
    });

    // Details functionality
    card.querySelector(".detail-btn").addEventListener("click", () => {
      const detail = document.getElementById("petDetails");
      detail.innerHTML = `
        <div class="card bg-base-100 my-10 shadow-sm">
          <figure><img src="${pet.image}" alt="${pet.pet_name}" /></figure>
          <div class="mx-auto w-4/12">
            <h2 class="card-title">Name: ${pet.pet_name}</h2>
            <div>
              <p><i class="fa-brands fa-slack"></i> Breed: ${pet.breed}</p>
              <p><i class="fa-solid fa-calendar-days"></i> Birth: ${
                pet.date_of_birth
              }</p>
              <p><i class="fa-solid fa-venus-mars"></i> Gender: ${
                pet.gender
              }</p>
              <p><i class="fa-solid fa-dollar-sign"></i> Price: $${
                pet.price
              }</p>
            </div>
            <h3 class="text-2xl mt-4">Details Information</h3>
            <div class="card-actions justify-center items-center">
              <p>${pet.description || "No description available."}</p>
              <button class="w-full btn btn-primary">Cancel</button>
            </div>
          </div>
        </div>
      `;
    });

    container.appendChild(card);
  });
};

// Button event listeners
function handleDogs(btn) {
  loadPetsByCategory("dog");
}
function handleCats(btn) {
  loadPetsByCategory("cat");
}
function handleRabbits(btn) {
  loadPetsByCategory("rabbit");
}
function handleBirds(btn) {
  loadPetsByCategory("bird");
}

// Initial load of all pets
loadPetsByCategory();
