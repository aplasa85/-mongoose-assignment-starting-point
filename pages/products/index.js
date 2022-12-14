import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/ProductDashboard.module.css";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null); //"Food", "Technology"

   const [shouldReload, setShouldReload]= useState (true); 


<button className="button" event="click">Delete item</button>

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = categoryFilter
          ? `/api/products?category=${categoryFilter}`
          : "/api/products";
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error(
            `Fetch fehlgeschlagen mit Status: ${response.status}`
          );
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }

      setShouldReload (false)
    };
    if (shouldReload) {
      getProducts()};
  }, [categoryFilter, shouldReload]);

    async function deleteItem (id) {
      
      try {
        const response=  await fetch (`/api/products/${id}`, {method:"DELETE"}) 
        if (response.ok ){
          alert('Product has been deleted.');
        }   else {
          alert ('Operation not completed.');
        }
      } catch (error) {
        alert (error.message)
      }
setShouldReload(true);
    }


  return (
    <>
      <Head>
        <title>Product Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="test">Products Dashboard</h1>
        <select
          onChange={(event) => {
            if (event.target.value === "all") {
              setCategoryFilter(null);
            } else {
              setCategoryFilter(event.target.value);
            }
          }}
        >
          <option value="all">Alle</option>
          <option value="Food">Food</option>
          <option value="Technology">Technology</option>
        </select>
        


        <p>{categoryFilter}</p>
        <ul className={styles["product-list"]}>
          {products.map((product) => {
 
            return (
              <li key={product._id}>
                <Link href={`/products/${product._id}`}>{product.name}</Link>
                <button onClick={ () => deleteItem (product._id)}>Delete</button>
              </li>
              
            );
            })}
        </ul>
      </div>
    </>
  );
};

export default Products;
