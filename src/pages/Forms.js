import React from "react";
import { Form } from "react-bootstrap";

export const Forms = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-2">Content</Form.Label>
                <Form.Control type="email" placeholder="Enter Content" />
                {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
            </Form.Group>
        </Form>
    );
};
