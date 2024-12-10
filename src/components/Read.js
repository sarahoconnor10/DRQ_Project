import Animal from "./Animal";
import { useState } from "react";

const Read = () => {
   const [animals, setAnimals] = useState([]);


    
    return (
        <div>
            <Animal animalData={animals}/>
        </div>
    )
}

export default Read;