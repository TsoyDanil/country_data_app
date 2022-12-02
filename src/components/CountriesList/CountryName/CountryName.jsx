import React from "react";
import './CountryName.css'

const CountryName = (props) => {

    return (
            <button className="CountryName" onClick={props.onClick}>{props.children}</button>
            )
}

export default CountryName