import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Post from "./Post";


export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState("");
    const [newPost, setNewPost] = useState({
        title: "",
        author: "",
        body: "",
        tags: []
    });
    const [newTags, setNewTags] = useState([]);
    const [addTag, setAddTag] = useState("");

    //get username from url
    const params = useParams();

    // This method fetches the users posts from the database.
    useEffect(() => {
        async function getPosts() {
            const username = params.username?.toString() || null;
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
        //this fetches the users info from the database.
        async function getUser() {
            const username = params.username?.toString() || null;
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
            <div className="blogHeader">  
            <h1>{user.blogTitle}</h1>
            <p>{user.blogDescription}</p>
            </div>
            </>
        )
    }

    function postList() {
        return posts.map((post) => {
            return (
                <>
                <div className="blogInfo"> 
                <Post
                  key={post._id}
                  id={post._id}
                  title={post.title}
                  author={post.author}
                  date={post.date}
                  body={post.body}
                  tags={post.tags}
                />
                </div>
                </>
            );
        });
    }   
    
    //creating a new post
        //handles input form changes
    function handleChange(event) {
        const { name, value } = event.target;
    
        setNewPost(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
    }

    //handle adding a new tag
    function handleClick(e) {
        e.preventDefault(); 
        const nextTags = [
            // Pre existing:
            ...newTags,
            // New item:
            addTag 
        ];
        setNewTags(nextTags);
        setAddTag("");
    };

    async function createPost (e) {
        e.preventDefault(); 
        
        //set author
        const nPost = {...newPost , author: user.username, tags: newTags};

        //console the post
        console.log(nPost);

        //send to server
        await axios.post(`http://localhost:5050/blog/${params.username.toString()}`, nPost)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }).finally(function() {
            setNewTags([]);
            setNewPost({title: "",
                author: "",
                body: "",
                tags: []});
            location.reload();
          });
        
        
        
        
    };

    function addNewTags() {
        return(
        <div className="newTag">
        <div className="d-flex" >
            <input
                type="text"
                placeholder="add tag"
                value={addTag}
                onChange={e => setAddTag(e.target.value)}
            /> 
            <button onClick={handleClick}>
                Add
            </button>
        </div>
            <h3>Current Tags:</h3>
            <ul>
            {newTags.map(tag => (
            <li key={tag}>
                {tag}{' '}
                <button onClick={() => {
                    const index = newTags.indexOf(tag);
                    setNewTags(
                        newTags.splice((index, 1))
                    );
                }}>
                ✗
                </button>
            </li>
            ))}
        </ul>
        </div>);
    };
    

    function addNewPost() {
        return (<>
            <form
            action=""
            className="newPost"
            >
                <input
                    type="text"
                    name="title"
                    className=""
                    placeholder="Title of Post"
                    value={newPost.title}
                    onChange={handleChange}
                />  
                <input
                    type="text"
                    name="body"
                    className=""
                    placeholder="Body of Post"
                    value={newPost.body}
                    onChange={handleChange}
                /> 
                {addNewTags()}
                <input
                    type="submit"
                    value="Create Post"
                    className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
                    onClick={createPost}
                />

            </form>
        </>)
    };
      

    
    return (
        <div>
            {headerInfo()}
            {postList()}
            {(sessionStorage.username == params.username?.toString()) ? (<>{addNewPost()}</>) : (<></>)}
            
        </div>
    );
}