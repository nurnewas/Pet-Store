// All Pet fetch
const allPet = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await response.json();
  console.log(data.pets)
};

allPet();






/////// pets 
// pets
// : 
// Array(17)
// 0
// : 
// breed
// : 
// "Golden Retriever"
// category
// : 
// "Dog"
// date_of_birth
// : 
// "2023-01-15"
// gender
// : 
// "Male"
// image
// : 
// "https://i.ibb.co.com/p0w744T/pet-1.jpg"
// petId
// : 
// 1
// pet_details
// : 
// "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog."
// pet_name
// : 
// "Sunny"
// price
// : 
// 1200
// vaccinated_status
// : 
// "Fully"
// [[Prototype]]
// : 
// Object
// 1
// : 
// breed
// : 
// "Siamese"
// category
// : 
// "Cat"
// date_of_birth
// : 
// "2022-09-05"
// gender
// : 
// "Female"
// image
// : 
// "https://i.ibb.co.com/3Wzz41D/pet-2.jpg"
// petId
// : 
// 2
// pet_details
// : 
// "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion."
// pet_name
// : 
// "Mia"
// price
// : 
// 800
// vaccinated_status
// : 
// "Fully"
// [[Prototype]]
// : 
// Object