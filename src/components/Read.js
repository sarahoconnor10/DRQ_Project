import { useEffect, useState } from "react";
import AdoptableAnimals from "./AdoptableAnimals";
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
            <AdoptableAnimals Animals={animals} />
        </div>
    );
}

export default Read;