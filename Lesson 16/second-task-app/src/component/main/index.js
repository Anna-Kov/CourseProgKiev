import React from 'react';
import './main.css';

const Main = (props) => {
    const { menu } = props
    const listPost = menu.map((element, index) => {
        return (
            <li key={index + "b"} className="sidebar">{element}</li>
        )
    })
    return (
        <div className="poster">
        <ul>
            {listPost}
        </ul>
        </div>
    )
}

export default Main