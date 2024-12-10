import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//form to input animal data + submit button

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

        axios.post('http://localhost:4000/api/Animals', animal)
            .then((res) => { 
                console.log(res.data);
                navigate('/');
             })
            .catch();
    }

    return (
        <div className="App">
            <h1>Create new listing</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Name: </label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Type: </label>
                    <input type="text"
                        className="form-control"
                        value={animalType}
                        onChange={(e) => { setAnimalType(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Age: </label>
                    <input type="text"
                        className="form-control"
                        value={age}
                        onChange={(e) => { setAge(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Image link: </label>
                    <input type="text"
                        className="form-control"
                        value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                    />
                </div>
                <br></br>
                <div>
                    <input type="submit" value="Create listing" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default CreateListing;