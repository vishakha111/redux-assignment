import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SuggestList from "../comp/suggestionList";

export default function PlantsList(props) {
    const [list, setList] = useState([]);

    const plantsRegister = useSelector((state) => state.plants);
    const { plantsInfo } = plantsRegister;

    const submitHandler = (e) => {
        e.preventDefault();
        props.history.push("/addPlants");
    };
    useEffect(() => {
        if (plantsInfo) {
            console.log(plantsInfo);
            // props.history.push(redirect);
        }
    }, [props.history, plantsInfo]);

    const handleChange = (event) => {
        // if (event.target.value.trim() !="")
        // {
        console.log("Search----------" + event.target.value);
        let updatedList = plantsInfo.filter(function (item) {
            return (
                item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
            );
        });

        setList(updatedList);

        updatedList.map((list) => highlight(list.name));
    };

    function highlight(text) {
        var inputText = document.getElementById("inputText");
        var innerHTML = inputText.innerHTML;
        var index = innerHTML.indexOf(text);
        if (index >= 0) {
            innerHTML =
                innerHTML.substring(0, index) +
                "<span class='highlight'>" +
                innerHTML.substring(index, index + text.length) +
                "</span>" +
                innerHTML.substring(index + text.length);
            inputText.innerHTML = innerHTML;
        }
    }

    const searchByString = (e, text) => {
        let plant = plantsInfo.find((plant) => plant.name === text);
        return window.alert(plant.description);
    };

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div className="plants-list">
                    <h1>AVAILABLE PLANTS </h1>

                    <input id="list" label="Search" onChange={handleChange} />
                    {list.length ? (
                        <SuggestList list={list} handleSelection={searchByString} />
                    ) : null}
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody id="inputText">
                            {plantsInfo.map((plants, index) => (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{plants.name}</td>
                                    <td>{plants.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <Link to={`/addPlants`}>Go To Add plants ?</Link>
                </div>
            </form>
        </div>
    );
}