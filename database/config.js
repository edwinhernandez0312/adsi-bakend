import mongoose from 'mongoose'
 const dbconecction=async()=>{
    try {
       await mongoose.connect(process.env.mongoDB_cnx, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
             useCreateIndex:true,
             useFindAndModify:false
            })
            console.log(`base de datos online`);
    } catch (error) {
        throw new Error('Error al iniciar la base de datos ') ;
    }
 }

 export default dbconecction
