const express=require('express')
require('dotenv').config()

const route=require('./routes')
const cors= require('cors')
const bodyparser=require('body-parser')
const app=express()
const mongoose= require('mongoose')
mongoose.set('strictQuery', true);

app.use(express.json())
app.use(cors()) 
app.use(bodyparser.json())
app.use(route)
app.use(bodyparser.urlencoded({
  extended:true
}))



mongoose.connect(process.env.Key ,
{ useNewUrlParser: true ,
  useUnifiedtopology:true

})
.then(()=> console.log('conectou ao banco de dados'))
.catch((err)=> console.log(err  +  "  erro ao conectar ao banco de dados"))

  

const PORT=4000

app.listen(PORT,()=>{
    console.log(`servidor rodando na porta ${PORT} `)
})