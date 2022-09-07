import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Detailtodo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [content, setContent] = useState(location.state.content);

    console.log("halo");

    const handleSubmit = () => {
        const data = JSON.stringify({
            content: content,
        });
        const config = {
            method: "post",
            url: `https://api.todoist.com/rest/v1/tasks/${location.state.id}`,
            headers: {
                Authorization: "Bearer 28fa7ecf174234dbe37e218dee6f56da5aaffb86",
                "Content-Type": "application/json",
            },
            data,
        };

        axios(config)
            .then((response) => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error, "error fren");
            });
    };

    const handleChangeContent = (event) => {
        setContent(event.target.value);
    };

    return (
        <>
            <Form onChange={handleChangeContent} value={content}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fs-2">Edit Content</Form.Label>
                    <Form.Control type="text" placeholder="Edit Task" value={content} />
                </Form.Group>
            </Form>
            <Button onClick={() => handleSubmit()}>posting</Button>
        </>
    );
};

export default Detailtodo;
