import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userAction";

import MessageBox from "../comp/message";
import storage from "../storage";

export default function SigninScreen(props) {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const redirect = props.location.search
        ? props.location.search.split("=")[1]
        : "/";

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, error } = userRegister;

    const userSignIn = useSelector((state) => state.userSignin);
    const { loggedInUser } = userSignIn;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(userInfo, username, password));
        storage.session.setItem("authenticatedUser", loggedInUser);

        props.history.push("/addPlants");
    };
    useEffect(() => {
        if (userInfo.length) {
            // props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1> Sign In </h1>
                </div>

                {error && <MessageBox variant="danger"> {error} </MessageBox>}
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
                    <label />
                    <button className="primary" type="submit">
                        Sign In
          </button>
                </div>
                <div>
                    <label />
                    <div>
                        New customer ?
            <Link to={`/register?redirect=${redirect}`}>
                            Create your account
            </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}