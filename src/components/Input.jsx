"use client";

import React, { useState } from "react";

export const Input = ({ setInputValue, inputValue }) => {
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex justify-center h-[38px]  gap-1.5">
      <input
        placeholder="Add a new task..."
        onChange={handleChange}
        value={inputValue}
        className="rounded-md w-[280px] border-solid border-gray-400 px-3 py-2"
        type="text"
      />
    </div>
  );
};
