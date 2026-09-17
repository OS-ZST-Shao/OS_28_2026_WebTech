import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  function Header() {
    return (
      <header>
        <h1>Header WebTech</h1>
      </header>
    )
  }

  function Technology() {
    return (
      <section>
        <h1>Section "Technology" WebTech</h1>
      </section>
    )
  }

  function Footer() {
    return (
      <footer>
        <h1>Footer WebTech</h1>
      </footer>
    )
  }

  return (
    <>
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Technology />
      <Footer />
    </>
  );
}

export default App;

