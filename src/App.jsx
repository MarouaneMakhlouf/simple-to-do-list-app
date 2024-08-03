import { BrowserRouter as Router ,Routes ,Route  } from "react-router-dom";
import Tasks from "./components/Tasks.jsx";
import AddTask from "./components/AddTask.jsx";


function App() {
  
  return (
    <>
    <Router >
    <div className="w-screen h-20 overflow-auto bg-[#121212] backdrop:filter flex flex-col items-center">
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl w-fit p-5 text-[#bb86fc]" >Simple To Do List App With Redux</h2>
    
    </div>
    <Routes>
      <Route path="/" element={<Tasks/>}/>
      <Route path="/addTask" element={<AddTask/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;


