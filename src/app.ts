import express from "express";
import dotenv from "dotenv";
dotenv.config()
import config from "config";
import cors from "cors";
import morgan from "morgan";
// Swagger
import swaggerUI from "swagger-ui-express";
import { specs } from "./swaggerOptions";


// Init app. define and set port
const app = express();

// Config whitelist
const whiteList = [process.env.ORIGIN1]
// Cors
app.use(cors({
    origin: function(origin, callback){
        console.log("Conectando=>", origin);
        if (!origin || whiteList.includes(origin)) {
            return callback(null, origin);
        }
        return "Error de CORS origin: " + origin + " No autorizado!"

    },
    credentials: true,
    })
);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes


// Routes

app.use("/docs/api/v1", swaggerUI.serve, swaggerUI.setup(specs));


const port = config.get<number>("port");
app.set("port", port);

export default app;