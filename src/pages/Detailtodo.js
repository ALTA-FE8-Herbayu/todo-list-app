import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Detailtodo = ({ konten, angka, deletes }) => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th style={{ width: "2rem" }}>No</th>
                            <th style={{ width: "49rem" }}>Kegiatan</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{angka}</td>
                            <td>{konten}</td>
                            <td style={{ width: "19rem" }}>
                                <Button variant="success">Edit</Button>
                            </td>
                            <td style={{ width: "19rem" }}>
                                <Button type="submit" variant="danger" href="/" onClick={deletes}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Detailtodo;