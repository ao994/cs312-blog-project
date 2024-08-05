import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";


export default function Home() {
    const [posts, setPosts] = useState([]);

    // This method fetches the users posts from the database.
    useEffect(() => {
        async function getPosts() {
            const response = await fetch(`http://localhost:5050/blog/:username/posts`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const posts = await response.json();
            setPosts(posts);
        }
        getPosts();
        return;
    }, [posts.length]);


    function postList() {
        return posts.map((post) => {
            return (
                <Post
                  key={post._id}
                  id={post._id}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                  body={post.body}
                  tags={post.tags}
                />
            );
        });
    }    
    
    return (
        <div>
            <h1>{}</h1>
            {postList()}
        </div>
    );
}