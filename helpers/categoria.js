import Categoria from "../models/categoria.js"

const existecategoriaBiId=async(id)=>{
    const existe=await Categoria.findById(id)
    if(! existe) throw new Error('El ID no existe')
}

const existecategoriaBYnombre=async (nombre)=>{
    const existe=await Categoria.findOne({nombre:nombre})
    if(existe) throw new Error('Ya existe una categoria con ese nombre')
}

export  {existecategoriaBiId,existecategoriaBYnombre};