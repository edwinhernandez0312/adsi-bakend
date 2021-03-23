import express from 'express'
import cors from 'cors'
import dbconecction from './satabase/config.js';

class server{
    constructor(){
       
        this.app = express();
        this.PORT=process.env.PORT;
       
        this.conectarBD();
     
        this.middleware();
        
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
   
    this.app.use(express.static('public'))
}

listen(){
    this.app.listen(this.port,()=>{
        console.log(`servidor corriendo en el puerto ${this.PORT}`);
    
    })
}


}

export {server};

