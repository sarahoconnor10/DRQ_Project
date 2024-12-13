import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Animal = (props) => {
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/Animals/' + props.animal._id)
            .then((res) => {
                props.Reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        // console.log("Animal item: ", props.animal)
    }, [props.animal]);

    return (
            <Card style={{width: "18rem"}} border="muted" className="mb-5">
                <div className="App mt-2">
                <Card.Img
                    alt={props.animal.name}
                    src={props.animal.image}
                    style={{ height: 230, width: "17rem", border:"2px solid grey" }}
                    variant="top"
                />
                </div>
                <Card.Body>
                    <Card.Title>{props.animal.name}</Card.Title>
                    <Card.Subtitle>
                        {props.animal.animalType}, Age {props.animal.age}
                    </Card.Subtitle>
                    <Card.Text>
                        {props.animal.description}
                    </Card.Text>
                    <div className="App">
                        <Link to={"/edit/" + props.animal._id} className="btn btn-outline-primary" style={{margin: 2.5}}>Edit</Link>
                        <Button variant="outline-danger" onClick={handleDelete} style={{margin: 2.5}}>Remove</Button>   
                    </div>
                </Card.Body>
            </Card>
    );
}

export default Animal;