import { useParams } from "react-router-dom";
import { items } from "./Data";
import { useEffect, useState } from "react";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductDetail = ({cart, setCart}) => {
  // const {cart, setCart} =this.props

  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((pro) => pro.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };

    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("🛒 added to your Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <div className="card mb-3 text-center container my-4 " style={{width:'1000px',justifyContent:'center',
      }}>
  <div className="row g-0">
    <div className="col-md-4 ">
      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 my-5 ">
      <div className="card-body ">
        <h5 className="card-title" style={{fontSize:'1.8rem'}}>{product.title}</h5>
        <p className="card-text" style={{fontSize:'1.2rem'}}>{product.description}</p>
        <button
            type="button"
            className="btn btn-primary btn-lg  mx-5 my-5"
          >
            ₹ {product.price}
          </button>
          <button
                    onClick={() =>
                      addToCart(
                        product.id,
                        product.price,
                        product.title,
                        product.description,
                        product.imgSrc
                      )
                    }
                    type="button"
                    className="btn btn-warning btn-lg"
                  >
                    Add to the Cart
                  </button>
        
      </div>
    </div>
  </div>
</div>


      <h1 className="text-center my-2">Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
