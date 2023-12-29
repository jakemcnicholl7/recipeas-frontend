import React from "react"
import logo from "../logo.svg"

const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h2 className="heading">Recipeas</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <button className="recipe-button">Suggest Random Recipe</button>
            </header>
        </div>
    )
}

export default Home;