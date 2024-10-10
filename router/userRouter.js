const express=require('express')
const router=express.Router();
const usersController=require('../controller/user')


router.get('/',usersController.getAllusers)

router.get('/:id',usersController.getusers)

router.post('/',usersController.createusers)

router.put('/:id',usersController.updateByPut)

router.patch('/:id',usersController.updateByPatch)

router.delete('/:id',usersController.deleteusers)

exports.router=router