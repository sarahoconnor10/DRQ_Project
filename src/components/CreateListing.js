import axios from "axios";
import Form from 'react-bootstrap/Form'
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateListing = () => {
    const [name, setName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const animal = { name, animalType, age, image };
        console.log(animal);
        if (animal.name !== "" && animal.animalType !== "" &&
            animal.age !== "" && animal.image !== "") {
            axios.post('http://localhost:4000/api/Animals', animal)
                .then((res) => {
                    console.log(res.data);
                    navigate('/');
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    return (
        <div className="container">
            <h1>Create new listing</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Animal Name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Animal Type</Form.Label>
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
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Animal Age"
                        value={age}
                        onChange={(e) => { setAge(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image Link</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Image Link"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }} />
                </Form.Group>
                <Button variant="outline-primary" type="submit" onClick={handleSubmit}>
                    Create Listing
                </Button>
            </Form>
        </div>
    );
}

export default CreateListing;