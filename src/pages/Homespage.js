import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Forms } from "./Forms";
import Detailtodo from "./Detailtodo";

const Homes = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [content, setContent] = useState("");

    useEffect(() => {
        getData();
    }, []);

    // Ambil data
    const getData = async () => {
        let config = {
            method: "get",
            url: "https://api.todoist.com/rest/v1/tasks",
            headers: {
                Authorization: `Bearer 28fa7ecf174234dbe37e218dee6f56da5aaffb86`,
            },
        };
        try {
            const response = await axios(config);
            console.log(response.data);
            setList(response.data);
        } catch (error) {
            alert(error);
        }
    };

    // Tambah data
    const addData = async () => {
        let axios = require("axios");
        var data = JSON.stringify({
            content: content,
            due_string: "tomorrow at 12:00",
            due_lang: "en",
            priority: 4,
        });
        let config = {
            method: "post",
            url: "https://api.todoist.com/rest/v1/tasks",
            headers: {
                Authorization: "Bearer 28fa7ecf174234dbe37e218dee6f56da5aaffb86",
                "Content-Type": "application/json",
            },
            data: data,
        };
        try {
            const response = await axios(config);
            console.log(JSON.stringify(response.data));
            getData();
        } catch (error) {
            alert(error);
        }
    };

    const changeData = (event) => {
        setContent(event.target.value);
        getData();
    };

    // Delete data
    const handleDelete = (item) => {
        let config = {
            method: "delete",
            url: `https://api.todoist.com/rest/v1/tasks/${item.id}`,
            headers: {
                Authorization: "Bearer 28fa7ecf174234dbe37e218dee6f56da5aaffb86",
            },
        };
        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                getData();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleDetailPage = (item) => {
        navigate(`/edit/${item.id}`, {
            state: {
                id: item.id,
                content: item.content,
            },
        });
    };

    return (
        <div className="">
            <Forms ganti={changeData} />
            <Button className="mt-1 mb-2" onClick={() => addData()}>
                Add Data
            </Button>
            <h1 className="mb-2 mt-5">TODO LIST</h1>
            {list.map((item, i) => {
                return (
                    <Detailtodo key={i} getData={getData} id={item.id} konten={item.content} angka={i + 1} edit={() => handleDetailPage(item)} deletes={() => handleDelete(item)} />
                );
            })}
        </div>
    );
};

export default Homes;
