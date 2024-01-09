
import {Product} from "../../models/product";
import {mongooseConnect} from "../../lib/mongoose";



export default async function handler(res,req){
   await mongooseConnect()
   const {method} = res
   if(method === 'POST'){
    
       const productCreateDoc = await Product.create({title: 'Custom Pencils',description: 'Test2',price:66,images: null,category:null,properties:null})
       req.json(productCreateDoc)
   }
   if(method === 'GET'){
    req.json(await Product.find())
   }
}