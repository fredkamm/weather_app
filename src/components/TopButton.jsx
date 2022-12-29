import React from "react";

function TopButton({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "New York",
    },
    {
      id: 2,
      title: "Philadelphia",
    },
    {
      id: 3,
      title: "Los Angeles",
    },
    {
      id: 4,
      title: "Dallas",
    },
    {
      id: 5,
      title: "Chicago",
    },
  ];

  return (
    <div className= "hidden sm:flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
