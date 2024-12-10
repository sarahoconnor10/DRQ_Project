import { useEffect, useState } from "react";
import AdoptableAnimals from "./AdoptableAnimals";
import axios from "axios";

const Read = () => {
    const [animals, setAnimals] = useState([]);

    const ReloadData = () => {
        axios.get('http://localhost:4000/api/Animals')
        .then((res) => {
            console.log(res.data);
            setAnimals(res.data.animals);
        })
        .catch((e) => {
            console.log(e);
        });
    }
    
    useEffect(() => {
        ReloadData();
    }, []);

    return (
        <div>
            <AdoptableAnimals Animals={animals}  ReloadData={ReloadData}/>
        </div>
    );
}

export default Read;