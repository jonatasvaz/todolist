import styled from"styled-components"


export const Header= styled.div`
  margin:auto; 
 width:60%;
 height:30px;
 margin-top: 50px;

`
export const Title=styled.ul`

ul{
    display:flex;
    justify-content: space-evenly;
    border: 2px solid black;
    border-radius: 12px;
}

li{
    margin: 8px;
    margin-right: 150px;
    list-style: none;
    font-size: 22px;

}

`
export const Inputs=styled.div`
margin-left: 70px;
 width:90%;
 display: flex;
 justify-content: space-around;

    input{
        height: 18px;
        width: 160px;
        border-radius: 8px;
        padding: 4px;
        margin: 10px;
    }
    button{
        border-radius: 6px;
        border: none;
        background-color: rgb(90, 90, 90);
        color: #fff;
        font-size: 18px;
        padding: 6px;
    }
    button:hover{
        cursor: pointer;
        color: rgb(90, 90, 90) ;
        background-color: rgb(210, 210, 210);
 
    }

`

export const Result = styled.div`
margin: auto;
margin-top: 45px;
border: 2px solid black;
border-radius:  6px ;
background-color: rgb(210, 210, 210);
`

export const Table=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  div{
    font-size: 20px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    color: black;
    font-weight: 600;
    background-color: rgb(240, 240, 240);
  }
`