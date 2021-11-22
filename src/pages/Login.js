import { useState } from 'react';
import { Context } from "../Global";
import { useContext } from 'react';
import Header from "../components/Header";

const Login = (props) => {
    const [state, setState] = useContext(Context);
    const [form, setForm] = useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = form;
        fetch(`${state.url}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json()).then(data => {
            console.log("token is:", data);
            //store token for refresh
            window.localStorage.setItem("token", JSON.stringify(data));
            setState({ ...state, token: data.token });
            setForm({
                username: '',
                password: ''
            });
            props.history.push('/bookmark')
        });
    }
    return (<div className="full-page-style">
        <Header/>
        <form onSubmit={handleSubmit}>
            <input
                type="text" name="username" value={form.username}
                onChange={handleChange}
                className="input-style"></input>
            <input
                type="password" name="password" value={form.password}
                onChange={handleChange}
                className="input-style"></input>
            <input className="button-style"type="submit" value="LOGIN"></input>
        </form>
    </div>)
};
export default Login;