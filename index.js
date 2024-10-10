const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const server= express()
const proRoute=require('./router/productRouter')
const userRoute=require('./router/userRouter')





mongoose.connect('mongodb+srv://chetangadekar67:ojYOHjNsJWB1GeKZ@ecommerce.5ucby.mongodb.net/ecoomerce?retryWrites=true&w=majority')
.then(() => {
    console.log('Database connected successfully');
}).catch(err => {
    console.error('Database connection error:', err);
});


server.use(cors())
server.use(express.json())
server.use(express.static('build'))
server.use('/products/api/v1',proRoute.router) 
server.use('/user/api/v1',userRoute.router)



server.listen(8080,()=>{
    console.log("router started")
}) 