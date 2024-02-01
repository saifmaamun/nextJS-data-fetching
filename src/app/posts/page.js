
const Posts = async () => {
    const res = await fetch("http://localhost:5000/posts", {
        // cache: "force-cache"
        next: { revalidate: 100 }
    });
    const posts = await res.json();
    console.log(posts)
    return (
        <div className="w-full">
            {posts.map(posts =>
                <div key={posts.id} className="card w-9/12  bg-slate-500 mx-auto my-4 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{posts.title}</h2>
                        <p>{posts.description}</p>
                        <p>Likes Count: {posts.likes_count}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>)}

        </div>
    );
};

export default Posts;