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
            <div key={product.id}>
            <h1 key={product.id}>{product.title}</h1>
            <h1 key={product.id}>{product.price}</h1>
            <h1 key={product.id}>{product.description}</h1>
            <h1 key={product.id}>{product.images}</h1>
            <button key={product.id} className="bg-orange-500 text-white font-bold">Edit</button>
            <button key={product.id}  className="bg-red-800 text-white font-bold">Delete</button>
            </div>

          )
        })}
       </ul>

    </Layout>
  );
}
