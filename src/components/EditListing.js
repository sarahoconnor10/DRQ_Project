import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const EditListing = (props) => {
    let { id } = useParams();
    const [name, setName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/Animals/' + id)
            .then((response) => {
                setName(response.data.name);
                setAnimalType(response.data.animalType)
                setAge(response.data.age);
                setImage(response.data.image);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAnimal = { id, name, animalType, age, image };
        axios.put('http://localhost:4000/api/Animals/' + id, newAnimal)
            .then((res) => {
                console.log(res.data);
                navigate('/read');
            });
    }


    return (
        <div>
            <h1>Edit Listing</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Type:</label>
                    <input type="text"
                        className="form-control"
                        value={animalType}
                        onChange={(e) => { setAnimalType(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="text"
                        className="form-control"
                        value={age}
                        onChange={(e) => { setAge(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Image link:</label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Create listing"></input>
                </div>
            </form>
        </div>
    )
}

export default EditListing;