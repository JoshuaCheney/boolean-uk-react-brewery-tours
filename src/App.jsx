import { useState } from "react";
import BrewList from "./components/BrewList";
import BrewSearch from "./components/BrewSearch";
import Header from "./components/Header";
import Filters from "./components/Filters";

export default function App() {
  const [userInput, setUserInput] = useState([]);
  const [breweries, setBreweries] = useState([]);
  const [cities, setCities] = useState([]);
  const [checked, setChecked] = useState([]);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchBreweries();
  };

  const handleFilter = (event) => {
    event.preventDefault();
    let filterCity = breweries.filter(
      (brewery) => brewery === event.target.value
    );

    setChecked(filterCity);
  };

  function fetchBreweries() {
    fetch(
      `https://api.openbrewerydb.org/breweries?by_state=${userInput}&per_page=50`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("inside Fetch", data);

        setBreweries(data);
        setCities(data);
      });
  }

  return (
    <>
      <Header handleSubmit={handleSubmit} handleUserInput={handleUserInput} />
      <main>
        <Filters cities={cities} handleFilter={handleFilter} />
        <BrewSearch userInput={userInput} />
        <BrewList breweries={breweries} />
      </main>
    </>
  );
}
