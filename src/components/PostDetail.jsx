import axios from "axios"
import { useParams, } from "react-router-dom"
import { useState, useEffect, use } from "react"


export default function PostDetail() {

    // desctucturing per riornare l'id
    const { id } = useParams()

    // settiamo lo stato al componente
    const [post, setPost] = useState({})

    // chamiamo la rotta store
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id} `)
            .then(response => setPost(response.data))
            .catch(error => console.log(error))
    }

    useEffect(() => fetchPost(),
        [])

    return (
        <>
            <h1>{post.title}</h1>
        </>
    )
}