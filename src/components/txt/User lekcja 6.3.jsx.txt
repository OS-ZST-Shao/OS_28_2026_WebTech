function User({name, role}) {
    function showUser()
    {
        console.log("Użytkownik: " + name)
        console.log("Rola: " + role)
    }
    return (
        <>
            <button className="przycisk" onClick={showUser} >
                Pokaż użytkownika
            </button>
            <br />
        </>
    )
}

export default User;