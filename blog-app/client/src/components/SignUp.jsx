import { useState, useEffect } from "react";
import { useParams, useNavigate, redirect } from "react-router-dom";
import axios from 'axios';


export default function SignUp() {
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        fName: "",
        lName: "",
        blogTitle: "",
        blogDescription: ""
    });

    
    //creating a new post
        //handles input form changes
    function handleChange(event) {
        const { name, value } = event.target;
    
        setNewUser(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
    }

    async function createUser (e) {
        e.preventDefault(); 
        
        //set author
        const nUser = {...newUser};

        //console the post
        console.log(nUser);

        //send to server
        await axios.post(`http://localhost:5050/blog/signup`, nUser)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }).finally(function() {
            setNewUser({username: "",
                password: "",
                fName: "",
                lName: "",
                blogTitle: "",
                blogDescription: ""});
            redirect("/");
          });
        
    };

    function addNewUser() {
        return (<>
        <div className="newUser">
            <form
            action=""
            className=""
            >
                <input
                    type="text"
                    name="username"
                    className=""
                    placeholder="Username"
                    value={newUser.username}
                    onChange={handleChange}
                />  
                <input
                    type="password"
                    name="password"
                    className=""
                    placeholder="Password"
                    value={newUser.password}
                    onChange={handleChange}
                /> 
                <input
                    type="text"
                    name="fName"
                    className=""
                    placeholder="First Name"
                    value={newUser.fName}
                    onChange={handleChange}
                /> 
                <input
                    type="text"
                    name="lName"
                    className=""
                    placeholder="Last Name"
                    value={newUser.lName}
                    onChange={handleChange}
                /> 
                <input
                    type="text"
                    name="blogTitle"
                    className=""
                    placeholder="Blog Title"
                    value={newUser.blogTitle}
                    onChange={handleChange}
                /> 
                <input
                    type="text"
                    name="blogDescription"
                    className=""
                    placeholder="Blog Description"
                    value={newUser.blogDescription}
                    onChange={handleChange}
                /> 
                <input
                    type="submit"
                    value="Create User"
                    className="inline-flex whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-slate-100 hover:text-accent-foreground h-9 rounded-md px-3 cursor-pointer mt-4"
                    onClick={createUser}
                />

            </form>
            </div>
        </>)
    };
      
      
    return (
        <div>
            {addNewUser()}   
        </div>
    );
}