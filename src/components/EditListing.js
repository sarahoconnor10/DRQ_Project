import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EditListing = () => {
    let { id } = useParams();
    const [name, setName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/Animals/' + id)
            .then((res) => {
                setName(res.data.name);
                setAnimalType(res.data.animalType)
                setAge(res.data.age);
                setImage(res.data.image);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnimal = { name, animalType, age, image };
        axios.put('http://localhost:4000/api/Animals/' + id, newAnimal)
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div>
            <h1>Edit Listing</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Type: </label>
                    <input type="text"
                        className="form-control"
                        value={animalType}
                        onChange={(e) => { setAnimalType(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Age: </label>
                    <input type="text"
                        className="form-control"
                        value={age}
                        onChange={(e) => { setAge(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Image Link: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Listing" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default EditListing;