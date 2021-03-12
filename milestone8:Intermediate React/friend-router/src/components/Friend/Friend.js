import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const friendStyle = {
        border: '1px solid blue',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <h3>Email: {email}</h3>
            <h2>
                ID: <Link to={`/friend/${id}`}><button>show detail of {id}</button></Link>
            </h2>
        </div>
    );
};

export default Friend;