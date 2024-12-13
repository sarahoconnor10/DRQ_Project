import axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from 'react-toastify';

const Animal = (props) => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/api/Animals/' + props.animal._id)
            .then((res) => {
                props.Reload();
                setShowModal(false);
                toast.success(`${props.animal.name}'s listing has been removed successfully.`);
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to delete the animal. Please try again.");
            });
    }

    useEffect(() => {
        // console.log("Animal item: ", props.animal)
    }, [props.animal]);

    return (
        <div >
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
                        <Button variant="outline-danger" onClick={() => setShowModal(true)} style={{margin: 2.5}}>Remove</Button>   
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to remove <strong>{props.animal.name}'s</strong> listing? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Animal;