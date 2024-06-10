import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css"
import Navbar from "./Navbar";
import AllRoutes from "./AllRoutes";
function App()
{
    return(
        <div className="main">
            <Router>
                <Navbar/>
                <AllRoutes/>
            </Router>
        </div>
    )
}
export default App;
