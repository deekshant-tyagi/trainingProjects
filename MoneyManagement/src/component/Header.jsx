import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-green-400 to-blue-500 shadow-lg p-4 flex justify-between items-center text-white">
      <h2 className="text-xl font-semibold">Money Management</h2>
      <div className="text-sm">Test-Account | test@gmail.com</div>
    </header>
  );
};

export default Header;
