import React from "react";

function PortfolioProject(props) {

    return (
        <div>
            <div style={{ border:`2`, borderColor:props.bgColor, margin:`2rem`, padding:`1rem` }}>
            <h3 style={{ marginTop:`0` }}> {props.name}</h3>
            <p> {props.description} </p>
            </div>
        </div>
    )
}

export default PortfolioProject;