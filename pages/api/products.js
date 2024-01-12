
import {Product} from "../../models/product";
import {mongooseConnect} from "../../lib/mongoose";
import {isAdminRequest} from './auth/[...nextauth]'



export default async function handler(res,req){
   await mongooseConnect()
   const admin = await isAdminRequest(res,req)
 

   const {method} = res
   if(method === 'POST'){
     const {title,price,descript} = res.body
        

       const productCreateDoc = await Product.create({title: `${title}`,description: `${descript}`,price:`${price}`,images: null,category:null,properties:null})
       req.json(productCreateDoc)
   }
   if(method === 'GET'){
   
    req.json(await Product.find())
   }

//    if(method === 'DELETE'){
    
//     req.json(await Product.deleteOne({id:req.body}))
//    }
}