import axios from "axios";
import { useState } from "react";

//form to input animal data + submit button

const CreateListing = () => {
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const animal = { id, name, animalType, age, image };
        console.log(animal);

        axios.post('http://localhost:4000/api/Animals', animal)
            .then((res) => { console.log(res.data) })
            .catch();
    }

    return (
        <div>
            <h1>Create new listing</h1>
            <form onSubmit={ handleSubmit }>
            <div className="form-group">
                    <label>Animal ID:</label>
                    <input type="text"
                        className="form-control"
                        value={id}
                        onChange={(e) => { setID(e.target.value) }}
                    />
                </div>
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
    );
}

export default CreateListing;