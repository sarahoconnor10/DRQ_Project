// useEffect() + card to display animal details 
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const Animal = (props) => {
    return (
        <div>
            <Card>
                <Card.Header>
                    Header
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src="" alt="" />
                        <footer>Footer</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Animal;