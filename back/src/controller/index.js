const auth= require('../models/index')



module.exports={
   async create(req,res){
        const {name,email,description}=req.body
        if(!name || !email || !description){
         return res.status(400).json({msg:"prencha todos os campos"})
        }
     

       const validaçãoTrue= await auth.create({
        name,
        email,
        description,
        
     })
        if(validaçãoTrue){
          
          return res.json(validaçãoTrue)
        }

       
         
     res.json({msg:"erro ao criar usuario"})
       
    },
   async read(req,res){
       const readValidação= await auth.find()
      return   res.json(readValidação)
    },


 

    async delete(req,res){
        const id=req.params.id
        const person = await auth.findOne({ _id: id })

        
        if (!person) {
          res.status(422).json({ message: 'Usuário não encontrado!' })
          return
        }
        
        
          await auth.deleteOne({ _id: id })
      
            res.status(200).json({ message: 'Usuário removido com sucesso!' })
         
      },
      async update(req,res){
        const id= req.params.id

        const  {name,email,description}=req.body
 
        const Person={
          name,
          email,
          description
        }

        const updatePerson= await auth.updateOne({_id:id},Person)
        
          if(!updatePerson){
            res.status(422).json({ message: 'Usuário não encontrado!' })
            return
          }

      
          res.status(200).json({ message: 'Usuário atualizado  com sucesso!' })
      }

   
} 