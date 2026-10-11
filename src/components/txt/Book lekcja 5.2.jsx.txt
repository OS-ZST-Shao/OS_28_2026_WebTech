function Book(props) {
    return (
      <header>
        <h2>Tytuł: {props.title}</h2>
        <p>Autor: {props.author}</p>
        <br />
      </header>
    )
  }
  export default Book;