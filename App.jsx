import FormProduto from "./Components/FormProduto"
import ListaProduto from "./Components/ListaProdutos"
import{ BrowserRouter , Routes, Route} from 'react-router-dom'
export default function App(){

    return(
        <BrowserRouter>
         <Routes>
            <Route path="/" element = {<ListaProduto/>}/>
            <Route path="/incluir" element = {<FormProduto/>}/>
            <Route path="/editar/:id" element = {<FormProduto/>} />
         </Routes>
        </BrowserRouter>
    )
}