
import Home from "./Components/Home"
import About from "./Components/AboutUs"
import Testimonies from "./Components/Testimonies"
import Programs from "./Components/Programs"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/tests" element={<Testimonies/>}/>
          <Route path="/programs" element={<Programs/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
