"use client";
import React, { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((user) => setUsers(user));
    }, []);
    return <div className="w-full">
        {users.map(user =>
            <div key={user.id} className="card w-9/12  bg-slate-500 mx-auto my-4 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{user.name}</h2>
                    <p>{user.email}</p>

                </div>
            </div>)
        }

    </div >;
};

export default Users;
