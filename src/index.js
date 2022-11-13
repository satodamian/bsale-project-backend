import app from "./app.js";
import { PORT } from "./config.js";
import {db} from './database/db.js'
import  './models/db_products.js';


async function main(){
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        // await db.sync();
        app.listen(PORT, () => {
            console.log(`Server on PORT ${PORT}`);
        });
        
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();