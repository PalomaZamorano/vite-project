import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import List from "./components/List";
//import NoControlado from "./components/NoControlado"
const objectList = [

   {  id: 1,
      input: "inicio input1...",
      textarea: "inicio textarea2...",
      select: "Shishi"
   },
   {  id: 2,
      input: "inicio input2...",
      textarea: "inicio textarea2...",
      select: "Robinson"
   },
   {  id: 3,
      input: "inicio input...",
      textarea: "inicio textarea...",
      select: "Shishi"
   }

]
const initialList = JSON.parse(localStorage.getItem('list'))  || []

const App = () => {

   const [list, setlist] = useState(initialList)

   useEffect(() => {
      localStorage.setItem('list', JSON.stringify(list)) //cada vez que se inicie se va a guardar una vez la lista cómo string en el navegador
   }, [list])

   const addlist = newlist => {
      setlist([...list, newlist])
   }

   const removelistelement = id => {
     const newArray =  list.filter(l => l.id !== id)
     setlist(newArray)
   }

   const updateList = id => {
      const newArray =  list.map((l) => {
         if (l.select === 'Robinson' &&  l.id === id)
            l.textarea = 'Soy un gato gordo'
           return l
         }
      )
      setlist(newArray)
    }
   const ordenarArray = (array) => {
      return array = array.sort((a) => {
         if(a.select === 'Shishi') return -1;
         if(a.select === 'Robinson') return 1;
      });
   }

   return (
            <div className="container">
               <Formulario addlist={addlist}/>
               <List list={ordenarArray(list)} removelistelement={removelistelement} updateList={updateList}/>
            </div>
            )

}

export default App
