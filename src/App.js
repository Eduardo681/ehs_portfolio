import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import {About, Projects} from "./views";
import {Header} from "./components";
import Footer from "./components/Footer";

const App = () => (
    <main>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path="/projetos" element={<Projects/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </main>
);

export default App;