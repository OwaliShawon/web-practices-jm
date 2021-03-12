import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setfriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(response => response.json())
            .then(data => setfriend(data))
    }, [])

    return (
        <div>
            <h1>This is friend details of ID: {friendId}</h1>
            <h1>NAME: {friend.name}</h1>
            <h2>Email: {friend.email}</h2>
            <h3>Phone: {friend.phone}</h3>
            <h4>Website: {friend.website}</h4>
            {/* <h3>{friend.address.zip}</h3> */}

        </div>
    );
};

export default FriendDetail;