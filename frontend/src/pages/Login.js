import { useState } from "react";
import API from "../services/api";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await API.post("/login", { email, password });
            localStorage.setItem("token", response.data.token);
            alert("Login successful");
        } catch (error) {
            alert("Login failed");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
