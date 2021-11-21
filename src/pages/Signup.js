import { useState } from 'react';
import { Context } from "../Global";
import { useContext } from 'react';
import Home from "./Home";
const Signup = (props) => {
    const { state, setState }=useContext(Context);
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
        fetch(`${state.url}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then(response => response.json()).then(data => {
            console.log(data);
            //store token for refresh
            window.localStorage.setItem("token", JSON.stringify(data));
            setState({ ...state, token: data.token });
            setForm({
                username: '',
                password: ''
            });
            //not sure this is where i want to push after login test**
            props.history.push('/login')
        });
    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <input
                type="text" name="username" value={form.username}
                onChange={handleChange}></input>
            <input
                type="password" name="password" value={form.password}
                onChange={handleChange}></input>
            <input type="submit" value="SIGNUP"></input>
        </form>
    </div>)
};
export default Signup;