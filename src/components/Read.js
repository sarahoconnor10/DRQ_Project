import Animal from "./Animal";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {
   const [animals, setAnimals] = useState([]);

   useEffect(() => {
    axios.get('http://localhost:4000/api/Animals')
        .then((response) => {
            //console.log(response.data);
            setAnimals(response.data.animals);
        })
        .catch((error) => {
            console.log(error);
        });
    });
    
    return (
        <div>
            <Animal animalData={animals}/>
        </div>
    )
}

export default Read;