// import { useSelector } from "react-re

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../store/slices/task";

const AddTask = () => {
  // const state = useSelector(state => state.task)
  const despatch = useDispatch();
  const [task , setTask] = useState('')

  return (
    <div className="w-screen add__container overflow-auto p-5 bg-[#121212] flex flex-col items-center pt-16 sm:pt-24 gap-5">
    <Link to={'/'} className="w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] flex justify-end">
    <FontAwesomeIcon icon={faX} className="border-[#bb86fc] w-6 h-6 p-2 text-[#bb86fc] border-2 rounded-full"/>
    </Link>
      <div className="input__container">
        <div className="shadow__input"></div>
        <textarea
          value={task}
          onChange={(e)=> {setTask(e.target.value)}}
          type="text"
          name="taskInput"
          className="input__search min-h-16 max-h-44 text-[#fff]"
          placeholder="Enter your task"
        />
        <Link 
        to={'/'}
         // eslint-disable-next-line no-undef
         onClick={()=>{return task ? despatch(addTask(task)) : ''}}
         className="input__button__shadow">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
    </div>
  );
};

export default AddTask;
