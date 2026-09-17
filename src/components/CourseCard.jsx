function CourseCard() {
    let course = {
        name: 'Pływanie',
        teacher: 'Wiktor Sad',
        hours: 32,
        completed: false
    };

    let status= "";

    if (course.completed)
        { status = "Ukończone" }
    else
        {status = "Nie ukończone"}
    

    return (
        <section>
            <br />
            <h2 className="courseName">{course.name}</h2>
            <p>Nauczyciel: {course.teacher}</p>
            <p>Ilość godzin: {course.hours}</p>
            <p>Ilość minut: {course.hours * 60}</p>
            <p>Status: {status}</p>
            <br />
        </section>
    )
}
export default CourseCard;