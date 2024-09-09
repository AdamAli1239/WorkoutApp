import NavBar from "./components/NavBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateWorkout from "./pages/CreateWorkout";
import Home from "./pages/Home";
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createworkout" element={<CreateWorkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
