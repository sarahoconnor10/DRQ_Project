// useEffect() + card to display animal details 
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


const Animal = (props) => {
    useEffect(() => {
        console.log("animal item: ", props.animal)
    }, [props.animal]);

    return (
        <div>
             <Card>
                <Card.Header>{props.animal.name}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.animal.image} alt={props.animal.name} />
                        <footer>{props.animal.animalType}, Age {props.animal.age}</footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/" + props.animal.id} className = "btn btn-primary">Edit</Link>
            </Card>
        </div>
    );
}

export default Animal;