
// Load pets by category
const loadPetsByCategory = async (category) => {
    const response = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${category}`
    );
    const data = await response.json();
    const pets = data.pets;
    console.log(pets);
  

    petCardsContainer.innerHTML = "";
  
    pets.forEach((pet) => {
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
            <button class="btn"><i class="fa-solid fa-thumbs-up"></i></button>
            <button class="btn">Adopt</button>
            <button class="btn">Details</button>
          </div>
        </div>
      `;
      petCardsContainer.appendChild(petCard);
    });
  };
  
  // Common button handler
  function handleCategory(clickedBtn, category) {
    console.log("clicked");
  
    // Button effect
    const allButtons = document.querySelectorAll(".clickedBtn");
    allButtons.forEach((btn) => {
      btn.classList.remove("bg-primary", "text-white");
      btn.classList.add("bg-transparent", "text-black");
    });
    clickedBtn.classList.add("bg-primary", "text-white");
    clickedBtn.classList.remove("bg-transparent", "text-black");
  
    // Load pets by category
    loadPetsByCategory(category);
  }
  
