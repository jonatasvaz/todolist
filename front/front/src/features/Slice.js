 import {createApi,fetchBaseQuery}from "@reduxjs/toolkit/query/react"

 const userApi=createApi({
    reducerPath:'useApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000'}),
    endpoints:(builder)=>({
        addUser:builder.mutation({
            query:(user)=>({
                url:"",
                body:user,
                method:"Post",
            })
        }),
        getUser:builder.query({
            query:() =>""
        
        })
    })
 })


 export default userApi
 