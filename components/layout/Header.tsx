import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">🏠 MyListing</div>

      <nav className="space-x-4 hidden md:flex">
        <button className="hover:text-blue-500">Rooms</button>
        <button className="hover:text-blue-500">Mansions</button>
        <button className="hover:text-blue-500">Countryside</button>
      </nav>

      <div className="space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Sign In</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
