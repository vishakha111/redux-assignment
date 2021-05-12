import React from "react";

const AutoSuggest = ({ list = [], handleSelection }) => {
    return (
        <div>
            {" "}
            {list.length ? (
                <div
                    style={{
                        maxWidth: "300px",
                    }}
                >
                    {" "}
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className="list-name"
                            onClick={(ev) => handleSelection(ev, item.name)}
                        >
                            {item.name}{" "}
                        </div>
                    ))}{" "}
                </div>
            ) : (
                    <div className="list-group-item"> No suggesstion found </div>
                )}{" "}
        </div>
    );
};

export default AutoSuggest;