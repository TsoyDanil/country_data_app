import React from "react";
import './CountryInfo.css';

const CountryInfo = (props) => {
    
    return (
        
        <div className="CountryInfo">
            {
                props.country ?
                <div  className="CountryInfo__inner__container">
                    <div>
                    <h1 className="CountryInfo__title">COUNTRY: {props.country.name}</h1>
                    <p>Capital: {props.country.capital}</p>
                    <p>Population: {props.country.population}</p>
                    <p>Area:{props.country.area}</p>
                    <p>Bordering with: </p>
                    <ul>
                        {   
                            props.borders ? 
                            props.borders.map((border, i) => {
                                return <li key={i}>{border}</li>
                            })                       
                            :
                            <li>NO BORDERS</li>
                        }
                    </ul>
                    </div>
                    <div className="Image__frame">
                        <img className="CountryInfo__image" src={props.country.flag} alt={props.country.name} />
                    </div>
                </div>
                :
                <div className="CountryInfo__empty__text__border">
                    <h1 className="CountryInfo__empty__text">NO COUNTRY</h1>
                    <p>ADD SOME COUNTRY TO SEE INFO</p>
                </div>
            }
        </div>
        
    )
}

export default CountryInfo