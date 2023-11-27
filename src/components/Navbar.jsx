import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";
import { BsCartCheckFill } from 'react-icons/bs';
import { IoMdLaptop } from "react-icons/io";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaTabletScreenButton } from "react-icons/fa6";
import { RiFilterOffFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ setData, cart }) => {


  const location = useLocation()

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setData(element);
  };


  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
    // console.log(e)
  };

  const itempass = (e) => {
    
    console.log(e.target.value)
    setSearchTerm(e.target.value)
  }
  return (
    <>
      <header className="sticky-top">

        {/* how is this possible */}
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            <FaStore />    E-Cart
          </Link>
         

          {/* <form onSubmit={handleSubmit} className="search-bar">
            <input 
            type="text"
            value={searchTerm}
            onChange={itempass} />
          </form> */}

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsCartCheckFill />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>

        </div>

        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper">
              <div className="items">Filter by {"-->"}</div>
              <div onClick={() => setData(items)} className="items">
                No filter <RiFilterOffFill />
              </div>
              <div onClick={() => filterByCategory("mobiles")} className="items">
                Mobiles <FaMobileScreenButton />
              </div>
              <div onClick={() => filterByCategory("laptops")} className="items">
                Laptops <IoMdLaptop />
              </div>
              <div onClick={() => filterByCategory("tablets")} className="items">
                Tablets <FaTabletScreenButton />
              </div>
              <div onClick={() => filterByPrice("29999")} className="items">
                Price {">= 29999"}
              </div>
              <div onClick={() => filterByPrice("49999")} className="items">
                Price {">= 49999"}
              </div>
              <div onClick={() => filterByPrice("69999")} className="items">
                Price {">= 69999"}
              </div>
              <div onClick={() => filterByPrice("89999")} className="items">
                Price {">= 89999"}
              </div>
            </div>

          )
        }

      </header>
    </>
  );
};

export default Navbar;
