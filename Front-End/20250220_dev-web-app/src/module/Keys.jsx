import React from "react";

function Keys() {
    const employee=[
        {
            id:1,
            name:'User 1',
            age: 30
        },
        {
            id:2,
            name:'User 2',
            age:25
        }

    ]
    const empList=employee.map(emp=>
        <li key={emp.id}><b>Name:</b> {emp.name} <b>Age:</b> {emp.age}</li>
    )
    return (
        <ul>{empList}</ul>
    )
}

export default Keys