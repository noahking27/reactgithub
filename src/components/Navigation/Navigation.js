import React from "react";
import "./Navigation.css";

const Navigation = (props) => (
    <nav className="nav-style">
    <div>
        <h1 className="nav1">
            <a href="/">THE CLICK MASTER</a>
        </h1>
        <h6 className="nav1">Click Once, But Don't Click Twice!</h6>
    </div>
    <div>
        <h6 className="nav2">
            &emsp; 
            Score: {props.score} |
            Top Score: {props.highScore} 
            &emsp;
            </h6>
    </div>
    </nav>
);

export default Navigation;