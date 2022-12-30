import React from "react";
import { Card, Row , Col} from "react-bootstrap";

type errorItemProps = {
    id: number
    title: string
    description: string
}
export function ErrorItem({id, title, description}: errorItemProps){
    return <Card>
        <Row>
            <Col>ID</Col>
            <Col>TITLE</Col>
            <Col>DESCRIPTION</Col>
        </Row>
        <Card.Body className="d-flex flex-column">
            
                <Card.Title className="d-flex
            justify-content-between " id="content">
                
                <p className="ms-2 text-muted">{id}.</p>
                <p className="ms-2 text-muted">{title}</p>
                <p className="ms-2 text-muted">{description}</p>
                
            </Card.Title>
        </Card.Body>
    </Card>
}