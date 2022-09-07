import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Forms } from "./Forms";
import Detailtodo from "./Detailtodo";

const Homes = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([]);

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

    const handleDetailPage = (item) => {
        navigate(`edit/${item.id}`, {
            state: {
                id: item.id,
                content: item.content,
            },
        });
    };

    // Delete data
    const handleDelete = (item) => {
        var config = {
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

    return (
        <div className="">
            <Forms />
            <Button className="mt-1 mb-2">Add Data</Button>
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
