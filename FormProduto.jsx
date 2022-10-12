import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { } from "react-icons"
import { FaLocationArrow, FaRegTimesCircle } from "react-icons/fa"


export default function FormProduto(){

    let {id} = useParams()

    

    const [novo,setNovo] = useState({
        codigo: id,
        titulo: "",
        preco: "",
        quantidade: ""
    })

    let metodo = "post"

    if(id){
        metodo = "put"
    }

    const handleChange = e => {
        setNovo({...novo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch(`http://localhost:8080/LojaApp/rest/produto/${id ? id : ""}`,{
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo) 
        }).then(()=>{
            Window.location = "/"
        })
    }

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/LojaApp/rest/produto/${id}}`)
            .then((resp)=> {
                return(resp.json())
            }).then(data=>{
                setNovo(data)
            })
        }
    },[id])
    return(
        <div>
        <h1>Form Produto</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="titulo" value={novo.titulo}
            placeholder="Titulo" onChange={handleChange}/> <br />
             <input type="number" name="preco" value={novo.preco}
            placeholder="Preço" onChange={handleChange} step = "0.01"/> <br />
             <input type="number" name="quantidade" value={novo.quantidade}
            placeholder="Quantidade" onChange={handleChange}/> <br />
            <button><FaLocationArrow/></button>
            <Link to="/"><FaRegTimesCircle/></Link>
        </form>
        </div>
    )
}