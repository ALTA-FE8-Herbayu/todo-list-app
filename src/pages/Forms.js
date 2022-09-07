import React from "react";
import { Form } from "react-bootstrap";

export const Forms = ({ ganti }) => {
    return (
        <Form onChange={ganti}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-2">Add Content</Form.Label>
                <Form.Control type="text" placeholder="Enter Content" />
            </Form.Group>
        </Form>
    );
};
