const baseURL = "https://openapi.programming-hero.com/api/peddy/category/";

const loadPetsByCategory = async (category) => {
  document.getElementById("loader").classList.remove("hidden");
  const response = await fetch(`${baseURL}${category.toLowerCase()}`);
  const data = await response.json();
  const pets = data.data;

  document.getElementById("loader").classList.add("hidden");
  document.getElementById("petCardsContainer").innerHTML = "";
  DisplayPets(pets);
};

const DisplayPets = (pets) => {
  const petCardsContainer = document.getElementById("petCardsContainer");
  petCardsContainer.innerHTML = "";
  pets.forEach((pet) => {
    const petCard = document.createElement("div");
    petCard.className = "card bg-base-100 w-full shadow-sm cursor-pointer";
    petCard.innerHTML = `
      <figure><img src="${pet.image}" alt="${pet.pet_name}" /></figure>
      <div class="card-body">
        <h2 class="card-title">${pet.pet_name}</h2>
        <p>Breed: ${pet.breed}</p>
        <p>Birth: ${pet.date_of_birth}</p>
        <p>Gender: ${pet.gender}</p>
        <p>Price: $${pet.price}</p>
        <div class="card-actions justify-around">
          <button class="btn likeBtn">❤️</button>
          <button class="btn detailBtn">Details</button>
        </div>
      </div>
    `;

    // Like Button
    petCard.querySelector(".likeBtn").addEventListener("click", () => {
      const likedContainer = document.getElementById("likedPetsContainer");
      const likedImg = document.createElement("img");
      likedImg.src = pet.image;
      likedImg.alt = pet.pet_name;
      likedImg.className = "w-full h-20 object-cover rounded";
      likedContainer.appendChild(likedImg);
    });

    // Details Button
    petCard.querySelector(".detailBtn").addEventListener("click", () => {
      showPetDetails(pet);
    });

    petCardsContainer.appendChild(petCard);
  });
};

const showPetDetails = (pet) => {
  const detailContainer = document.getElementById("petDetailsContainer");
  detailContainer.classList.remove("hidden");
  detailContainer.innerHTML = `
    <div class="card bg-base-100 shadow-sm">
      <figure><img src="${pet.image}" alt="${pet.pet_name}" /></figure>
      <div class="card-body">
        <h2 class="card-title">Name: ${pet.pet_name}</h2>
        <p>Breed: ${pet.breed}</p>
        <p>Birth: ${pet.date_of_birth}</p>
        <p>Gender: ${pet.gender}</p>
        <p>Price: $${pet.price}</p>
        <h3 class="text-2xl">Details Information</h3>
        <p>${pet.short_description || "No extra details available."}</p>
        <button class="btn btn-primary w-full mt-4" onclick="document.getElementById('petDetailsContainer').classList.add('hidden')">Cancel</button>
      </div>
    </div>
  `;
};

// Button handlers
document.getElementById("dogsBTN").addEventListener("click", () => loadPetsByCategory("dog"));
document.getElementById("catsBtn").addEventListener("click", () => loadPetsByCategory("cat"));
document.getElementById("rabbitsBtn").addEventListener("click", () => loadPetsByCategory("rabbit"));
document.getElementById("birdsBtn").addEventListener("click", () => loadPetsByCategory("bird"));

// Default load
loadPetsByCategory("dog");
