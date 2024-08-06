import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Login() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
    
        setUser(prevValue => {
          return {
            ...prevValue,
            [name]: value
          };
        });
    }

    const login = (e) => {
        e.preventDefault();
        console.log(user.username, user.password);

        sessionStorage.setItem("username", user.username
        );
        setUser("","");
        location.reload();
    };

    const logout = () => {
        sessionStorage.removeItem("username");
        location.reload();
    };

    return (

        <div className="login">
            <h1>Login Page</h1>
            {(!sessionStorage.username) ? (
                <form action="">
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={user.username}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={user.password}
                        placeholder="Password"
                    />
                    <button
                        type="submit"
                        onClick={login}
                    >
                        GO
                    </button>
                </form>
            ) : (
                <>
                    <h1>User is logged in</h1>
                    <button onClickCapture={logout}>
                        Logout User
                    </button>
                </>
            )}
        </div>
    );
}

