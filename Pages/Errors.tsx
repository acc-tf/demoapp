import * as React from "react";
import {Row, Col} from "react-bootstrap";
import { ErrorItem } from "../Components/errorItem";
import errorItems from "../data/error.json";

export function Errors(){
    return (
        <>
        <h1>Errors</h1>
        <Row className="g-3">
            {errorItems.map(item => (
                <Col key = {item.id}>
                    <ErrorItem {...item} />
                </Col>
            ))}
        </Row>
        
        
        </>
    )
}