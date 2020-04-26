import React from 'react';
import './list_header.css';

const List_header = (props) => {
    const { menu } = props

    const listElement = menu.map((element, index)=> {
    return (
        <li key={index + "e"} className="item">{element}</li>
    )
        
    })
return (
    <ul className="head_menu">
        {listElement}
    </ul>
)
}
export default List_header