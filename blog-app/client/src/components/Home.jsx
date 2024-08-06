import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";


export default function Home() {
    const [posts, setPosts] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getPosts() {
            const response = await fetch(`http://localhost:5050/blog/`);
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
                <> <div className="homepage"> 
                 <Post
                  key={post._id}
                  id={post._id}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                  body={post.body}
                  tags={post.tags}
                />
                </div></>
            );
        });
    }    
    
    return (
        <div>
            {postList()}
        </div>
    );
}