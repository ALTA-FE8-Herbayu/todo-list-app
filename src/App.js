import "./App.css";
import Homes from "./pages/Homespage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import axios from "axios";

function App() {
    axios.defaults.headers.common = {
        Authorization: "Bearer " + "28fa7ecf174234dbe37e218dee6f56da5aaffb86",
    };
    return (
        <div className="App">
            <Router>
                <Navbars />
                <Routes>
                    <Route exact path="/" element={<Homes />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
