import app from "./app.js";
import { DB_PORT } from "./config.js";
import {db} from './database/db.js'
import  './models/db_products.js';

const port = DB_PORT;

async function main(){
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        // await db.sync();
        app.listen(port, () => {
            console.log(`Server on port ${port}`);
        });
        
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();