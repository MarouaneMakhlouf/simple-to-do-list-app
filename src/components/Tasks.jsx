import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { rmTask } from "../store/slices/task";

const Tasks = () => {
  const tasks = useSelector((state) => state.task);

  return (
    <div className="overflow-y-auto p-5 bg-[#121212] add__container relative">
      <Link
        to={"/addTask"}
        className="hidden z-50 sm:block rounded-full bg-[#bb86fcaf] fixed right-10 bottom-10"
      >
        <FontAwesomeIcon className="p-5 text-2xl" icon={faPlus} />
      </Link>
      <Link
        to={"/addTask"}
        className="block px-6 my-4 text-center py-3 sm:hidden rounded-xl bg-[#bb86fcdc]"
      >
        Add Task
      </Link>
      <div className="max-w-screen flex flex-wrap justify-center gap-10">
        {/* eslint-disable-next-line react/jsx-key */}
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Card key={index} index={index} task={task} />
          ))
        ) : (
          <div className="text-2xl text-gray-300 my-5">You don't have tasks</div>
        )}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ task, index }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => setActive(true)}
      key={index}
      //  style=
      className={
        active
          ? "line-through text-gray-400 task__style"
          : "text-white task__style"
      }
    >
      <p
        // eslint-disable-next-line no-undef
        onClick={() => {
          dispatch(rmTask(index));
        }}
        className="task__del"
      >
        <FontAwesomeIcon icon={faTrash} />
      </p>
      {task}
    </div>
  );
};

export default Tasks;
