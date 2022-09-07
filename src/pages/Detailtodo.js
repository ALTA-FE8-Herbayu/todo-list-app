import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Detailtodo = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [content, setContent] = useState(location.state.content);

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
            <input type="text" style={{ borderRadius: "30px", color: "black" }} onChange={handleChangeContent} placeholder="edit task" value={content} />
            <button onClick={() => handleSubmit()}>posting</button>
        </>
    );
};

export default Detailtodo;
