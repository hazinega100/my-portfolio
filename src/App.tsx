import React from "react";
import "./styles/main.css";
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Hire} from "./components/Hire/Hire";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Main />
                <Skills />
                <Projects />
                <Hire/>
                <Contacts/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
