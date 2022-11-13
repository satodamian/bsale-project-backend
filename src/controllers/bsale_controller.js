import { Op } from 'sequelize';
import {DB_Products} from '../models/db_products.js'

export const getProductSale = async (req, res) => {
   const product = await DB_Products.findAll();
   // console.log(product);
   res.send(product);
} 

export const getByTerm = async(req, res)=>{
   const {name} = req.params;
   const product = await DB_Products.findAll({
      where:{
         name: {
            [Op.like]: `%${name}%`
         }
      }
   });
   if(!product){
      return res.send('No hay datos');
   };
   console.log(product);
   return res.send(product);
   
}