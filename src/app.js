import express from 'express'
import BSaleRoutes from '../routes/bsale.routes.js'
import cors from 'cors'
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(BSaleRoutes);

export default app;
