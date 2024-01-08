
import {Product} from "../../models/product";
import {mongooseConnect} from "../../lib/mongoose";



export default async function handler(res,req){
   
    const {method} = req;
    await mongooseConnect();
    console.log('method',method)
    console.log('handler',res)


    if (method === 'POST') {
        const {title,description,price,images,category,properties} = req.body;
        const productDoc = await Product.create({
          title,description,price,images,category,properties,
        })
        res.json(productDoc);
      }
}