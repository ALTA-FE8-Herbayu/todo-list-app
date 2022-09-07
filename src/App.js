import "./App.css";
import Homes from "./pages/Homespage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import Detailtodo from "./pages/Detailtodo";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbars />
                <Routes>
                    <Route exact path="/" element={<Homes />} />
                    <Route path="/detail/:id" element={<Detailtodo />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
