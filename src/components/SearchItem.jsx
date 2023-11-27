import { useParams } from "react-router-dom"
import { items } from "./Data";
import { useEffect, useState } from "react";
import Product from "./Product";


const SearchItem = ({cart, setCart}) => {
  // const {cart, setCart} =this.props

  const {term} = useParams();
 
  const [filterData, setFilterData] = useState([]);
  
  const filteredData = () => {
    const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
   setFilterData(data);
  }

  useEffect(() => {
    filteredData();
  }, [term])
  



  return (
    <Product cart={cart} setCart={setCart} items={filterData}/>
  
  )
}

export default SearchItem
