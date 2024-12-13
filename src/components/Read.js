import { useEffect, useState } from "react";
import AdoptableAnimals from "./AdoptableAnimals";
import axios from "axios";
import { toast } from 'react-toastify';

const Read = () => {
    const [animals, setAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [animalType, setAnimalType] = useState("");

    // use Axios to reload data from the server
    const ReloadData = () => {
        axios.get('http://localhost:4000/api/Animals')
            .then((res) => {
                console.log(res.data);
                setAnimals(res.data.animals);
                setFilteredAnimals(res.data.animals);
            })
            .catch((e) => {
                console.log(e);
                toast.error("Animal not found.");
            });
    }

    useEffect(() => {
        ReloadData();
    }, []);

    // Handling filter by animal type
    const handleFilterChange = (e) => {
        const selected = e.target.value;
        setAnimalType(selected);

        if (selected === "") {
            setFilteredAnimals(animals); //show all
        }
        else {
            const filtered = animals.filter(animal => animal.animalType === selected);
            setFilteredAnimals(filtered);
        }
    }

    return (
        <div>
            <div style={{ margin: "1rem 0", textAlign: "center" }}>
                <label htmlFor="filter" style={{ marginRight: "0.5rem" }}>Filter by Animal Type:</label>
                <select
                    id="filter"
                    value={animalType}
                    onChange={handleFilterChange}
                    style={{ padding: "0.5rem", fontSize: "1rem" }}
                >
                    <option value="">All</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Small Mammal">Small Mammal</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <AdoptableAnimals Animals={filteredAnimals} ReloadData={ReloadData} />
        </div>
    );
}

export default Read;