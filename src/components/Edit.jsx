import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Edit = () => {
    const location = useLocation();
    const [penampung, setPenampung] = useState([]);
    const [content, setContent] = useState("");

    const handleChange = () => {
        let data = JSON.stringify({
            content: content,
        });
        let config = {
            method: "post",
            url: `https://api.todoist.com/rest/v1/tasks/${location.state.id}`,
            headers: {
                Authorization: "Bearer 3d1d8b400ac7b81b81fc3369403005779dca728a",
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then((response) => {
                setPenampung(response.data);
            })
            .catch((error) => {
                alert("error fren");
            });
    };

    const handleSubject = (event) => {
        event.preventDefault();
        setPenampung(event.target.value);
        console.log(penampung);
    };

    const changeContent = (event) => {
        setContent(event.target.value);
    };

    return (
        <>
            <form>
                <input type="text" style={{ backgroundColor: "gray", borderRadius: "30px", color: "white" }} onChange={changeContent} placeholder={content} />
            </form>
            <button onClick={() => handleChange()}>posting</button>

            <form onSubmit={() => handleChange()}>
                <label for="subject">Subject</label>
                <input
                    className="bg-navy-600 rounded-full"
                    type="text"
                    id="subject"
                    name="Subject"
                    placeholder={location.state.konten}
                    onChange={(event) => handleSubject(event.target.value)}
                />

                <button type="submit">perbarui data</button>
            </form>
        </>
    );
};

export default Edit;
