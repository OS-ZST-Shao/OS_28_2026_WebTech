 function Technology(props) {
    return (
      <section>
        <h2 className="naglowek2">Nazwa: {props.name} </h2>
        <p className="akapit">Kategoria: {props.category}</p>
        <p className="akapit">Liczba godzin: {props.hours}</p>
        <br />
      </section>
    )
  }

  export default Technology;