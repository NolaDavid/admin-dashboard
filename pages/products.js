import { useEffect,useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import axios from 'axios'
export default function products() {
  const[products, setProducts] = useState([])
useEffect(() => {
  axios.get('/api/products').then((res) => {
    setProducts(res.data)
})
},[])




  return (
    <Layout>
        <Link href="/items">
            Add Item
        </Link>
       <ul>
        {products.map((product) => {
          return(
            <div>
                          <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <h1>{product.description}</h1>
            <h1>{product.images}</h1>
            </div>

          )
        })}
       </ul>

    </Layout>
  );
}
