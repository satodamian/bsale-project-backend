import {Router} from 'express'
import {getProductSale, getByTerm} from '../src/controllers/bsale_controller.js'

const router = Router();

router.get('/products', getProductSale);
router.get('/products/:name', getByTerm);


export default router;