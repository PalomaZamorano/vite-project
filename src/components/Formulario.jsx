import {useState } from "react";
import Swal from "sweetalert2";
import propTypes from 'prop-types';

const Formulario = ({addlist}) => {
    const [objeto, setobjeto] = useState({ // Para evitar setear cada elemento lo hacemos de un objeto padre que los contiene
                                           // y utilizamos Onchange para su mutación

        input: "inicio input...",
        textarea: "inicio textarea...",
        select: "shishi"
    })
    const randomid = Math.floor(Math.random() * 100) + 1;

    //función que toma el evento click
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!objeto.input.trim()){
            return (
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No ha tipeado',
                    footer: '<a href="">Why do I have this issue?</a>'
                }))
        }
        const newList =  {id: randomid,
                         input: "inicio input... " + randomid,
                         textarea: "inicio textarea... " + randomid,
                         select: "Shishi"}
        addlist(newList)

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
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
                <div>
                    <button type="submit" className="btn btn-primary">Enviar gato favorito</button>
                </div>
            </form>
        </div>
        )


}

Formulario.propTypes = {
    addlist: propTypes.func.isRequired
};

export default Formulario