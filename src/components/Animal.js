// useEffect() + card to display animal details 
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Animal = (props) => {
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/Animals/' + props.animal._id)
        .then((res)=>{
            props.Reload();
          })
          .catch((error)=>{
            console.log(error);
          });
    }

    useEffect(() => {
        // console.log("Animal item: ", props.animal)
    }, [props.animal]);

    return (
        <div>
            <Card>
                <Card.Header>{props.animal.name}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.animal.image} alt={props.animal.name} />
                        <footer>{props.animal.animalType}</footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/" + props.animal._id} className="btn btn-primary">Edit</Link>
                <Button className="btn btn-danger" onClick={handleDelete}>Delete</Button>
            </Card>
        </div>
    );
}

export default Animal;