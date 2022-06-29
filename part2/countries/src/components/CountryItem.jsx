import React from "react";

function CountryItem({ country, show}) {
    return (
        <li key={country.name.common}>
            {country.name.common}
            <button
                value={country.name.common}
                onClick={show}
            >Show</button>
        </li>
    )
}

export default CountryItem