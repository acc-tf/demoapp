import React from "react";
import { Card ,Row, Col} from "react-bootstrap";

type userItemProps = {
    id: number
    name: string
    email: string
    countrycode: number
    phno : number
}
export function UserItem({id, name, email, countrycode, phno}: userItemProps){
    return <Card>
        <Row>
            <Col>ID</Col>
            <Col>Name</Col>
            <Col>Email ID</Col>
            <Col>Country Code</Col>
            <Col>Contact no</Col>
        </Row>
        <Card.Body className="d-flex flex-column">
            
            <Card.Title className="d-flex
            justify-content-between align-items-baseline mb-4">

                <Row><Col><span className="ms-2 text-muted">{id}.</span></Col></Row>
                <Row><Col><span className="ms-2 text-muted">{name}</span></Col></Row>
                <Row><Col><span className="ms-2 text-muted">{email}</span></Col></Row>
                <Row><Col><span className="ms-2 text-muted">{countrycode}</span></Col></Row>
                <Row><Col><span className="ms-2 text-muted">{phno}</span></Col></Row>
            
            </Card.Title>
        </Card.Body>
    </Card>
}