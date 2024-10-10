const express=require('express')
const router=express.Router();
const productController=require('../controller/product')


router.get('/',productController.getAllProducts)

router.get('/:id',productController.getProduct)

router.put('/:id',productController.replaceProduct)

router.post('/',productController.createProduct)

router.patch('/:id',productController.updateByPatch)

router.delete('/:id',productController.deleteProduct)

exports.router=router