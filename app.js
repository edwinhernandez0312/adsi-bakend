import {} from  'dotenv/config.js'
import { server } from './server.js'

const servidor= new server();

servidor.listen();