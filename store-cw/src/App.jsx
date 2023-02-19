
import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Main from './component/main'

function App() {

  const [showCart, setShowCart] = useState(false)
  return (
    <div className='app'>
      <Header showCart={showCart} setShowCart={setShowCart}/>
      <Main showCart={showCart} setShowCart={setShowCart}/>
    </div>
  )
}

export default App
