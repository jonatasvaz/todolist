import React, { useEffect, useState } from 'react'
import Api from '../service/Api'
import { Header,Title,Inputs,Result,Table } from './TodoStyle'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import userApi from '../features/Slice';

const Todolist = () => {
   const[name,setName]=useState('')
   const[email,setEmail]=useState('')
   const[description,setDescrição]=useState('')
   const[allnotes,setNotesAll]=useState([]) 
   const[auth,setAuth]=useState(false)

 // const [addUser] =userApi.useAddUserMutation()
 
console.log(allnotes ) 
  



useEffect(()=>{

   async function getData(){
     await Api.get('/')
     .then((res)=>setNotesAll(res.data))
     .catch(err=>console.log(err))
     
  }  
  getData()
},[])

 useEffect(()=>{
  async function getData(){
    await Api.get('/')
    .then((res)=>setNotesAll(res.data))
    .catch(err=>console.log(err))
    
 }  
 getData()
   setAuth(false)
},[auth])





  async function handleSubmit(e){
   e.preventDefault()
    console.log("submit" ) 

   
    setName('')
    setEmail('')
    setDescrição(' ') 
    
    const response= await Api.post(`/`,{
      name,
      email,
      description
    })
   if(response){
    setName('')
    setEmail('')
    setDescrição('')
     setAuth(true)
   }
    
   



 }

  async function handleDelete(id){
 await   Api.delete(`/${id}`)
  
 setAuth(true) 
}

async function handleUpdate(id){

     
    const update=  await Api.put(`/${id}`,{
    name,
    email,
    description
  })
  if(update){
    setName('')
    setEmail('')
    setDescrição('')
  }
  setAuth(true)
}
  
  return (
<Header>
   <Title>
      <ul>
        <li>nome</li>
        <li>email</li>
        <li>descrição</li>

      </ul>
   </Title>
   <Inputs>
      <form  onSubmit={handleSubmit}>
    <input type="text" placeholder="digite seu nome" required onChange={(e)=>setName(e.target.value)} value={name}/>
    <input type="email" placeholder="digite seu email" required  onChange={(e)=>setEmail(e.target.value)} value={email}/>
    <input type="text" placeholder="sua descrição" required  onChange={(e)=>setDescrição(e.target.value)}  value={description}/>
    <button type='submit'>cadastrar</button>
       </form>
   </Inputs>
   <Result>
      <div>
       {allnotes.map((item,key)=>{
        
         
        return(
            
           <Table key={key}>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.description}</div>
            <div onClick={()=>handleDelete(item._id)} >
               <DeleteOutlineIcon/> 
            </div>
             <div onClick={()=>handleUpdate(item._id)}>
             <EditIcon/>
             </div>
           
           </Table>
        
        )
       })}
      </div>
   </Result>
</Header>

  )
}

export default Todolist