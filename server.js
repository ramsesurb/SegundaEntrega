import express, { json, urlencoded } from 'express';
const {Router} = express
import routerCart from './routes/cart/index.js';
import routerProd from './routes/products/index.js';


const app = express();
const PORT = 8080
app.use(json());
app.use(urlencoded({ extended: true }));

const admin = Boolean(true)

app.use( "/cart", routerCart)
app.use( "/productos", routerProd)

app.get ("/", (req,res)=> res.send("proyecto final 1.0"))

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en servidor ${error}`))
