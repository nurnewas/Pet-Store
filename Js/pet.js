const loadData = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await response.json();
  const pets = data.pets;

  // loader
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
    DisplayPets(pets);
  }, 2000);
};

// loader
document.getElementById("loader").classList.remove("hidden");
// loader
//Display all pets
const DisplayPets = (pets) => {
  const petCardsContainer = document.getElementById("petCardsContainer");
  pets.forEach((pet) => {
    console.log(pet);
    const petCard = document.createElement("div");
    petCard.className = "card bg-base-100 w-full shadow-sm";
    petCard.innerHTML = `
                  <figure>
                <img src="${pet.image}" alt="${pet.pet_name}" />
              </figure>
              <div class="card-body">
               <h2 class="card-title">${pet.pet_name}</h2>
                <p><i class="fa-brands fa-slack"></i> Breed: ${pet.breed}</p>
          <p><i class="fa-solid fa-calendar-days"></i> Birth: ${pet.date_of_birth}</p>
          <p><i class="fa-solid fa-venus-mars"></i> Gender: ${pet.gender}</p>
          <p><i class="fa-solid fa-dollar-sign"></i> Price: $${pet.price}</p>
          <div class="card-actions justify-around spech">
                  <button id="" class="btn">
                    <i class="fa-solid fa-thumbs-up"></i>
                  </button>
                  <button id="" class="btn">Adopt</button>
                  <button id="" class="btn">Details</button>
                </div>
              </div>
    
    `;
    petCardsContainer.append(petCard);
  });
};

loadData();
