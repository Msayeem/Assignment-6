import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import Mid from './Components/Mid'
import Products from './Components/Products'
import Toggle from './Components/Toggle'
import Mid2 from './Components/Mid2'
import Mid3 from './Components/Mid3'

let fet1=fetch(`${import.meta.env.BASE_URL}data.json`)
.then(x=>x.json())


function App() {


  return (
    <>
      <header>
        <Nav></Nav>
       <Banner></Banner>
       <Mid></Mid>
      </header>

      <main>
        <Toggle fet1={fet1}></Toggle>
        <Mid2></Mid2>
        <Mid3></Mid3>
      </main>
    </>
  )
}

export default App
