import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Card} from "react-bootstrap";
import { Link } from "react-router-dom";


const AnimalDetail = (props) => {
    let { id } = useParams();
    const [name, setName] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

   
    useEffect(() => {
        axios.get('http://localhost:4000/api/Animals/' + id)
        .then((res) => {
            setName(res.data.name);
            setAnimalType(res.data.animalType)
            setAge(res.data.age);
            setDescription(res.data.description);
            setImage(res.data.image);
        })
        .catch((e) => {
            console.error(e);
        });
    }, [id]);

    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={image} style={{ height: 300, objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{animalType}, Age {age}</Card.Subtitle>
                    <Card.Text>
                        {description || "No description available."}
                    </Card.Text>
                    <Link to="/" className="btn btn-primary" style={{margin: 2.5}}>Back to Animals</Link>
                    <Link to={"/edit/" + id} className="btn btn-outline-primary" style={{margin: 2.5}}>
                            Edit
                        </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AnimalDetail;



