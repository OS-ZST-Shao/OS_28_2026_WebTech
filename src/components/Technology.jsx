 function Technology({ name, category, hours }) {

    function showTechnology(){
      console.log("Nazwa: " + name);
      console.log("Kategoria: " + category);
      console.log("Liczba godzin: " + hours);
    }

    return (
      <section>
        <h2 className="naglowek2">Nazwa: {name} </h2>
        <p className="akapit">Kategoria: {category}</p>
        <p className="akapit">Liczba godzin: {hours}</p>
        <button className="przycisk" onClick={showTechnology}>
          Pokaż informacje
        </button>
        <br />
      </section>
    )
  }

  export default Technology;