import React, {useState, useEffect} from "react";
import axios from "axios";
import Countries from "./components/Countries";


function App() {
	const [search, setSearch] = useState('');
	const [countries, setCountries] = useState([]);

	useEffect(() =>{
		axios
			.get('https://restcountries.com/v3.1/all')
			.then(res => setCountries(res.data))
	}, [search])

	function handleChange(e) {
		setSearch(e.target.value)
	}

  	return (
    	<div className="App">
			<div>
        		<p>Find Countries:</p>
        		<input value={search} onChange={handleChange}/>
    		</div>
			<Countries countries={countries} search={search} />
    	</div>
  	);
}

export default App;
