import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import Mid from './Components/Mid'
import Products from './Components/Products'

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
        <Products fet1={fet1}></Products>
      </main>
    </>
  )
}

export default App
