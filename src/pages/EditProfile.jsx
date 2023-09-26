import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditProfile = () => {
         const {id} = useParams()
         const [blog, setblog] = useState();


         useEffect(() => {
                  getSingleBlog()
         }, []);

         async function getSingleBlog(){
                 try {
                  const {data} = await axios.get('http://localhost:5000/api/v2/newBlog/' + id)
                  // const {data} = await publiRequest.get(`newBlog/${id}`)
                  console.log(data)
                  setblog(data)
                  console.log(data)
                 } catch (error) {
                  console.log(error)
                 }
         }
  return (
    <div>
         {
                  blog&&
                  <div>
                  <h1>{blog.title}</h1>
                  <p>{blog.desc}</p>
                  <p>{blog.author}</p>
                  <p>{blog.publishYear}</p>
               </div>
         }
    </div>
  )
}

export default EditProfile
