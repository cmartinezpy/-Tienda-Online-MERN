import { useState } from 'react';
import './App.css'
import {db} from './data/db'
import { ProductoContainer } from './components/PageInicio/ProductoContainer'; 
import { Header } from './components/comun/Header';
import { Footer } from './components/comun/Footer';


function App() {
  const [data, setData] = useState(db)
  if(false){
    
    <login />
  }


  return (
    <>
      <Header />
   

       <ProductoContainer />   


       <Footer />
    </>
  )
}

export default App
