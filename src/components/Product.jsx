function Product({name, price, onSelect}) {

    function showProduct()
    {
        console.log("Wybrano produkt: " + name);
    }

    return (
      <header>
        <h2>Nazwa: {name}</h2>
        <p>Cena: {price}</p>
        <button className="przycisk" onClick={showProduct}>
            Pokaż produkt
        </button>
        <button className="przycisk" onClick={() => onSelect(name)}>
            Wybierz
        </button>
        <br />
      </header>
    )
  }
  export default Product;