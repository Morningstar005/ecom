import Navbar from './components/Navbar'
import Product from './components/Product'
import { Routes,Route} from 'react-router-dom'

import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem.jsx'
import Cart from './components/Cart'
import { items } from './components/Data'
import { useState } from 'react'


const App = () => {
  const [data, setData ] = useState([...items])

  const [cart, setCart] = useState([]);

  return (
    <>
    

    <Navbar cart={cart} setData={setData}/>
     <Routes>
     <Route path="/"
      element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
     </Routes>
    
    
     {/* <Router></Router> */}
     </>
  )
}

export default App
