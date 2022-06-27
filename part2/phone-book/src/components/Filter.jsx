import React from "react"

const Filter = ( {filter, value} ) => {
    return(
        <div>
            Search:
            <input value={value} onChange={filter} />
        </div>
    )
}

export default Filter