import * as React from "react";
import {Row, Col} from "react-bootstrap";
import { UserItem } from "../Components/userItem";
import userItems from "../data/user.json";

export function Users(){
    return (
        <>
        <h1>Users</h1>
        <Row className="g-3">
            {userItems.map(item => (
                <Col key = {item.id}>
                    <UserItem {...item} />
                </Col>
            ))}
        </Row>
        
        
        </>
    )
}