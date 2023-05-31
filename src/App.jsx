import { useState } from "react";
import Formulario from "./components/Formulario";
import List from "./components/List";
//import NoControlado from "./components/NoControlado"
const objectList = [

   {  id: 1,
      input: "inicio input1...",
      textarea: "inicio textarea2...",
      select: true
   },
   {  id: 2,
      input: "inicio input2...",
      textarea: "inicio textarea2...",
      select: false
   },
   {  id: 3,
      input: "inicio input...",
      textarea: "inicio textarea...",
      select: true
   }

]

const App = () => {

   const [list, setlist] = useState(objectList)

   return (
            <div className="container">
               <Formulario />
               <List list={list} />
            </div>
            )

}

export default App
