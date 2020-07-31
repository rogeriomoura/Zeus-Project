import React, { useState } from 'react';
import { Card, Face1, Face2, Face1Content, Face2ContentP , ContentImg, FaceH3 } from '../styles/NavBarAndCardStyles';
// import Modal from 'react-modal';
import { Button, Modal } from 'react-bootstrap';

const ItemCard = ({ name, price, description, imageUrl, props, key }) => {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <Card key={key}>
            <Face1>
                <Face1Content>
                    <ContentImg src={imageUrl} alt="Product"/>
                    <FaceH3>{ name }</FaceH3>
                </Face1Content>
            </Face1>
            <Face2>
                <div>
                    <Face2ContentP>${price}</Face2ContentP><br></br>
                    <Face2ContentP>{description}</Face2ContentP><br></br>
                    <div>
                        <Button varient="primary" onClick={handleOpen}>Item Info</Button>
                        <Modal show={show} onHide={handleClose}
                            {...props}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    { name }
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ContentImg src={imageUrl} alt="Product"/> 
                                { description }<br></br>
                                ${ price }
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleClose}>Close</Button>
                                <Button onClick={handleClose}>Add to Cart</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </Face2>
        </Card>
    );
}

export default ItemCard;