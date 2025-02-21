import './App.css'
import {BrowserRouter} from "react-router-dom"

import AppRouter from "./assets/сomponents/AppRouter.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </>
    )
}

export default App
