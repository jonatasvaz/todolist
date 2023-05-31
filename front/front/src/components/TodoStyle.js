import styled from"styled-components"


export const Header= styled.div`
  margin:auto; 
 width:100%;
 height:30px;
 margin-top: 50px;

`
export const Title=styled.div`

ul{
    display:flex;
    justify-content: space-around;
    border: 2px solid black;
    border-radius: 12px;
   // background-color: rgb(60, 60, 60);
   background: linear-gradient(to right, #556270, #ff6b6b);
    width: 60%;
    margin: auto;
    padding: 3px 30px;
}

li{
   
  
    list-style: none;
    font-size: 22px;
    font-weight: 600;
     color: #fff;
     
}
@media (min-width: 380px) and (max-width:480px){
  li{
    font-size: 16px;
  }
}

`
export const Inputs=styled.div`

 width:60%;
margin: auto;
margin-top: 40px;

  form{
    display: flex;
 justify-content: space-around;
 
    }


    input{
        height: 18px;
        width: 190px;
        border-radius: 8px;
        padding: 4px;
        margin: 10px;
    }
    button{
        border-radius: 6px;
        border: none;
        background-color:rgb(105,105,105);
        color: #fff;
        font-size: 18px;
        padding: 2px 4px;
        height: 30px;
        margin-top: 10px;
       border: 2px solid rgb(105,105,105);
       text-transform: uppercase;
       font-weight: 500;
    }
    button:hover{
        cursor: pointer;
        color: #000 ;
        background-color: #fff;
        border: 2px solid #000;
   
        transition:  0.7s;
  
 
    }

    @media (min-width: 481px) and (max-width:768px ) {
        form{
          display: block;
          
        }
      input{
        display: block;
        justify-content: center;
        margin: 30px auto;
      
      }
      button{
        display: block;
        margin: auto;
      }
    }


    @media (min-width: 380px) and (max-width:480px){
      form{
          display: block;
          
        }
      input{
        display: block;
        justify-content: center;
        margin: 30px auto;
      
      }
      button{
        display: block;
        margin: auto;
      }
    
    }

`

export const Result = styled.div`
margin: auto;
margin-top: 45px;
border-radius:  6px ;

width: 80%;

`

export const Table=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
 // background-color: rgb(210, 210, 210);
background: transparent;
  div{
    font-size: 20px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    color: black;
    font-weight: 600;
    background-color: rgb(240, 240, 240);
   overflow: hidden;
  }
`