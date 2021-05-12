import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userAction";
import MessageBox from "../comp/message";

export default function RegisterScreen(props) {
    const [name, setName] = useState("");
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [dob, setDob] = useState("");

    const redirect = props.location.search
        ? props.location.search.split("=")[1]
        : "/";

    const { userInfo, error } = useSelector((state) => state.userRegister);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Password and confirm password are not match");
        } else {
            dispatch(register(name, username, password, dob));
        }
    };

    useEffect(() => {
        if (userInfo.length) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1> Create Account </h1>
                </div>

                {error && <MessageBox variant="danger"> {error} </MessageBox>}
                <div>
                    <label htmlFor="name"> Name </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="username"> Username </label>
                    <input
                        type="username"
                        id="username"
                        placeholder="Enter username"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter confirm password"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="date"> DOB </label>
                    <input
                        type="date"
                        id="date"
                        placeholder="Enter date"
                        required
                        onChange={(e) => setDob(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Register
          </button>
                </div>
                <div>
                    <label />
                    <div>
                        Already have an account ?
            <Link to={`/signin?redirect=${redirect}`}> Sign - In </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}