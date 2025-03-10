import React from 'react'

function List(){
    const menuItems = [1, 2, 3, 4, 5];
    const  updatedList= menuItems.map((menuItems)=>{
        return <li>{menuItems}</li>
    });
    return(
        <ul>{updatedList}</ul>
    )

}

export default List