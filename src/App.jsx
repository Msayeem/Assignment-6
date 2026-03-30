import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import Mid from './Components/Mid'
import Products from './Components/Products'
import Toggle from './Components/Toggle'

let fet1=fetch('/data.json')
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
      </main>
    </>
  )
}

export default App
