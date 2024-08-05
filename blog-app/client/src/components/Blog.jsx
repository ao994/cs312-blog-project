import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Post from "./Post";


export default function Home() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState("");

    //get username from url
    const params = useParams();

    // This method fetches the users posts from the database.
    useEffect(() => {
        async function getPosts() {
            const username = params.username?.toString() || undefined;
            if(!username) return;
            const response = await fetch(`http://localhost:5050/blog/${params.username.toString()}/posts`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const posts = await response.json();
            setPosts(posts);
        }
        async function getUser() {
            const username = params.username?.toString() || undefined;
            if(!username) return;
            const response = await fetch(`http://localhost:5050/blog/${params.username.toString()}`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const user = await response.json();
            setUser(user);
        }
        getUser();
        getPosts();
        return;
    }, [posts.length, params.username]);

    function headerInfo() {
        return (
            <>
            <h1>{user.blogTitle}</h1>
            <p>{user.blogDescription}</p>
            </>
        )
    }

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
            {headerInfo()}
            {postList()}
        </div>
    );
}