import { useState } from "react";


function Login() {
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

        sessionStorage.setItem("username",
            user.username
        );
        setUser("","");
    };

    const logout = () => {
        sessionStorage.removeItem("username");
        location.reload();
    };

    return (

        <div style={{ textAlign: "center" }}>
            <h1>Login page </h1>
            {(sessionStorage.length == 0) ? (
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
                        logout user
                    </button>
                </>
            )}
        </div>
    );
}

export default Login;
