function Student(props) {
    return (
        <>
            <h2>{props.name}</h2>
            <p>Klasa: {props.className} </p>
            <p>Wiek: {props.age}</p>
            <p>Specializacja: {props.specialization}</p>
            <br />
        </>
    )
}

export default Student;