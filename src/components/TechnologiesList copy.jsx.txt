function TechnologiesList() {

    const tablica = [
        {id: 1,name: "HTML", category: "Strona"},
        {id: 2,name: "CSS", category: "Wygląd"},
        {id: 3,name: "React", category: "Działanie"}
    ];

    return (
      <>
      <br />
        <p>{tablica[0].name}</p>
        <p>{tablica[1].name}</p>
        <p>{tablica[2].name}</p>
        <br />
      </>
    )
  }
  export default TechnologiesList;