import React from "react";
import { Form } from "react-bootstrap";

export const Forms = ({ ganti, posting }) => {
    return (
        <Form onSubmit={posting} onChange={ganti}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-2">Add Content</Form.Label>
                <Form.Control type="text" placeholder="Enter Content" />
                {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
            </Form.Group>
        </Form>
    );
};
