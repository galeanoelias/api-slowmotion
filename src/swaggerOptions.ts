import dotenv from "dotenv";
dotenv.config()
import swaggerJsDoc from "swagger-jsdoc";


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API: Slow Motion",
        version: "1.0.0",
        description: "A API OF USERS, MOVIES & SERIES FOR APP OF SLOW MOTION",
      },
      servers: [
        {
          url: process.env.ORIGIN1,
          description: 'API SlowMotion'
        },
      ],
      tags: [
        {
          name: "movie",
          description: "Everything about the movies",
        },
        {
          name: "serie",
          description: "Everything about the movies",
        },
        {
          name: "user",
          description: "Operations about user"
        }
      ],
      paths: {

      },
      components: {

      },
    },
    apis: ["./routes/*"]
}


export const specs = swaggerJsDoc(options);