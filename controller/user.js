const fs=require("fs")
const data=JSON.parse(fs.readFileSync("data.json","utf-8"))
const users=data.users

exports.createusers=(req,res)=>{
    console.log(req.body)
    users.push(req.body)
    res.json(req.body)
}

exports.getusers=(req,res)=>{
    let id=+req.params.id
       const pro=users.find(p=>p.id===id)
    res.json(pro)
}

exports.getAllusers=(req,res)=>{
    res.json(users)
}

exports.updateByPut=(req,res)=>{
    let id=+req.params.id
       const proI=users.findIndex(p=>p.id===id)
       users.splice(proI,1,{...req.body,id:id})
    res.status(201).json() 
}

exports.updateByPatch=(req,res)=>{
    let id=+req.params.id
       const proI=users.findIndex(p=>p.id===id)
       const pro=users[proI]
       users.splice(proI,1,{...pro,...req.body})
    res.status(201).json() 
}

exports.deleteusers=(req,res)=>{
    let id=+req.params.id
       const proI=users.findIndex(p=>p.id===id)
       users.splice(proI,1)
    res.status(201).json() 
}

