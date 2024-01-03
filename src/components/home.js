import React from "react"
import logo from "../logo.svg"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h2 className="heading">Recipeas</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/recipe">
                    <button className="recipe-button">Suggest Random Recipe</button>
                </Link>
            </header>
        </div>
    )
}

export default Home;