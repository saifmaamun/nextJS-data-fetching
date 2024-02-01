import Link from "next/link";
import styles from "./Post.module.css"

const Posts = async () => {
    const res = await fetch("http://localhost:5000/posts", {
        // cache: "force-cache"
        // next: { revalidate: 100 }
        cache: "no-store"
    });
    const posts = await res.json();

    return (
        <div className="w-full">
            <div className={styles.header_text}>
                <p>Total Post : {posts.length}</p>
            </div>
            {posts.map(post =>
                <div key={post.id} className="card w-9/12  bg-slate-500 mx-auto my-4 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <p>Likes Count: {post.likes_count}</p>
                        <div className="card-actions justify-end">
                            <Link href={`posts/${post.id}`}> <button className="btn btn-primary">See More</button></Link>
                        </div>
                    </div>
                </div>)
            }

        </div >
    );
};

export default Posts;