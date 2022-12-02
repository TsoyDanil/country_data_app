import React from "react";
import './CountryInfo.css';

const CountryInfo = (props) => {
    
    return (
        
        <div className="CountryInfo">
            {
                props.currentCountry ?
                <div  className="CountryInfo__inner__container">
                    <div>
                    <h1 className="CountryInfo__title">COUNTRY: {props.currentCountry.name}</h1>
                    <p>Capital: {props.currentCountry.capital}</p>
                    <p>Population: {props.currentCountry.population}</p>
                    <p>Area:{props.currentCountry.area}</p>
                    <p>Bordering with: </p>
                    <ul>
                        {   
                            props.currentCountry.borders ? 
                            props.currentCountry.borders.map((border, i) => {
                                return <li key={i}>{border}</li>
                            })                       
                            :
                            <li>NO BORDERS</li>
                        }
                    </ul>
                    </div>
                    <div className="Image__frame">
                        <img className="CountryInfo__image" src={props.currentCountry.flag} alt={props.currentCountry.name} />
                    </div>
                </div>
                :
                <div className="CountryInfo__empty__text__border">
                    <h1 className="CountryInfo__empty__text">NO COUNTRY</h1>
                </div>
            }
        </div>
        
    )
}

export default CountryInfo