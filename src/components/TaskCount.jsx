import React from "react";

export const TaskCount = ({ completedCount, allCount, deleteAllDone }) => {
  return (
    <div className="flex justify-between border-t-2 border-[#E4E4E7] pt-4">
      <p>
        {completedCount} of {allCount} tasks completed
      </p>
      <p
        onClick={deleteAllDone}
        className=" h-8  text-[#EF4444] rounded-md px-2 text-sm  flex items-center justify-center cursor-pointer"
      >
        Clear completed
      </p>
    </div>
  );
};
