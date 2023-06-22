import { Route, Routes } from "react-router-dom";
import Branches from "./pages/Branches";
import Home from "./pages/Home";
import PageBuild from "./pages/PageBuild";
import Payments from "./pages/Payments";

function App() {
  return (
    <Routes>
      <Route path='/under-construction' element={<PageBuild />} />
      <Route path='/' element={<Home />} />
      <Route path='/branches' element={<Branches />} />
      <Route path='/payments' element={<Payments />} />
    </Routes>
  );
}

export default App;
