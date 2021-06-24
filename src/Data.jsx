import React from "react";

const Data = () => {
    const names = [
        {
            id: 1,
            name: "raj",
        },
        {
            id: 2,
            name: "rahul",
        },
        {
            id: 3,
             name: "rinkle",
        },
        {
            id: 4,
            name: "raman",
        },

    ];

    return (
        <>

            <select className="list">
                {names.map((option) => (
                    <option value={option.name}> {option.name}</option>
           ))}
            </select>
      </>
    );
};
export default Data;