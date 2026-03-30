import React from "react";

export const Tab = ({ tabName, isActive, handleFilter }) => {
  return (
    <button
      onClick={handleFilter}
      className="h-8 text-white flex items-center justify-center rounded-md w-fit px-3 py-1 text-xs"
      style={{
        backgroundColor: isActive ? "#3C82F6" : "#F3F4F6",
        color: isActive ? "white" : "#363636",
      }}
    >
      {tabName}
    </button>
  );
};
