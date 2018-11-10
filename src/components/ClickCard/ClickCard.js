import React from "react";
import "./ClickCard.css";
import "../../pic.json";

const ClickCard = (props) => (
    <span className="clicked" onClick={() => props.markCard(props.pData.id)}>
    <div className="card">
        <div className="img-container">
            <img alt="GameOThrones" src={props.pData.image}/>

        </div>
    </div>
    </span>
);

export default ClickCard;
