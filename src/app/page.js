"use client";
import { Input } from "@/components/Input";
import { Tab } from "@/components/Tab";
import { Task } from "@/components/Task";
import { TaskCount } from "@/components/TaskCount";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("All");

  const filterButtons = ["All", "Active", "Completed"];

  const handleClick = () => {
    if (inputValue === "" && inputValue.length === 0) {
      alert("write a task name");
      return;
    }
    setTasks([
      { taskName: inputValue, isCompleted: false, id: Date.now() },
      ...tasks,
    ]);
    setInputValue("");
  };

  const handleCheck = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const handleFilter = (btnName) => {
    setFilterValue(btnName);
  };
  const filteredTasks = tasks.filter((task) => {
    if (filterValue === "Active") return !task.isCompleted;
    if (filterValue === "Completed") return task.isCompleted;
    return true;
  });

  const handleDelete = (taskId) => {
    if (window.confirm("Are you sure?") === true) {
      const updatedTasks = tasks.filter((task) => taskId != task.id);
      setTasks(updatedTasks);
    } else {
      return;
    }
  };

  const deleteAllDone = () => {
    if (window.confirm("Are you sure to delete all donw tasks?")) {
      const updatedTasks = tasks.filter((task) => task.isCompleted === false);
      setTasks(updatedTasks);
    } else {
      return;
    }
  };
  return (
    <div className="flex justify-center items-center bg-[#F3F4F6] h-dvh font-sans">
      <div className="bg-white w-96 py-6 px-4 flex flex-col gap-10 shadow-lg">
        <div className="flex flex-col gap-8">
          <div className="container2 flex flex-col gap-5">
            <h1 className="text-black text-xl font-semibold flex justify-center">
              To-Do list
            </h1>
            <div className="flex w-full gap-1.5">
              <Input setInputValue={setInputValue} inputValue={inputValue} />
              <button
                onClick={handleClick}
                className="w-[59px] h-[40px] bg-[#3C82F6] rounded-md flex items-center justify-center text-[#F9F9F9] text-sm cursor-pointer"
              >
                Add
              </button>
            </div>
            <div className="flex w-full gap-1.5">
              {filterButtons.map((btn, index) => {
                return (
                  <Tab
                    isActive={btn === filterValue}
                    tabName={btn}
                    key={index}
                    handleFilter={() => handleFilter(btn)}
                  />
                );
              })}
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-5">
                {filteredTasks.length === 0 ? (
                  <div className="flex flex-col items-center justify-center pt-3">
                    <p className="text-gray-400 text-sm">
                      No tasks yet. Add one above!
                    </p>
                  </div>
                ) : (
                  filteredTasks.map((task) => (
                    <Task
                      key={task.id}
                      isCompleted={task.isCompleted}
                      taskName={task.taskName}
                      handleCheck={() => handleCheck(task.id)}
                      handleDelete={() => handleDelete(task.id)}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        {tasks.length > 0 && (
          <TaskCount
            deleteAllDone={deleteAllDone}
            completedCount={
              tasks.filter((task) => task.isCompleted === true).length
            }
            allCount={tasks.length}
          />
        )}

        <div className="flex justify-center items-center font-sans text-xs gap-1">
          <p className="text-[#6B7280]">Powered by</p>
          <p className="text-[#3B73ED]">Pinecone academy</p>
        </div>
      </div>
    </div>
  );
}
