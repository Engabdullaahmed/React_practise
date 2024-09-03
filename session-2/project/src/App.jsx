import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Components/Welcome.jsx';
import Welcomefc from './Components/Welcomefc.jsx';
import Product from './Components/Product.jsx';
import Button from './Components/Button.jsx';
function App() {
  return (
    <>
      <div className='App'>
        <Welcome name="Abdulla" />
        {/* <Welcomefc name="Ali" age="25" /> */}
        {/* <Product title="Iphone 13" description="New Iphone 13 with 128GB" price="$999" />
        <Product title="Iphone 12" description="New Iphone 12 with 128GB" price="$899" />
        <Product title="Iphone 11" description="New Iphone 11 with 128GB" price="$799" /> */}
      </div>
    </>
  )
}

export default App






