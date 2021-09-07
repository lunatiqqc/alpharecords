import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";

import Hero from "./components/Hero";
import Labels from "./components/Labels";
import NewReleases from "./components/NewReleases";
import SendDemo from "./components/SendDemo";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Hero />
                    <Labels />
                    <NewReleases />
                    <SendDemo />
                </main>
                {/* <footer style={{ backgroundColor: "rgba(0,0,0,.67)" }}>
                    <article>
                        <h1>FOLLOW US HERE</h1>

                        <figure>
                            <img src="" alt="" />
                        </figure>
                        <figure>
                            <img src="" alt="" />
                        </figure>
                        <figure>
                            <img src="" alt="" />
                        </figure>
                        <figure>
                            <img src="" alt="" />
                        </figure>
                        <figure>
                            <img src="" alt="" />
                        </figure>
                    </article>
                </footer> */}
            </div>
        </Router>
    );
}

export default App;
