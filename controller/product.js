// const fs=require("fs")
// const data=JSON.parse(fs.readFileSync("data.json","utf-8"))
// const product=data.products

// const model=require('../Model/product')
// const Product=model.Product



// exports.createProduct = async (req, res) => {

//     const pro = new Product(req.body)
//      await pro.save()
//      res.status(201).json("done")
        
// };




// exports.getProduct=(req,res)=>{
//     let id=+req.params.id
//        const pro=product.find(p=>p.id===id)
//     res.json(pro)
//     res.status(201)
// }

// exports.getAllProducts=(req,res)=>{
//     res.json(product)
// }

// exports.updateByPut=(req,res)=>{
//     let id=+req.params.id
//        const proI=product.findIndex(p=>p.id===id)
//        product.splice(proI,1,{...req.body,id:id})
//     res.status(201).json() 
// }

// exports.updateByPatch=(req,res)=>{
//     let id=+req.params.id
//        const proI=product.findIndex(p=>p.id===id)
//        const pro=product[proI]
//        product.splice(proI,1,{...pro,...req.body})
//     res.status(201).json() 
// }

// exports.deleteProduct=(req,res)=>{
//     let id=+req.params.id
//        const proI=product.findIndex(p=>p.id===id)
//        product.splice(proI,1)
//     res.status(201).json() 
// }

const fs=require("fs")
const data=JSON.parse(fs.readFileSync("data.json","utf-8"))
const product=data.products

const model=require('../Model/product')
const Product=model.Product



exports.createProduct = async (req, res) => {

    const pro = new Product(req.body)
     await pro.save()
     res.status(201).json("done")      
};




exports.getProduct=async(req,res)=>{
    let id=req.params.id
    let pro=await Product.find({_id:id})
    res.json(pro)
    res.status(201)
}

exports.getAllProducts=async(req,res)=>{
    let product=await Product.find()
    res.json(product)
}

exports.replaceProduct=async (req,res)=>{
    let id=req.params.id
    let newProduct= await Product.findOneAndReplace({_id:id},req.body)
    res.status(201).json(newProduct) 
}


exports.updateByPatch=async(req,res)=>{
    let id=req.params.id
    let newProduct= await Product.updateOne({_id:id},req.body)
    res.status(201).json(newProduct) 
}

exports.deleteProduct=async(req,res)=>{
    let id=req.params.id
    await Product.deleteOne({_id:id})
    res.status(201).json("Deleted") 
}

