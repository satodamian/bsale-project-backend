import express from 'express'
import BSaleRoutes from '../routes/bsale.routes.js'

const app = express();

// Middlewares
app.use(express.json());
app.use(BSaleRoutes);

export default app;
