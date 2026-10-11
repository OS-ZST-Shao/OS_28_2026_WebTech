// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import Footer from "./components/Footer.jsx";
// import InfoBox from "./components/InfoBox.jsx";
// import Navigation from "./components/Navigation.jsx";
// import CourseCard from "./components/CourseCard.jsx";
// import TechnologiesList from "./components/TechnologiesList.jsx";
// import StudentCard from "./components/StudentCard.jsx";
// import Student from "./components/Student.jsx";
// import Book from "./components/Book.jsx";
import "./App.css";
import Header from "./components/Header.jsx";
import Technology from "./components/Technology.jsx";

function App() {
  const technologies = [
    { id: 1, name: "React", category: "Frontend",hours: 15 },
    { id: 2, name: "JavaScript", category: "Frontend",hours: 10 },
    { id: 3, name: "Angular", category: "Frontend",hours: 5 },
    { id: 4, name: "Express", category: "Backend",hours: 25 },
    { id: 5, name: "MongoDB", category: "Baza danych",hours: 20 }
  ];

  return (
    <>
      <Header />
      <br />

      {technologies.map((technology) => (
        <Technology
        key={technology.id}
        name={technology.name}
        category={technology.category}
        hours={technology.hours} />
      ))}
    </>
  );
}

export default App;
