import Categoria from "../models/categoria.js";
// la peticion espera el modelo que cremos de la base de datos
// el req es lo que me llega y el res es lo que envio
const categoriascontrollers = {
    categoriaGet: async (req, res) => {
        const value = req.query.value
        //aca busco en el req todo lo que quiero em emseñe el $or es un arreglo con muchas condiciones
        const categoria = await Categoria.find({
            $or: [
                { nombre: new RegExp(value, 'i') },
                { descripcion: new RegExp(value, 'i') }
            ]
        })
            // y aca lo ordeno del desendentemente 
            .sort({ 'createdAt': -1 });

        res.json({
            categoria
        })
    },
    categoriaGetByid: async (req, res) => {
        //cuando me llega por la ruta se busca en parametros "params"
        const { id } = req.params
        const value = req.query.value
        //aca busco en el req todo lo que quiero em emseñe el $or es un arreglo con muchas condiciones
        const categoria = await Categoria.findOne({ _id: id })

        res.json({
            categoria
        })
    },

    categoriaPost: async (req, res) => {
        // hacer destrocturacion para que solo llegue lo necesario del body
        const { nombre, descripcion } = req.body;
        // y aca envio el nombre y la descripcion que recivi del body
        const categoria = new Categoria({ nombre, descripcion });
        //guardar eso en la base de datos
        await categoria.save();
        //responder al usuario y le envio la categoria que acavamos de crear
        res.json({
            categoria
        })
    },
    //el put es actualizar
    categoriaput: async (req, res) => {
        // vamos a recibir el id del cual vamos a actualizar
        const { id } = req.params
        //saco lo que no quiero modificar por si me lo envian y lo que quiero modificar quedo guardado en resto
        const { _id, estado, createdAt, __v, ...resto } = req.body
        //modificar
        //el para buscar y poder editar findByIdAndUpdate es y tiene 2 parametros el primero es la id de lo que quiero
        //modificar y lo segundo que lo que quiero modificar el resto
        const categoria = await Categoria.findByIdAndUpdate(id, resto);
        res.json({
            categoria
        })
    },
    categoriaPutactivar: async (req, res) => {
        // el id llega y la asigno a ina variable
        const {id}=req.params
        const categoria=await Categoria.findByIdAndUpdate(id,{estado:1})
        res.json({
            categoria
        })
    },
    categoriaPutdesactivar: async (req, res) => {
        // el id llega y la asigno a ina variable
        const {id}=req.params
        const categoria=await Categoria.findByIdAndUpdate(id,{estado:0})
        res.json({
            categoria
        })
    },
    categoriadelete: async (req, res) => {
        // el id llega y la asigno a ina variable
        const {id}=req.params
        const categoria=await Categoria.findByIdAndDelete(id)
        res.json({
            categoria
        })
    }

}



export default categoriascontrollers;