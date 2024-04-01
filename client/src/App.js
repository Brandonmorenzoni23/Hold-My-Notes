import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Auth  from "./pages/auth";
import Home  from "./pages/home";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;