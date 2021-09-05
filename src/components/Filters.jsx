function Filters(props) {
  return (
    <aside class="filters-section">
      <h2>Filter By:</h2>
      <form id="filter-by-type-form" autocompete="off">
        <label for="filter-by-type">
          <h3>Type of Brewery</h3>
        </label>
        <select name="filter-by-type" id="filter-by-type">
          <option value="">Select a type...</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
        </select>
      </form>
      <div class="filter-by-city-heading">
        <h3>Cities</h3>
        <button class="clear-all-btn">clear all</button>
      </div>
      {props.cities.map((city) => {
        return (
          <form id="filter-by-city-form">
            <input
              type="checkbox"
              name={city.city}
              value={city.city}
              checked={props.handleFilter}
            />
            <label for={city.city}>{city.city}</label>
          </form>
        );
      })}
    </aside>
  );
}

export default Filters;
