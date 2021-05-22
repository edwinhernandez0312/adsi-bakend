import {} from  'dotenv/config.js'
import { server } from './models/server.js'


const servidor= new server();

servidor.listen();