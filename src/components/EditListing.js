import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

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
        <div className="container">
            <h1>Edit Listing</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Edit Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Animal Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Edit Animal Type</Form.Label>
                    <Form.Select
                        value={animalType}
                        onChange={(e) => { setAnimalType(e.target.value) }}
                    >
                        <option>Choose Animal Type</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Small Mammal">Small mammal</option>
                        <option value="Other">Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Edit Age</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Animal Age"
                        value={age}
                        onChange={(e) => { setAge(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Edit Image Link</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Image Link"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }} />
                </Form.Group>
                <Button variant="outline-primary" type="submit" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Form>
        </div>
    );
}

export default EditListing;