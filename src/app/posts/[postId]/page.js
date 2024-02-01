import Link from 'next/link';

import React from 'react';
export async function generateStaticParams() {
    const posts = await fetch('http://localhost:5000/posts').then((res) => res.json())
    console.log(posts)
    const ids = posts.map(post => {
        return {
            id: post.id,
        }
    })
    return ids
}



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