import express from 'express'
import cors from 'cors'
import dbconecction from './satabase/config.js';

class server{
    constructor(){
        // 1 crear servidor
        this.app = express();
        this.port=process.env.port;
        // 2 conectarnos a la base de datos
        this.conectarBD();
        // 3 darle a conocer todos los middleware
        this.middleware();
        // 4 rutas o routers que tenemos
        this.routes()
    }

     routes(){

     }

   async conectarBD(){
       await dbconecction();
    }


middleware(){
    this.app.use(express.json());
    this.app.use(cors());
    // ya viene integrado con express para lo de las rutas en static es donde se busca de donde estara el form
    this.app.use(express.static('public'))
}

listen(){
    this.app.listen(this.port,()=>{
        console.log(`servidor corriendo en el puerto ${this.port}`);
    
    })
}


}

export {server};

