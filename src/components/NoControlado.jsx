import { useRef, useState } from "react";

const NoControlado  = () => {

    const form = useRef(null)
    const [error,seterror] = useState("")

    //función que toma el evento click
    const handlesubmit = (e) => {
        e.preventDefault();
        const data = new FormData(form.current) //Se extrae data del formulario actual
        const {input, select, textarea} = Object.fromEntries([...data.entries()]) //javascript, tranforma las tuplas en objetos
        console.log(input, select, textarea)
        if (input !== "hola"){
            seterror("este es un error")
            console.log(error)
        }

    }

    return (
        <div className="container">
            <form onSubmit= {handlesubmit} ref={form}>
                <div className="alert alert-primary" role="alert">
                    {error}
                </div>
                <h1> Soy un formulario bonitooo miauu</h1>
                <input name="input" type="text" placeholder="Escribe..." className="form-control mb-2"/>
                <textarea name="textarea"  className="form-control mb-2"> soy un texto sobre gatos indoor</textarea>
                <select name="select" className="form-select mb-2">
                    <option value="Shishi"> Shishi</option>
                    <option value="Robinson"> Robinson</option>
                </select>
                <button type="submit" className="btn btn-primary">Enviar gato favorito</button>
            </form>
        </div>
        )


}
export default NoControlado