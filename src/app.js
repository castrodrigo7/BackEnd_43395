import express from "express";
import { __dirname } from "./utils.js";
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import viewRouter from "./routes/views.router.js";
import ProductRouter from "./routes/products.router.js";
import CartRouter from "./routes/carts.router.js";


const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/',express.static(__dirname + "/public"));

app.engine("handlebars", engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname + "/views"));

app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);
app.use("/",viewRouter)

const httpServer = app.listen(PORT, () => {
    console.log(`Servidor Express Puerto ${PORT}`);
  });

const socketServer = new Server(httpServer);