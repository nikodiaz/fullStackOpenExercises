import React, {useState} from "react";
import Country from "./Country";
import CountryItem from "./CountryItem";

function Countries({countries, search}) {
    const [showCountry, setShowCountry] = useState();


    // Setear el país que se muestra al clicar el botón 'Show'
    function show(e) {
        const item = countries.filter(country =>
            country.name.common.includes(e.target.value)
        )
        setShowCountry(item[0])
    }

    // Filtrado de países por la entrada del input
    const results = countries.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    if(results.length >= 10){
        return <p>Too many matches, specify another filter</p>
    }

    //Si esta seteado la función show mostrar el país seleccionado
    if(showCountry !== undefined) {
        return (
            <Country
                key={showCountry.name.common}
                name={showCountry.name.common}
                capital={showCountry.capital}
                population={showCountry.population}
                languages={Object.values(showCountry.languages)}
                flag={showCountry.flags.svg}
            />
        )
    }
    // Si solo hay un resultado mostrar el país
    if(results.length === 1) {
        return (
            <Country
                key={results[0].name.common}
                name={results[0].name.common}
                capital={results[0].capital}
                population={results[0].population}
                languages={Object.values(results[0].languages)}
                flag={results[0].flags.svg}
            />
        )
    }
    // Si hay mas de 1 resultado pero menos de 10 mostrar la lista de países
    if(results.length > 1) {
        return (
            <ul>
                {
                    countries.filter(country =>
                        country.name.common.toLowerCase().includes(search.toLowerCase())
                    ).map(country => (
                        <CountryItem
                            key={country.name.common}
                            name={country.name.common}
                            country={country}
                            show={show}
                        />
                    ))
                }
            </ul>
        )
    }

    return (
        <ul>
            {countries.filter(country =>
                country.name.common.toLowerCase().includes(search.toLowerCase())
            ).map(country => (
                <Country
                    key={showCountry.name.common}
                    name={showCountry.name.common}
                    capital={showCountry.capital}
                    population={showCountry.population}
                    languages={Object.values(showCountry.languages)}
                    flag={showCountry.flags.svg}
                />
            ))
            }
        </ul>
    )

}

export default Countries