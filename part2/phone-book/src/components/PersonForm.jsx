import React from "react";

const PersonForm = ({submit, name, addName, number, addNumber}) => {
    return(
        <form onSubmit={submit} >
            <span>Name:</span>
            <input value={name} onChange={addName} />
            <span>Number:</span>
            <input value={number} onChange={addNumber} />
            <button type="submit">Add</button>
        </form>
    )
}

export default PersonForm