import Link from 'next/link'
import Layout from '../components/Layout'
import { useState } from 'react'
import axios from 'axios'
export default function items(){
  const [productTitle, setProductTitle] = useState('33')
  const [productPrice, setProductPrice] = useState('333')
  const [productDescription, setProductDescription] = useState('333')

  const handlePriceChange = (event) =>{
    setProductPrice(event.target.value)
  }
  const handleTitleChange = (event) =>{
    setProductTitle(event.target.value)
  }
  const handleDescriptionChange = (event) =>{
    setProductDescription(event.target.value)
  }

  const saveItem = (e) => {
    e.preventDefault()
    const data = {productTitle,productPrice,productDescription};
    try {
    console.log("called?")
     const saveItemResponse =  axios.post("/api/products",data).then((res) => console.log("data",res))
    }
    catch(error) {
      console.log("error saving item to db", erro)
    }
    
  }
    return(
      <Layout>
 <section className="bg-white dark:bg-gray-900 rounded">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                onChange={handleTitleChange}
                value={productTitle}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  onChange={handlePriceChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                  value={productPrice}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option defaultValue="">Select Finish</option>
                  <option defaultValue="BIRCH">Birch</option>
                  <option defaultValue="MAPLE">Maple</option>
                  <option defaultValue="CHERRY">Cherry</option>
                  <option defaultValue="HICKORY">Hickory</option>
                  <option defaultValue="WALNUT">Walnut</option>
                  <option defaultValue="MAHOGANY">Mahogany</option>
                  <option defaultValue="EMPTY">None</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  value={productDescription}
                  onChange={handleDescriptionChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <Link className="flex flex-col gap-2 ml-4 " href={"/products"}>
              <button onClick={saveItem} className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-amber-700"
>             Add Product

              </button>
              </Link>
          </form>
        </div>
      </section>
      </Layout>
       
    )
}