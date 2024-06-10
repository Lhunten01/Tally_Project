import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./app.css"
import AllRoutes from "./AllRoutes";
function App()
{
    return(
        <div className="main">
            <Router>
                <AllRoutes/>
            </Router>
        </div>
    )
}
export default App;
