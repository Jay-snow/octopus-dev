import React from "react";



function PortfolioProject(props) {

    return (
        <div style={{ marginLeft: `auto`, marginRight: `auto` }}>
            <div style={{ border:`2`, borderColor:props.bgColor, }}>
            
            <h3 style={{ marginTop:`0` }}> <a href={ props.plink} > {props.name}</a> </h3>
            <p> {props.description} </p>
            <ul>
                {props.children}
             </ul>
            </div>
        </div>
    )
}

export default PortfolioProject;