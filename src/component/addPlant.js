import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/plantAction";
import MessageBox from "../comp/message";

export default function AddPlants(props) {
    const [name, setName] = useState("");
    const [description, setDesription] = useState("");

    const plantsRegister = useSelector((state) => state.plants);
    const { plantsInfo, error } = plantsRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(register(name, description));
    };
    useEffect(() => {
        if (plantsInfo) {
            // props.history.push(redirect);
        }
    }, [props.history, plantsInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1> ADD PLANTS </h1>{" "}
                </div>{" "}
                {error && <MessageBox variant="danger"> {error} </MessageBox>}{" "}
                <div>
                    <label htmlFor="name"> Name </label>{" "}
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>{" "}
                </div>{" "}
                <div>
                    <label htmlFor="description"> Desription </label>{" "}
                    <input
                        type="description"
                        id="description"
                        placeholder="Enter description"
                        required
                        onChange={(e) => setDesription(e.target.value)}
                    ></input>{" "}
                </div>{" "}
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Add Plant{" "}
                    </button>{" "}
                </div>{" "}
                <div>
                    <Link to={`/plants`}>Go to plants list?</Link>
                </div>
            </form>{" "}
        </div>
    );
}