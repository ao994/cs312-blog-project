import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import UserResult from "./UserResult";
import axios from "axios";


export default function Search() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchType, setSearchType] = useState("posts");
    const [searchField, setSearchField] = useState("");

    // This method fetches the records from the database.
    useEffect(() => {
        async function getPosts() {
            axios.get(`http://localhost:5050/blog/search`, {
                params: {
                  content: searchField,
                  type: searchType
                }
              })
              .then(function (response) {
                console.log(response);
                if (response) {
                    setPosts(response.json());
                  }
                
              })
              .catch(function (error) {
                console.log(error);
              })
        }
        async function getUsers() {
            axios.get(`http://localhost:5050/blog/search`, {
                params: {
                  content: searchField,
                  type: searchType
                }
              })
              .then(function (response) {
                console.log(response);
                setUsers(response);
              })
              .catch(function (error) {
                console.log(error);
              })
        }
        if (searchType == "posts")
        {
            getPosts();
        } 
        else if (searchType == "tags") {
            getPosts();
        }
        else if(searchType == "users") {
            getUsers();
        }
        return;
    }, [searchField, searchType]);


    const handleChange = e => {
        setSearchField(e.target.value);
      };

    function searchBar() {
        return (<>
            <div className="">
                <h2 className="">Search Users, Posts, or Tags</h2>
            </div>
            <div className="">
            <fieldset>
            <legend>Search Parameters</legend>
            <input type="radio" id="users" name="sParam" value="users" checked={searchType === "users"}  onChange={(e) => setSearchType(e.target.value)}/>
            <label htmlFor="users">Users</label><br />

            <input type="radio" id="posts" name="sParam" value="posts" checked={searchType === "posts"}  onChange={(e) => setSearchType(e.target.value)}/>
            <label htmlFor="posts">Posts</label><br />

            <input type="radio" id="tags" name="sParam" value="tags" checked={searchType === "tags"}  onChange={(e) => setSearchType(e.target.value)}/>
            <label htmlFor="tags">Tags</label>
        </fieldset>
                <input 
                className=""
                type = "search" 
                placeholder = "Search" 
                onChange = {handleChange}
                value={searchField}
                />
            </div>
        </>);
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

    function userList() {
        return users.map((userR) => {
            return (
                <UserResult
                  key={userR._id}
                  id={userR._id}
                  username={userR.username}
                  fName={userR.fName}
                  lName={userR.lName}
                  blogTitle={userR.blogTitle}
                  blogDescription={userR.blogDescription}
                />
            );
        });
    }
    
    function resultList() {
        if(searchType == "posts"){
            return(<>{postList()}</>);
        }else if(searchType == "tags") {
            return(<>{postList()}</>);
        } else if (searchType == "users"){
            return(<>{userList()}</>);
        }
        
    }
    
    return (
        <div>
            {searchBar()}
            {resultList()}
        </div>
    );
}