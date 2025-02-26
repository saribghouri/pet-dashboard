"use client";

import { Divider } from "antd";

const Cards = () => {
  const pets = [
    {
      id: 1,
      name: "Buddy",
      type: "Dog",
      age: "3 years",
      tip: "Regular vet check-ups keep your dog healthy!",
      discount: "10% off on vaccinations",
      costSaving: "Buy food in bulk to save money!",
      image: "/assets/images/guide-dogs-puppy-in-the-park.jpg",
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Cat",
      age: "2 years",
      tip: "Cats love scratching posts—get one to save your furniture!",
      discount: "15% off on cat grooming services",
      costSaving: "DIY cat toys can be fun and cheap!",
      image: "/assets/images/MOmeow1.avif",
    },
    {
      id: 3,
      name: "Nibbles",
      type: "Rabbit",
      age: "1 year",
      tip: "Rabbits need plenty of hay for digestion!",
      discount: "20% off on rabbit hutches",
      costSaving: "Grow fresh veggies at home for your bunny!",
      image: "/assets/images/360_F_312071811_3anwvhBNrnMUWrcAsJwE3dOaiqWyZDiS.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
<div className="flex justify-between  pl-[10px] pr-[10px] ml-[16px] mr-[16px] items-center mt-[20px] mb-[40px]">
            <h1 className="Doctors text-[22px] text-[#054fb9] font-sans">
            Pet care tips
            </h1>
           
          </div>
          <Divider className="!w-[97%] text-[#054fb9]  flex justify-center mx-auto bg-[#054fb9] min-w-0" />
    <div className="flex flex-wrap gap-8 justify-center mt-4">
      {pets.map((pet) => (
        <div key={pet.id} className="w-[400px] rounded-lg shadow-lg p-4 bg-white">
          <img src={pet.image} alt={pet.name} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-2">{pet.name}</h2>
          <p className="text-gray-600">Type: {pet.type}</p>
          <p className="text-gray-600">Age: {pet.age}</p>
          <p className="text-green-600 font-medium">Tip: {pet.tip}</p>
          <p className="text-blue-600 font-medium">Discount: {pet.discount}</p>
          <p className="text-orange-600 font-medium">Cost-saving: {pet.costSaving}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
