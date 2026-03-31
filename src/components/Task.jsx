import React from "react";

export const Task = ({ isCompleted, taskName, handleCheck, handleDelete }) => {
  return (
    <div className="flex w-full justify-between bg-[#F9FAFB] p-4 gap-2 rounded-md">
      <div className="flex items-center gap-2.5">
        <input
          type="checkbox"
          checked={isCompleted}
          className="size-4 cursor-pointer accent-[#0275FF]"
          onChange={handleCheck}
        />

        <p
          className="text-sm text-black first-letter:uppercase"
          style={{ textDecoration: isCompleted ? "line-through" : "" }}
        >
          {taskName}
        </p>
      </div>
      <p
        onClick={handleDelete}
        className="w-[67px] h-8 bg-[#FEF2F2] text-[#EF4444] rounded-md text-sm  flex items-center justify-center cursor-pointer"
      >
        Delete
      </p>
    </div>
  );
};
