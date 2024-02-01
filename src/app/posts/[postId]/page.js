import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const id = params.postId
    const res = await fetch(`http://localhost:5000/posts/${id}`);
    const post = await res.json();

    return (
        <div key={post.id} className="card w-9/12  bg-slate-500 mx-auto my-4 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                <p>Likes Count: {post.likes_count}</p>
                <div className="card-actions justify-end">
                    <Link href="/posts"> <button className="btn btn-secondary">Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;