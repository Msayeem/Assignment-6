import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Banner from './Components/Banner'
import Mid from './Components/Mid'
import Products from './Components/Products'
import Toggle from './Components/Toggle'
import Mid2 from './Components/Mid2'
import Mid3 from './Components/Mid3'
import Footer from './Components/Footer'

let fet1=fetch(`${import.meta.env.BASE_URL}data.json`)
.then(x=>x.json())


function App() {
let [product, setProduct]=useState([]);

  return (
    <>
   
      <header>
         <Nav product={product}></Nav>
       <Banner></Banner>
       <Mid></Mid>
      </header>

      <main>
        <Toggle fet1={fet1} product={product} setProduct={setProduct}></Toggle>
        <Mid2></Mid2>
        <Mid3></Mid3>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
