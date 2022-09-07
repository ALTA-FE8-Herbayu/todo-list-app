import "./App.css";
import Homes from "./pages/Homespage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import Edit from "./components/Edit";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbars />
                <Routes>
                    <Route exact path="/" element={<Homes />} />
                    <Route path="/edit:id" element={<Edit />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
