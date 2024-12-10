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
        <div className="App" style={{
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "center", 
                                margin: 10}}>
            <Card style={{width: "18rem"}} border="muted">
                <Card.Img
                    alt={props.animal.name}
                    src={props.animal.image}
                    style={{ height: 280, width: "18rem" }}
                    variant="top"
                />
                <Card.Body>
                    <Card.Title>{props.animal.name}</Card.Title>
                    <Card.Text>
                        {props.animal.animalType}, Age {props.animal.age}
                    </Card.Text>
                    
                    <Link to={"/edit/" + props.animal._id} className="btn btn-primary" style={{margin: 2.5}}>Edit</Link>
                    <Button className="btn btn-danger" onClick={handleDelete} style={{margin: 2.5}}>Delete</Button>
                    
                </Card.Body>
            </Card>
        </div>
    );
}

export default Animal;