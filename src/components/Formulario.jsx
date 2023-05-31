import { useState } from "react";

const Formulario = () => {
    const [objeto, setobjeto] = useState({ // Para evitar setear cada elemento lo hacemos de un objeto padre que los contiene
                                           // y utilizamos Onchange para su mutación

        input: "inicio input...",
        textarea: "inicio textarea...",
        select: "shishi"
    })
    //función que toma el evento click
    const handlesubmit = (e) => {
        e.preventDefault();
    }

    const handleonchange = (e) => {
        const {name, value} = e.target
        setobjeto({
            ...objeto,
            [name]: value})
    }

    return (
        <div className="container">
            <form onSubmit= {handlesubmit}>
                <h1> Soy un formulario bonitooo miauu</h1>
                <input name="input" type="text" placeholder="Escribe..." className="form-control mb-2" onChange={handleonchange}/>
                <textarea name="textarea"  className="form-control mb-2" onChange={handleonchange} > soy un texto sobre gatos indoor</textarea>
                <select name="select" className="form-select mb-2" onChange={handleonchange}>
                    <option value="Shishi"> Shishi</option>
                    <option value="Robinson"> Robinson</option>
                </select>
                <button type="submit" className="btn btn-primary">Enviar gato favorito</button>
            </form>
        </div>
        )


}
export default Formulario