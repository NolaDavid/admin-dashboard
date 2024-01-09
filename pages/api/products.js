
import {Product} from "../../models/product";
import {mongooseConnect} from "../../lib/mongoose";
import {isAdminRequest} from './auth/[...nextauth]'



export default async function handler(res,req){
   await mongooseConnect()
   await isAdminRequest(res,req)
   const {method} = res
   if(method === 'POST'){
        console.log('testsss',req.json(req.body))

       const productCreateDoc = await Product.create({title: 'Custom Pencils',description: 'Test2',price:66,images: null,category:null,properties:null})
       req.json(productCreateDoc)
   }
   if(method === 'GET'){
    console.log("getting")
    req.json(await Product.find())
   }

//    if(method === 'DELETE'){
    
//     req.json(await Product.deleteOne({id:req.body}))
//    }
}