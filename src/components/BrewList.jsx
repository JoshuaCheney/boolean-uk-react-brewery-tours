function BrewList(props) {
  return (
    <article>
      <ul className="breweries-list">
        {props.breweries.map((brewery, index) => {
          return (
            <li key={index}>
              <h2>{brewery.name}</h2>
              <div className="type">{brewery.brewery_type}</div>
              <section className="address">
                <h3>Address:</h3>
                <p>{brewery.street ?? "No Street Address Recorded"}</p>
                <p>
                  <strong>
                    {brewery.city}, {brewery.postal_Code}
                  </strong>
                </p>
              </section>
              <section className="phone">
                <h3>Phone:</h3>
                <p>{brewery.phone ?? "No Recorded Number"}</p>
              </section>
              <section className="booking">
                <button>Book a tour</button>
              </section>
              <section className="link">
                <a href={brewery.website_url} target="_blank">
                  Visit Website
                </a>
              </section>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default BrewList;
