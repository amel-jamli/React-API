import axios from 'axios';
import React, { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import UserCard from "./UserCard"

function UserList({ listOfUSer, setListOfUSer }) {


    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://jsonplaceholder.typicode.com/users",
            );
            setListOfUSer(result.data);
        }
        fetchData();
    }, []);

    return (
        <div >
            <Row>
                {listOfUSer.map((user) => <UserCard key={user.id} user={user} />)}
            </Row>
        </div>
    );
}
export default UserList
